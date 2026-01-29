import { GetPassiveObjectiveStreak } from "@/toolkit/objectives/passive_objectives";
import {
    AlterDate,
    GetCurrentDateCorrectly,
    StringifyDate,
} from "@/toolkit/today";

describe("streaks", () => {
    test("handles streak of 1", () => {
        const out = GetPassiveObjectiveStreak(1234, [
            {
                id: 1234,
                date: GetCurrentDateCorrectly().string,
                data: {
                    wasDone: true,
                    objective: {
                        createdAt: GetCurrentDateCorrectly().string,
                        id: 1234,
                        goal: "making PersonaPlus actually decent",
                    },
                },
            },
        ]);

        expect(out).toEqual(1);
    });

    test("handles streak of more than 1", () => {
        const out = GetPassiveObjectiveStreak(1234, [
            {
                id: 1234,
                date: GetCurrentDateCorrectly().string,
                data: {
                    wasDone: true,
                    objective: {
                        createdAt: GetCurrentDateCorrectly().string,
                        id: 1234,
                        goal: "making PersonaPlus actually decent",
                    },
                },
            },
            {
                id: 4567,
                date: GetCurrentDateCorrectly().string,
                data: {
                    wasDone: false,
                    objective: {
                        createdAt: GetCurrentDateCorrectly().string,
                        id: 4567,
                        goal: "writing tests",
                    },
                },
            },
            {
                id: 1234,
                date: StringifyDate(
                    AlterDate(GetCurrentDateCorrectly().object, -1),
                ),
                data: {
                    wasDone: true,
                    objective: {
                        createdAt: GetCurrentDateCorrectly().string,
                        id: 1234,
                        goal: "making PersonaPlus actually decent",
                    },
                },
            },
        ]);

        expect(out).toEqual(2);
    });
});
