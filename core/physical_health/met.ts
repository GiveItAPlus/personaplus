/*
CALCULATE THE METABOLIC EQUIVALENT OF A TASK
*/

import CreateComponentDataUtilities from "@/core/tools/core_library_data_builder";
import { CoreLibraryResponse } from "@/core/types/core_library_response";
import { MET_DATA, METBaseActivity, METCalculableActivity } from "../met_data";
import { kilometersPerHourToMilesPerHour } from "numeric-utils";

export const { getSources, getLastUpdate } = CreateComponentDataUtilities(
    "01/07/2024", // TODO change when we're done with this
    [
        "https://en.wikipedia.org/wiki/Metabolic_equivalent_of_task",
        "https://pacompendium.com/",
    ],
);

/**
 * Returns the Metabolic Equivalent of a Task
 * @param activity The type of activity.
 * @param props This is an object that varies props depending on the chosen base activity.
 * @returns A standard `CoreLibraryResponse` with the desired results.
 */
export default function calculateMetabolicEquivalentOfTask(
    activity: METBaseActivity,
    props: { speedKmH?: number },
): CoreLibraryResponse {
    function runningMET(): METCalculableActivity {
        if (!props.speedKmH)
            throw `No speed provided for running METBasedActivity.`;

        const mph = kilometersPerHourToMilesPerHour(props.speedKmH);

        // numbers aren't "wrong", they're manually adjusted since PAC data doesn't cover every single case
        // for whatever reason, smh

        // also forgive the nesting but how else do i do this :sob:
        // an if/else chain would be worse wouldn't it be?
        return mph <= 4.2
            ? "running_4-to-4.2mph"
            : mph <= 4.8
              ? "running-4.3-to-4.8mph"
              : mph <= 5.35
                ? "running_5.0-to-5.2mph"
                : mph <= 5.9
                  ? "running_5.5-5.8mph"
                  : mph <= 6.5
                    ? "running_6-6.3mph"
                    : mph <= 6.8
                      ? "running_6.7mph"
                      : mph <= 7
                        ? "running_7mph"
                        : mph <= 7.5
                          ? "running_7.5mph"
                          : mph <= 8
                            ? "running_8mph"
                            : mph <= 8.6
                              ? "running_8.6mph"
                              : mph <= 9
                                ? "running_9mph"
                                : mph <= 9.4
                                  ? "running_9.3-to-9.6mph"
                                  : mph <= 9.8
                                    ? "running_10mph"
                                    : mph <= 11
                                      ? "running_11mph"
                                      : mph <= 12
                                        ? "running_12mph"
                                        : mph <= 13
                                          ? "running_13mph"
                                          : "running_14mph";
    }

    const activityID: METCalculableActivity =
        activity === "running" ? runningMET() : "running-4.3-to-4.8mph"; // <- placeholder;

    const MET = MET_DATA[activityID];

    return {
        result: MET,
        context: `The MET is, for the ${activity} context, ${MET}.`,
        explanation:
            // TODO: this is a bit eh
            "Performance of a sporting session can be measured in burnt calories, which are obtained by calculating the time spent on the exercise, the subject's weight, and the Metabolic Equivalent of Task (MET), a value that helps measure the intensity of a task.",
    };
}
