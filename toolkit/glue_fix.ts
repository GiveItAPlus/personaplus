/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2025 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * You are in: @/types/glue_fix.ts
 * Basically: Specific "glue fixes" for fixing specific (probably stupid) issues that repeat themselves.
 *
 * <=============================================================================>
 */

import * as n from "../node_modules/@zakahacecosas/number-utils/mod";
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

/**
 * Normalizes a string to help work around it.
 *
 * [Copied from my own JSR package.](https://jsr.io/@zakahacecosas/string-utils). NodeJS gives issues trying to run with it installed.
 */
function normalizeStr(str: string): string {
    return str
        .normalize("NFD") // normalize á, é, etc.
        .replace(/[\u0300-\u036f]/g, "") // remove accentuation
        .replace(/\s+/g, " ") // turn "my      search  query" into "my search query"
        .trim(); // turn "      my search query   " into "my search query"
}

/**
 * Validates if a value that may be a string is really a string or not.
 *
 * [Copied from my own JSR package.](https://jsr.io/@zakahacecosas/string-utils). NodeJS gives issues trying to run with it installed.
 */
export function validateStr(str: any): str is string {
    if (
        str === undefined ||
        str === null ||
        typeof str !== "string" ||
        normalizeStr(str) === ""
    ) {
        return false;
    }

    return true;
}

/**
 * [My own string utilities package.](https://jsr.io/@zakahacecosas/number-utils)
 *
 * This export is a glue fix. The package is from JSR and not npm, and Metro dislikes that.
 */
export const NumUtils = n;

/** All usable `Ionicons` */
export type UsableIcon = React.ComponentProps<typeof Ionicons>["name"];
