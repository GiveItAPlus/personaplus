/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2025 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * You are in: @/app/(tabs)/toolkit.tsx
 * Basically: A toolkit with some random but useful tools for users.
 *
 * <=============================================================================>
 */

import BetterButton from "@/components/interaction/better_button";
import TopBar from "@/components/navigation/top_bar";
import Division from "@/components/ui/sections/division";
import Section from "@/components/ui/sections/section";
import { Routes } from "@/constants/routes";
import { router } from "expo-router";
import React from "react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

export default function Toolkit(): ReactElement {
    const { t } = useTranslation();

    return (
        <>
            <TopBar
                includeBackButton={false}
                header={t("pages.toolkit.header")}
                subHeader={t("pages.toolkit.subHeader")}
            />
            <Section kind="Tools">
                <Division
                    iconName="timer"
                    header={t("pages.toolkit.stopwatchTool.name")}
                    subHeader={t("pages.toolkit.stopwatchTool.desc")}
                >
                    <BetterButton
                        action={() =>
                            router.push(Routes.TOOLKIT.RUNNING_STOPWATCH)
                        }
                        style="ACE"
                        buttonText={t("pages.toolkit.buttonText")}
                        buttonHint={t("pages.toolkit.buttonHint")}
                    />
                </Division>
                <Division
                    iconName="bedtime"
                    header={t("pages.toolkit.focusTool.name")}
                    subHeader={t("pages.toolkit.focusTool.desc")}
                >
                    <BetterButton
                        action={() => router.push(Routes.TOOLKIT.FOCUS_TRAIN)}
                        style="ACE"
                        buttonText={t("pages.toolkit.buttonText")}
                        buttonHint={t("pages.toolkit.buttonHint")}
                    />
                </Division>
            </Section>
        </>
    );
}
