// TODO - figure this thing out
import { ReactElement, useCallback, useEffect, useState } from "react";
import * as Location from "expo-location";
import { StyleSheet, View } from "react-native";
import { BetterTextNormalText } from "@/components/text/better_text_presets";
import GapView from "@/components/ui/gap_view";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import BetterButton from "@/components/interaction/better_button";
import TopBar from "@/components/navigation/top_bar";
import { TopView } from "@/components/ui/pages/sessions";
import { FullProfile } from "@/types/user";
import { OrchestrateUserData } from "@/toolkit/user";
import Loading from "@/components/static/loading";

/** Settings for this thingy */
const SETTINGS = {
    /** Interval (in meters) for the location to update. */
    DIST_INTERVAL_METERS: 1,
    /** Min amount of time (in milliseconds) for the location to update. */
    TIME_INTERVAL_MS: 1500,
    /** Min distance in meters required for the distance to update. */
    MIN_BUMP_DISTANCE: 1,
    /** Max distance in meters required for the distance to update. */
    MAX_BUMP_DISTANCE: 20,
    /** Min user speed for location for the distance to update. */
    MIN_BELIEVABLE_SPEED: 0,
    /** Max user speed for location for the distance to update. */
    MAX_BELIEVABLE_SPEED: 15,
};

const styles = StyleSheet.create({
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    labelWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
});

/**
 * Calculates the distance between two positions. Returns in meters.
 *
 * @param {number} lat1 Latitude of position 1.
 * @param {number} lon1 Longitude of position 1.
 * @param {number} lat2 Latitude of position 2.
 * @param {number} lon2 Longitude of position 2.
 * @returns {number}
 */
function CalculateDistanceInMetersBetweenInterval(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
): number {
    const earthRadius = 6371e3; // earth radius in meters
    // NO FUCKING CLUE WHAT THIS IS BUT IT WORKS (I THINK)
    // NI PUTA IDEA DE QUE ES ESTO PERO FUNCIONA (CREO)
    const lat1Radians: number = (lat1 * Math.PI) / 180;
    const lat2Radians: number = (lat2 * Math.PI) / 180;
    const deltaLat: number = ((lat2 - lat1) * Math.PI) / 180;
    const deltaLon: number = ((lon2 - lon1) * Math.PI) / 180;

    const a: number =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(lat1Radians) *
            Math.cos(lat2Radians) *
            Math.sin(deltaLon / 2) *
            Math.sin(deltaLon / 2);
    const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadius * c;
}

export default function PersonaPlusRunningTracker(): ReactElement {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0,
    });
    const [distanceMeters, setDistanceMeters] = useState(0);
    const [isTracking, setIsTracking] = useState(false);
    const [locationSubscription, setLocationSubscription] =
        useState<Location.LocationSubscription | null>(null);
    const [user, setUser] = useState<FullProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // startTracking and stopTracking were for whatever reason considered "dependencies" of the useEffect below (eslint)
    // so i wrapped them into a useCallback to memo them and avoid re-renders
    // so i'm not worried about having a function as a dependency of something
    const startTracking: () => Promise<void> =
        useCallback(async (): Promise<void> => {
            // permissions
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.error("Location permission not granted");
                return;
            }

            // watch location
            const subscription: Location.LocationSubscription =
                await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.High,
                        distanceInterval: SETTINGS.DIST_INTERVAL_METERS,
                        timeInterval: SETTINGS.TIME_INTERVAL_MS,
                        mayShowUserSettingsDialog: true,
                    },
                    (position: Location.LocationObject): void => {
                        const { latitude, longitude } = position.coords;

                        // calc distance
                        if (
                            location.latitude !== 0 &&
                            location.longitude !== 0 &&
                            position.coords.accuracy! < 20
                        ) {
                            const dist: number =
                                CalculateDistanceInMetersBetweenInterval(
                                    location.latitude,
                                    location.longitude,
                                    latitude,
                                    longitude,
                                );

                            const speed: number =
                                dist / (SETTINGS.TIME_INTERVAL_MS / 1000); // m/s
                            // min & max are to ignore stupid values that can mess up the stats
                            if (
                                dist > SETTINGS.MIN_BUMP_DISTANCE &&
                                dist < SETTINGS.MAX_BUMP_DISTANCE &&
                                speed > SETTINGS.MIN_BELIEVABLE_SPEED &&
                                speed < SETTINGS.MAX_BELIEVABLE_SPEED
                            ) {
                                setDistanceMeters(
                                    (prevDistance: number): number =>
                                        prevDistance + dist,
                                );
                                setLocation({ latitude, longitude });
                            }
                        }
                    },
                );

            setLocationSubscription(subscription);
        }, [location]);
    const stopTracking: () => void = useCallback((): void => {
        // Clear and delete subscription when component unmounts to save resources
        if (locationSubscription) {
            locationSubscription.remove();
            setLocationSubscription(null);
        }
    }, [locationSubscription]);

    useEffect((): (() => void) => {
        if (isTracking) {
            startTracking();
        } else {
            stopTracking();
        }

        return (): void => {
            if (locationSubscription) {
                locationSubscription.remove();
                setLocationSubscription(null);
            }
        };
    }, [isTracking, startTracking, stopTracking, locationSubscription]);

    useEffect(() => {
        async function handler() {
            const data = await OrchestrateUserData();
            setUser(data);
            setLoading(false);
        }
        handler();
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <TopBar
                includeBackButton={true}
                header="Running tracker"
                subHeader="Experimental feature!"
            />
            <TopView
                objective={{
                    exercise: "Running",
                    identifier: 0,
                    // @ts-expect-error invalid (missing data)
                    specificData: { estimateSpeed: 9 },
                }}
                verbalName={isTracking ? `(RUNNING)` : "(PAUSED)"}
                user={user!}
            />
            <GapView height={10} />
            <View style={styles.buttonContainer}>
                <BetterButton
                    buttonText={isTracking ? "Stop tracking" : "Start tracking"}
                    action={(): void =>
                        setIsTracking((prev: boolean): boolean => !prev)
                    }
                    buttonHint={
                        isTracking
                            ? "Stops tracking movement"
                            : "Start tracking movement"
                    }
                    style={isTracking ? "ACE" : "DEFAULT"}
                />
                <BetterButton
                    buttonText="Reset distance"
                    action={(): void => {
                        setDistanceMeters(0);
                        setIsTracking(false);
                        setLocationSubscription(null);
                        setLocation({ latitude: 0, longitude: 0 });
                    }}
                    buttonHint="Restarts the total distance counter"
                    style="DEFAULT"
                />
            </View>
            <GapView height={10} />
            <View style={styles.labelWrapper}>
                <View style={styles.buttonContainer}>
                    <Ionicons name="run-circle" size={25} color="#FFF" />
                    <BetterTextNormalText>
                        DIST {distanceMeters.toFixed(2)} m
                    </BetterTextNormalText>
                </View>
                <View style={styles.buttonContainer}>
                    <Ionicons name="pin-drop" size={25} color="#FFF" />
                    <BetterTextNormalText>
                        LAT {location.latitude.toFixed(2)}
                    </BetterTextNormalText>
                </View>
                <View style={styles.buttonContainer}>
                    <Ionicons name="pin-drop" size={25} color="#FFF" />
                    <BetterTextNormalText>
                        LON {location.longitude.toFixed(2)}
                    </BetterTextNormalText>
                </View>
            </View>
        </>
    );
}
