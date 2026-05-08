/* <=============================================================================>
 *  PersonaPlus - Give yourself a plus!
 *  Copyright (C) 2023-2026 The "Give It A Plus" organization and the PersonaPlus contributors. All rights reserved.
 *  Distributed under the terms of the GNU General Public License version 3.0.
 *  See the LICENSE file in the root of this repository for more details.
 * <=============================================================================>
 *
 * Type definitions for date related stuff.
 *
 * <=============================================================================>
 */

import { validate } from "@zhc.js/string-utils";

/**
 * Correct current date as both an object and a string.
 *
 * @export
 * @interface CorrectCurrentDate
 */
export interface CorrectCurrentDate {
    /**
     * String date.
     *
     * @type {TodaysDate}
     */
    string: TodaysDate;
    /**
     * Object date.
     *
     * @type {TodaysDateObject}
     */
    object: TodaysDateObject;
}

/**
 * A type for today's date string, using DD/MM/YYYY format.
 *
 * @export
 */
export type TodaysDate = `${string}/${string}/${string}`;

/**
 * A regular expression to test `TodaysDate` constants against of.
 *
 * @type {RegExp}
 */
const TodaysDateRegularExpression: RegExp = new RegExp(
    "^([0-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\\d{4}$",
);

/**
 * Checks if a given string complies with the TodaysDate format.
 *
 * @export
 * @param {*} toValidate What to check.
 * @returns {toValidate is TodaysDate} True if it matches the format, false if otherwise.
 */
export function ValidateTodaysDateString(
    toValidate: any,
): toValidate is TodaysDate {
    return validate(toValidate) && TodaysDateRegularExpression.test(toValidate);
}

/**
 * An object with today's date.
 *
 * @export
 */
export type TodaysDateObject = {
    day: number;
    month: number;
    year: number;
};

/**
 * An object that stores hours, minutes, and seconds numeric values.
 *
 * @interface TimeObject
 */
export interface TimeObject {
    /**
     * Hours.
     *
     * @type {?number}
     */
    hours?: number;
    /**
     * Minutes.
     *
     * @type {?number}
     */
    minutes?: number;
    /**
     * Seconds.
     *
     * @type {?number}
     */
    seconds?: number;
}
