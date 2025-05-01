/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2025 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * You are in: @/app/(tabs)/toolkit/focus.tsx
 * Basically: A random tool to train your attention span.
 *
 * <=============================================================================>
 */

import TopBar from "@/components/navigation/top_bar";
import SessionTimer from "@/components/ui/pages/timer";
import { ShowToast } from "@/toolkit/android";
import React from "react";
import { ReactElement, useState } from "react";
import Colors from "@/constants/colors";
import GapView from "@/components/ui/gap_view";
import BetterButton from "@/components/interaction/better_button";
import { View, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 20,
    },
});

export default function Toolkit(): ReactElement {
    const [focusTraining, setFocusTraining] = useState<boolean>(false);
    const { t } = useTranslation();

    return (
        <>
            <TopBar
                includeBackButton={!focusTraining}
                header={t("pages.toolkit.focusTool.name")}
                subHeader={t("pages.toolkit.focusTool.desc")}
            />
            <GapView height={200} />
            <View style={styles.wrapper}>
                <SessionTimer
                    durationSeconds={300}
                    running={focusTraining}
                    timerColor={Colors.PRIMARIES.ACE.ACE}
                    onComplete={(): void => {
                        ShowToast(t("globals.interaction.wellDoneBud"));
                        setFocusTraining(false);
                    }}
                />
            </View>
            {!focusTraining && (
                <BetterButton
                    style={"ACE"}
                    buttonHint="Focus"
                    buttonText={(focusTraining
                        ? t("globals.interaction.done")
                        : t("globals.interaction.goAheadGood")
                    ).toUpperCase()}
                    action={(): void => {
                        setFocusTraining(true);
                    }}
                />
            )}
        </>
    );
}
