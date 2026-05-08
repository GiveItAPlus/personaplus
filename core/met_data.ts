/** Data comes from a self-maintained spreadsheet with all data from the PACompendium.
 *
 * TODO: **convert all units to be consistent** (and preferably use European measurement so all unit conversion code can be dropped)
 *
 * If you ever care to check the spreadsheet, which we'll (SOON, TODO!) make public; you might notice some numbers are "wrong". More specifically:
 *
 * - IDs don't fully match
 * - *Everything* uses numeric ranges, including some that PAC data doesn't collect.
 *
 * Numbers aren't "wrong", they're manually adjusted since PAC data doesn't cover every single case for whatever reason (smh) yet this code, for my sanity, relies on almost everything being a consistent range and every type of exercise being differentiated by the name before said range (which is why spreadsheet IDs like, e.g., "running X mph - Y mph uphill" get converted here into "running_uphill X mph - Y mph", so the prefix identifies it all).
 */
export const MET_DATA = {
    "bicycling-leisure-5.5mph": 3.5,
    "bicycling-leisure-9.4mph": 5.8,
    "bicycling-10mph/12mph-leisure-3/5.9": 6.8,
    "bicycling-12mph/14mph-leisure-5.9/6": 8,
    "bicycling-14mph/16mph-racing_or_leisure-6/8.9": 10,
    "bicycling-16mph/19mph-racing_not_drafting_or_over-19mph-drafting-over-9": 12,
    "bicycling-over-20mph-racing-not_drafting": 16.8,
    "bicycling-12mph-seated-brake_hoods_or_bar_drops-80rpm": 8.5,
    "bicycling-12mph-standing-brake_hoods-60rpm": 9,
    "bicycling_stationary_25w/30w-under-1.5/2.9": 3.5,
    "bicycling_stationary_50w-1.5/2.9": 4,
    "bicycling_stationary_60w-2.9/3": 5,
    "bicycling_stationary_70w/80w": 5.8,
    "bicycling_stationary_90w/100w-5.9/6": 6,
    "bicycling_stationary_101w/125w": 6.8,
    "bicycling_stationary_126w/150w": 8,
    "bicycling_stationary_151w/199w": 10.3,
    "bicycling_stationary_200w/229w-over-9": 10.8,
    "bicycling_stationary_230w/250w-over-9": 12.5,
    "bicycling_stationary_270w/305w-over-9": 13.8,
    "bicycling_stationary_over-325w-over-9": 16.3,
    "carrying-5lb/14lb-level_ground-3/5.9": 4,
    "carrying-15lb/155lb-level_ground_or_downstairs-1.5/2.9": 4.5,
    "carrying-50lb/150lb-level_ground-3/5.9": 6.5,
    "carrying-10lb-child-slow_walking": 2.3,
    "carrying-1lb/15lb-upstairs": 5.5,
    "carrying-16lb/24lb-upstairs": 6,
    "carrying-25lb/49lb-upstairs": 8,
    "carrying-50lb/74lb-upstairs": 10,
    "carrying-over-74lb-upstairs": 12,
    "climbing_hills-no_load-5pct/20pct_grade-over-9": 5,
    "climbing_hills-15lb/50lb_load-1pct/2pct_grade-1.5/2.9": 3.8,
    "climbing_hills-no_load-1pct/5pct_grade-3/5.9": 5.3,
    "climbing_hills-no_load-6pct/10pct_grade-3/5.9": 7,
    "climbing_hills-no_load-11pct/20pct_grade-3/5.9": 8.8,
    "climbing_hills-no_load-4mph/5mph-3pct/5pct_grade-over-9": 10,
    "climbing_hills-no_load-30pct_grade-under-1.2mph": 8.5,
    "climbing_hills-no_load-30pct/40pct_grade-1.2mph/1.8mph": 15.5,
    "climbing_hills-no_load-10pct/40pct_grade-1.8mph/5mph": 16.3,
    "climbing_hills-10lb/20lb_load-5pct/10pct_grade-3/5.9": 6.5,
    "climbing_hills-21lb/40lb_load-3pct/10pct_grade-3/5.9": 7.5,
    "climbing_hills-over-20lb_load-5pct/20pct_grade-3/5.9": 10,
    "walking-under-2mph-level-1.5/2.9": 2.3,
    "walking-2mph/2.4mph-level-1.5/2.9": 2.8,
    "walking-2.5mph-level": 3,
    "walking-2.5mph-downhill": 3.3,
    "walking-2.8mph/3.4mph-level-3/5.9": 3.8,
    "walking-3.5mph/3.9mph-level-3/5.9": 4.8,
    "walking-4mph/4.4mph-level-3/5.9": 5.5,
    "walking-4.5mph/4.9mph-level-3/5.9": 7,
    "walking-5mph/5.5mph-level": 8.5,
    "walking_nordic-2.5mph/3.5mph-level-3/5.9": 4.3,
    "walking_nordic-3.6mph/4.4mph-level-3/5.9": 5.3,
    "walking_nordic-4.5mph/5mph-level-over-9": 8.5,
    "walking_nordic_uphill-3/5.9": 8.8,
    "walking_nordic-level-9kg/15kg_load": 10.8,
    "walking-nordic_uphill-9kg/15kg_load": 12.3,
    "walking_backward-3.5mph-level": 6,
    "walking_backward-3.5mph_uphill-5pct_grade": 7.8,
    "walking_treadmill-under-1mph-0pct_grade": 2.1,
    "walking_treadmill-1mph-0pct_grade": 2.3,
    "walking_treadmill-1.2mph/1.9mph-0pct_grade": 2.8,
    "walking_treadmill-2mph/2.4mph-0pct_grade": 3,
    "walking_treadmill-2.5mph/2.9mph-0pct_grade": 3.5,
    "walking_treadmill-3mph/3.4mph-0pct_grade": 3.8,
    "walking_treadmill-3.5mph/3.9mph-0pct_grade": 4.8,
    "walking_treadmill-4mph/4.4mph-0pct_grade": 5.8,
    "walking_treadmill-4.5mph/4.9mph-0pct_grade": 6.8,
    "walking_treadmill-5mph/5.5mph-0pct_grade": 8.3,
    "walking_treadmill_downhill-3pct/12pct_grade-2.8mph/3.1mph": 3.3,
    "walking_treadmill_downhill-5pct/25pct_grade-2.8mph-nordic": 3.3,
    "walking_treadmill-2.5mph-0pct_grade-5c/20c-18kg_load": 4.8,
    "walking_treadmill-2.5mph-0pct_grade-under-0c-18kg_load": 5.8,
    "walking-curved_treadmill-3mph/5mph-3/5.9": 8.3,
    "walking-treadmill_backward-2.5mph-10pct_grade": 7.8,
    "walking_treadmill_walker_or_step_to_gait-0.7mph-0pct_grade": 1.5,
    "boxing_punching_bag-60bpm": 7,
    "boxing_punching_bag-120bpm": 8.5,
    "boxing_punching_bag-180bpm": 10.8,
    "rock_climbing_treadwall-4m/6m_per_min": 10.5,
    "rock_climbing_treadwall-7m/10m_per_min": 10.5,
    "rope_jumping-120skips/160skips_per_min-over-9": 12.3,
    "rope_jumping-100skips/120skips_per_min-plain_bounce-over-9": 11.8,
    "rope_jumping-under-100skips_per_min-rhythm_bounce-6/8.9": 8.3,
    "roller_blading-14.4km_h-3/5.9": 7.5,
    "roller_blading-17.7km_h-3/5.9": 9.8,
    "roller_blading-21km_h/21.7km_h-over-9": 12.3,
    "roller_blading-24km_h-over-9": 15.5,
    "skateboard-longboard-13.3km_h": 6.8,
    "skateboard-longboard-16.2km_h": 8.3,
    "skateboard-longboard-18.4km_h": 10.5,
    "jogging-in_place": 4.8,
    "jogging-2.6mph/3.7mph": 3.3,
    "running-4mph/4.2mph": 6.5,
    "running-4.3mph/4.8mph": 7.8,
    "running-5mph/5.2mph": 8.5,
    "running-5.5mph/5.8mph": 9,
    "running-6mph/6.3mph": 9.3,
    "running-6.4mph/6.7mph": 10.5,
    "running-6.8mph/7mph": 11,
    "running-7.1mph/7.5mph": 11.8,
    "running-7.6mph/8mph": 12,
    "running-8.1mph/8.6mph": 12.5,
    "running-8.7mph/9.2mph": 13,
    "running-9.3mph/9.6mph": 14.8,
    "running-9.7mph/10mph": 14.8,
    "running-10.1mph/11mph": 16.8,
    "running-11.1mph/12mph": 18.5,
    "running-12.1mph/13mph": 19.8,
    "running-13.1mph/14mph": 23,
    running_stairs_up: 15,
    running_track_team_practice: 10,
    "running_track-500m/1500m-competitive": 18,
    "running_track-2000m/3000m-competitive": 19.3,
    running_pushing_wheelchair_or_baby_carrier: 8,
    running_marathon: 13.3,
    "running_uphill-4.5mph-5pct_incline": 10.3,
    "running_uphill-6mph-5pct_incline": 13.3,
    "running_uphill-7mph-5pct_incline": 15.5,
    "running_uphill-5mph/5.9mph-15pct_incline": 17.5,
    "running_uphill-0.6mph/0.79mph-30pct_incline": 8.8,
    "running_uphill-0.8mph/0.99mph-30pct_incline": 10.3,
    "running_uphill-1mph/1.19mph-30pct_incline": 11.8,
    "running_uphill-1.2mph/1.39mph-30pct/40pct_incline": 13.5,
    "running_uphill-1.4mph/1.59mph-30pct_incline": 14.8,
    "running_uphill-over-1.6mph-10pct/30pct_incline": 16.3,
    "running_hilly_terrain-100m_elevation_change": 16,
    "running_downhill-5mph/5.9mph-10pct/15pct_grade": 5.8,
    "running_downhill-6mph/6.9mph-10pct/15pct_grade": 7.5,
    "running_downhill-7mph/8.9mph-10pct/15pct_grade": 9,
    "running_downhill-6mph/7.9mph-3pct/9pct_grade": 9.3,
    "running_downhill-8mph/10.5mph-3pct/9pct_grade": 13.8,
    "running_curved_treadmill-3mph/3.9mph": 5.3,
    "running_curved_treadmill-4mph/4.9mph": 6.5,
    "running_curved_treadmill-5mph/5.9mph": 11,
    "running_curved_treadmill-7mph/7.9mph": 12,
    "running_curved_treadmill-8mph/8.9mph": 14,
    "running_curved_treadmill-9mph/9.9mph": 16.8,
    "running_backpack-5mph/6mph-1kg/3kg": 8.5,
    "running_backpack-6mph/7mph-1kg/3kg": 9.5,
    "running_backpack-7mph/8mph-1kg/3kg": 9.8,
    "running_backpack-8mph/9mph-1kg/3kg": 12,
    "running_barefoot-3.5mph/6mph": 7.8,
    "running_barefoot-6mph/8mph": 12,
    "running_barefoot-8mph/9mph": 13.5,
    "running_jogging_stroller_indoors-5mph": 8,
    "running_jogging_stroller_indoors-6mph": 9,
    "running_jogging_stroller_outdoors-5mph": 10,
    "running_jogging_stroller_outdoors-6mph": 11.5,
    "skipping-5.5mph/6mph": 11.5,
    "triathlon-running": 13,
    "aerobic_step-4in_step": 5.5,
    "aerobic_step-6in/8in_step": 7.3,
    "aerobic_step-10in/12in_step": 9,
    "calisthenics-over-9": 7.5,
    "calisthenics-3/5.9": 3.8,
    "calisthenics-1.5/2.9": 2.8,
    "calisthenics-3/5.9-floor_exercises": 3.5,
    "elliptical_trainer-3/5.9": 5,
    "elliptical_trainer-over-9": 9,
    "resistance_training-squats_deadlift-slow_or_explosive": 5,
    "resistance_training-multiple_exercises-8reps/15reps-varied_resistance": 3.5,
    "bodyweight_resistance-3": 3,
    "bodyweight_resistance-6/8.9": 6.5,
    "rope_jumping_digi_jump-120jumps_per_min": 9,
    "rowing_stationary-over-9": 7.3,
    "rowing_stationary-under-100w-3/5.9": 5,
    "rowing_stationary-100w/149w-6/8.9": 7.5,
    "rowing_stationary-150w/199w-6/8.9": 11,
    "rowing_stationary-over-200w-over-9": 14,
    "shuttle_running-forward_backward_lateral": 11,
    "stretching-1.5/2.9": 2.3,
    "arm_ergometer-hand_bike-15w": 2,
    "arm_ergometer-hand_bike-25w/30w": 2.8,
    "arm_ergometer-hand_bike-45w": 3.5,
    "sit_to_stand-6reps/12reps_per_min": 2.8,
    "sit_to_stand-18reps/24reps_per_min": 4,
} as const;

