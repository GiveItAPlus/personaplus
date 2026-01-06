/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2026 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * A simple loader to show while loading stuff.
 *
 * <=============================================================================>
 */

import { ReactElement } from "react";
import BetterText from "@/components/text/better_text";
import { useTranslation } from "react-i18next";
import Colors from "@/constants/colors";
import FontSizes from "@/constants/font_sizes";

/**
 * Homemade simple loading page.
 *
 * @export
 * @returns {ReactElement} The loading page
 */
export default function Loading(): ReactElement {
    const { t } = useTranslation();

    return (
        <BetterText
            fontWeight="Regular"
            fontSize={FontSizes.REGULAR}
            textAlign="center"
            textColor={Colors.LABELS.SDD}
        >
            {t("globals.loading")}
        </BetterText>
    );
}
