import { expect } from "@jest/globals";
import { toBeWithinMargin } from "../tools/jest";
import { MET_DATA, RangeOutMetData } from "../met_data";

expect.extend({
    toBeWithinMargin,
});

declare module "expect" {
    interface AsymmetricMatchers {
        toBeWithinMargin(expected: number, margin?: number): void;
    }
    interface Matchers<R> {
        toBeWithinMargin(expected: number, margin?: number): R;
    }
}

describe("MET data retriever", () => {
    // expected results are provided from the formula itself (manually done)
    // allowed error margin is of 0.1

    test("should calculate basic exercise", () => {
        const expected = MET_DATA["running-10.1mph/11mph"];
        const result = RangeOutMetData("running", 10.3);

        expect(result).toBeWithinMargin(expected, 0.1);
    });

    test("should calculate basic exercise above max", () => {
        const expected = MET_DATA["running-13.1mph/14mph"];
        const result = RangeOutMetData("running", 15);

        expect(result).toBeWithinMargin(expected, 0.1);
    });

    test("should calculate basic exercise below min", () => {
        const expected = MET_DATA["running-4mph/4.2mph"];
        const result = RangeOutMetData("running", 3);

        expect(result).toBeWithinMargin(expected, 0.1);
    });

    test("should calculate complex exercise", () => {
        const expected = MET_DATA["bicycling_stationary_60w-2.9/3"];
        const result = RangeOutMetData("bicycling_stationary_60w", 2.95);

        expect(result).toBeWithinMargin(expected, 0.1);
    });
});