type SegmentType<T extends string> = T extends `${infer Segment}-${string}`
    ? Segment
    : T;
export type METBaseActivity = SegmentType<keyof typeof MET_DATA>;

function getMetData(
    activity: METBaseActivity,
): [keyof typeof MET_DATA, number][] {
    return Object.entries(MET_DATA).filter(
        ([k]) => k.split("-")[0] === activity,
    ) as [keyof typeof MET_DATA, number][];
}

function getNumbersOutOfMetData(k: string): [number | null, number | null] {
    const segment = k.split("-").find((v) => v.includes("/"));
    if (!segment) return [null, null];

    const [low, hi] = segment
        .split("/")
        .map((v) => Number(v.replace(/[^\d.]/g, "")));

    return [low ?? null, hi ?? null];
}

/**
 * Gets a measurable activity and a given quantifier, and ranges out the corresponding MET value.
 *
 * @param {METBaseActivity} activity Activity to measure.
 * @param {number} quantifier Quantifier to measure with. This is what you measure the activity itself with. Simply put, for a running session this'd be the average speed in km/h.
 * @returns {number} MET value.
 */
export function RangeOutMetData(
    activity: METBaseActivity,
    quantifier: number,
): number {
    const data = getMetData(activity);

    const match = data.find(([k]) => {
        const [low, hi] = getNumbersOutOfMetData(k);
        if (low === null) return false;
        return quantifier >= low && (hi === null || quantifier <= hi);
    });

    if (match) return match[1];

    const lowest = getNumbersOutOfMetData(data[0]![0])[0];
    if (lowest === null || quantifier < lowest) return data[0]![1];
    return data.at(-1)![1];
}
