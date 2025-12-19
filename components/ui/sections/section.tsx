// src/section/Section.tsx

import { ReactElement, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import BetterText from "@/components/text/better_text";
import Ionicons from "@expo/vector-icons/MaterialIcons";
import GapView from "@/components/ui/gap_view";
import { useTranslation } from "react-i18next";
import Colors from "@/constants/colors";
import FontSizes from "@/constants/font_sizes";
import { GetCommonScreenSize } from "@/constants/screen";
import { UsableIcon } from "@/toolkit/glue_fix";

// TypeScript, supongo
/**
 * SectionProps Interface
 *
 * @interface SectionProps
 */
interface SectionProps {
    /**
     * The kind of section. Depending on this, the section will display a title and icon, or another one.
     */
    kind:
        | "ActiveObjectives"
        | "PassiveObjectives"
        | "HowYouAreDoing"
        | "Unknown"
        | "Settings"
        | "Profile"
        | "About"
        | "Developer"
        | "Danger"
        | "Experiments"
        | "YourHealth"
        | "Tools";
    /**
     * Whether the width should be `"total"` (full screen) or `"parent"` (width of 100% to fill it's parent).
     *
     * @type {?("total" | "parent")}
     */
    width?: "total" | "parent";
    /**
     * Children that you can append to the section (one or more). While any `ReactNode` is valid, it's expected that you use a `<Division />` or more.
     *
     * @type {ReactNode}
     */
    children: ReactNode;
}

const styles = StyleSheet.create({
    section: {
        display: "flex",
        flexDirection: "column",
        borderRadius: 20,
        overflow: "hidden",
    },
    sectionChild: {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        justifyContent: "flex-start",
    },
});

/**
 * A PersonaPlus section.
 *
 * The PersonaPlus UI operates on a Section-Division basis, with Sections containing Divisions, being each Section of a different "kind", so it groups stuff by topics.
 *
 * @export
 * @param {SectionProps} p
 * @param {("Objectives" | "PassiveObjectives" | "HowYouAreDoing" | "Unknown" | "Settings" | "Profile" | "About" | "Developer" | "Danger" | "Experiments" | "Tools")} p.kind The kind of section. Depending on this, the section will display a title and icon, or another one.
 * @param {ReactElement} p.children Children that you can append to the section (one or more). While any `ReactElement` is valid, it's expected that you use a `<Division />` or more.
 * @returns {ReactElement}
 */
export default function Section({
    kind,
    width,
    children,
}: SectionProps): ReactElement {
    const { t } = useTranslation();

    const sectionMap: Record<
        SectionProps["kind"],
        {
            label: string;
            icon: UsableIcon;
            backgroundColor?: string;
            foregroundColor?: string;
        }
    > = {
        ActiveObjectives: {
            label: t("globals.objectives.active"),
            icon: "timer",
        },
        PassiveObjectives: {
            label: t("globals.objectives.passive"),
            icon: "calendar-today",
        },
        HowYouAreDoing: {
            label: t("globals.howYouAreDoing"),
            icon: "space-dashboard",
        },
        Unknown: {
            label: t("globals.somethingIsWrong"),
            icon: "question-mark",
        },
        Settings: {
            label: t("globals.settings"),
            icon: "settings",
        },
        Profile: {
            label: t("pages.profile.header"),
            icon: "person",
        },
        About: {
            label: t("globals.about"),
            icon: "info",
        },
        Developer: {
            label: t("globals.developers"),
            icon: "code",
        },
        Danger: {
            label: t("globals.danger"),
            icon: "warning",
            backgroundColor: Colors.PRIMARIES.WOR.WOR,
            foregroundColor: Colors.MAIN.APP,
        },
        Experiments: {
            label: t("globals.experiments"),
            icon: "science",
            backgroundColor: Colors.PRIMARIES.HMM.HMM,
            foregroundColor: Colors.MAIN.APP,
        },
        YourHealth: {
            label: t("globals.yourHealth"),
            icon: "favorite",
        },
        Tools: {
            label: t("pages.toolkit.header"),
            icon: "workspaces",
        },
    };

    const data = sectionMap[kind] ?? {
        label: "UNKNOWN",
        icon: "question-mark",
    };

    const backgroundColor = data.backgroundColor ?? Colors.MAIN.SECTION;
    const foregroundColor = data.foregroundColor ?? Colors.LABELS.SHL;

    const sectionWidth =
        width === "parent" ? "100%" : GetCommonScreenSize("width");

    return (
        <View
            style={[
                styles.section,
                {
                    width: sectionWidth,
                    backgroundColor,
                },
            ]}
        >
            <View style={styles.sectionChild}>
                <Ionicons name={data.icon} size={15} color={foregroundColor} />
                <GapView width={10} />
                <BetterText
                    textAlign="normal"
                    fontWeight="Bold"
                    fontSize={FontSizes.SMALL}
                    textColor={foregroundColor}
                >
                    {data.label.toUpperCase()}
                </BetterText>
            </View>
            {children}
        </View>
    );
}
