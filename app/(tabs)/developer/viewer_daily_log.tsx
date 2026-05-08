import TopBar from "@/components/navigation/top_bar";
import Loading from "@/components/static/loading";
import PageEnd from "@/components/static/page_end";
import { BetterTextSmallText } from "@/components/text/better_text_presets";
import { GetActiveObjectiveDailyLog } from "@/toolkit/objectives/active_objectives";
import { GetPassiveObjectiveDailyLog } from "@/toolkit/objectives/passive_objectives";
import { ActiveObjectiveDailyLog } from "@/types/active_objectives";
import { PassiveObjectiveDailyLog } from "@/types/passive_objectives";
import { useEffect, ReactElement, useState } from "react";

function render(
    dailyLog: ActiveObjectiveDailyLog | PassiveObjectiveDailyLog,
): ReactElement {
    return (
        <>
            {Object.entries(dailyLog).map(
                ([key, val]: [
                    string,
                    ActiveObjectiveDailyLog | PassiveObjectiveDailyLog,
                ]) => {
                    return (
                        <>
                            <BetterTextSmallText key={key}>
                                {key}
                                {"\n"}
                            </BetterTextSmallText>
                            {Object.entries(val).map(([subKey, subVal]) => {
                                return (
                                    <>
                                        <BetterTextSmallText key={subKey}>
                                            {"  > "}
                                            {subKey}
                                            {"\n"}
                                        </BetterTextSmallText>
                                        {Object.entries(subVal).map(
                                            ([subSubKey, subSubVal]) => (
                                                <BetterTextSmallText
                                                    key={subSubKey}
                                                >
                                                    {"    > "}
                                                    {JSON.stringify(subSubVal)
                                                        .split(',"')[0]
                                                        ?.trim()}
                                                    {"\n"}
                                                </BetterTextSmallText>
                                            ),
                                        )}
                                    </>
                                );
                            })}
                        </>
                    );
                },
            )}
        </>
    );
}

export default function ViewerDailyLog(): ReactElement {
    const [loading, setLoading] = useState<boolean>(true);
    const [activeDailyLog, setActiveDailyLog] =
        useState<ActiveObjectiveDailyLog | null>(null);
    const [passiveDailyLog, setPassiveDailyLog] =
        useState<PassiveObjectiveDailyLog | null>(null);

    useEffect((): void => {
        async function handler(): Promise<void> {
            try {
                const active: ActiveObjectiveDailyLog =
                    await GetActiveObjectiveDailyLog();
                const passive: PassiveObjectiveDailyLog =
                    await GetPassiveObjectiveDailyLog();
                setActiveDailyLog(active.length === 0 ? null : active);
                setPassiveDailyLog(passive.length === 0 ? null : passive);
            } finally {
                setLoading(false);
            }
        }
        handler();
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <TopBar
                includeBackButton={true}
                header="Daily log"
                subHeader="View all your progress."
            />
            {!activeDailyLog ? (
                <BetterTextSmallText>
                    No active daily log yet!
                </BetterTextSmallText>
            ) : (
                <BetterTextSmallText>
                    {render(activeDailyLog)}
                </BetterTextSmallText>
            )}
            {!passiveDailyLog ? (
                <BetterTextSmallText>
                    No passive daily log yet!
                </BetterTextSmallText>
            ) : (
                <BetterTextSmallText>
                    {render(passiveDailyLog)}
                </BetterTextSmallText>
            )}
            <PageEnd size="normal" includeText={false} />
        </>
    );
}
