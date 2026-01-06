/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2026 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * Specific "glue fixes" for fixing specific (probably stupid) issues that repeat themselves.
 *
 * <=============================================================================>
 */

import { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/MaterialIcons";

/**
 * Use this to extend type interfaces for URL params when passing data from page to page.
 *
 * This type is a glue fix, otherwise a type error happens because SessionParams is not compatible with UnknownInputParams from ExpoRouter
 *
 * @export
 */
export type ExpoRouterParams = Record<
    string,
    string | number | undefined | null | (string | number)[]
>;

/** All usable `Ionicons` */
export type UsableIcon = ComponentProps<typeof Ionicons>["name"];
