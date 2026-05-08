/*
CALCULATE THE METABOLIC EQUIVALENT OF A TASK
*/

import CreateComponentDataUtilities from "@/core/tools/core_library_data_builder";
import { CoreLibraryResponse } from "@/core/types/core_library_response";
import { METBaseActivity, RangeOutMetData } from "../met_data";
import { kilometersPerHourToMilesPerHour } from "@zhc.js/number-utils";

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
 * @param quantifier Whatever number you measure the activity with. For running, kilometers per hour; for static biking, watts, and so on.
 * @returns A standard `CoreLibraryResponse` with the desired results.
 */
export default function calculateMetabolicEquivalentOfTask(
    activity: METBaseActivity,
    quantifier: number,
): CoreLibraryResponse {
    const parsedQuantifier =
        activity === "running"
            ? kilometersPerHourToMilesPerHour(quantifier)
            : quantifier; // TODO

    const MET = RangeOutMetData(activity, parsedQuantifier);

    return {
        result: MET,
        context: `The MET is, for the ${activity} context, ${MET}.`,
        explanation:
            // TODO: this is a bit eh
            "Performance of a sporting session can be measured in burnt calories, which are obtained by calculating the time spent on the exercise, the subject's weight, and the Metabolic Equivalent of Task (MET), a value that helps measure the intensity of a task.",
    };
}
