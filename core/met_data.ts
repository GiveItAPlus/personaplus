// this comes from a self-maintained spreadsheet with all data from the PACompendium

import { METCalculableActivities } from "./met_activities";

// MET, ID
const CSV = `
3.5,bicycling_leisure-5.5mph
5.8,bicycling_leisure_9.4mph
6.8,bicycling_10-12mph_leisure_slow_light-effort
8,bicycling_12-14mph_leisure_moderate-effort
10,bicycling_14-16mph_racing-or-leisure_fast_vigorous-effort
12,bicycling_16-19mph_racing-not-drafting-or-gt-19mph-drafting_very-fast_racing-general
16.8,bicycling_gt-20mph_racing_not-drafting
8.5,bicycling_12mph_seated_hands-on-brake-hoods-or-bar-drops_80rpm
9,bicycling_12mph_standing_hands-on-brake-hoods_60rpm
3.5,bicycling_stationary_25-30w_very-light-to-light-effort
4,bicycling_stationary_50w_light-effort
5,bicycling_stationary_60w_light-to-moderate-effort
5.8,bicycling_stationary_70-80w
6,bicycling_stationary_90-100w_moderate-to-vigorous
6.8,bicycling_stationary_101-125w
8,bicycling_stationary_126-150w
10.3,bicycling_stationary_151-199w
10.8,bicycling_stationary_200-229w_vigorous
12.5,bicycling_stationary_230-250w_very-vigorous
13.8,bicycling_stationary_270-305w_very-vigorous
16.3,bicycling_stationary_gt-325w_very-vigorous
4,carrying-5-to-14-lb-2.3-to-6.4-kg-load-e.g.-suitcase_boxes_groceries_level-ground_moderate-pace
4.5,carrying-15-155-lb-6.8-70.4-kg-load-e.g.-suitcase_boxes_furniture_level-ground-or-downstairs_slow-pace
6.5,carrying-50-to-150-pound-load-e.g._equine-or-bovine-feed_fence-pipes_furniture_level-ground_moderate-pace
2.3,carrying-10-lb-child_slowwalking
5.5,carrying-load_1-to-15-lb-load_upstairs
6,carrying-load_16-to-24-lb-load_upstairs
8,carrying-load_25-to-49-lb-load_upstairs
10,carrying-load_50-to-74-lb-load_upstairs
12,carrying-load_gt-74-lb-load_upstairs
5,climbing-hills_no-load_5-to-20%-grade_very-slow-pace
3.8,climbing-hills_15-50-lb-load_1-to-2%-grade_slow-pace
5.3,climbing-hills_no-load_1-to-5%-grade_moderate-to-brisk-pace
7,climbing-hills_no-load_6-to-10%-grade_moderate-to-brisk-pace
8.8,climbing-hills_no-load_11-to-20%-grade_slow-to-moderate-pace
10,climbing-hills_no-load_4.0-to-5.0mph_3-to-5%-grade_very-fast-pace
8.5,climbing-hills_no-load_steep-grade-30%_slow-pace-less-than-1.2mph
15.5,climbing-hills_no-load_very-steep-grade-30-40%_1.2-to-1.8mph
16.3,climbing-hills_no-load_steep-grade-10-40%_1.8-to-5.0mph
6.5,climbing-hills_10-to-20-lb-load_5-to-10%-grade_moderate
7.5,climbing-hills_21-to-40-lb-load_3-to-10%-grade_moderate-to-brisk-pace
10,climbing-hills_20-plus-pound-load_5-to-20%-grade_moderate-to-brisk-pace
2.3,walking_less-than-2.0mph_level_strolling_very-slow
2.8,walking_2.0-to-2.4mph_level_slow-pace_firm-surface
3,walking_2.5mph_firm_level-surface
3.3,walking_2.5mph_downhill
3.8,walking_2.8-to-3.4mph_level_moderate-pace_firm-surface
4.8,walking_3.5-to-3.9mph_level_brisk_firm-surface_walking-for-exercise
5.5,walking_4.0-to-4.4mph-6.4-to-7.0km-h_level_firm-surface_very-brisk-pace
7,walking_4.5-to-4.9mph_level_firm-surface_very_very-brisk
8.5,walking_5.0-to-5.5mph-8.8-to-8.9km-h_level_firm-surface
4.3,walking_for-exercise_2.5-to-3.5mph-4.0-to-5.6km-h_with-ski-poles_nordicwalking_level_moderate-pace
5.3,walking_for-exercise_3.6-to-4.4mph-5.8-to-7.1km-h_with-ski-poles_nordicwalking_level_moderate-pace
8.5,walking_for-exercise_4.5-to-5.0mph_with-ski-poles_nordicwalking_level_fast-pace
8.8,walking_for-exercise_with-ski-poles_nordicwalking_uphill_moderate-pace
10.8,walking_for-exercise_with-ski-poles_nordicwalking_level-ground_carrying-20-to-30-lb-load-9.0-to-15.0-kg
12.3,walking_for-exercise_with-ski-poles_nordicwalking_uphill_carrying-20-to-30-lb-load-9.0-to-15.0-kg
6,walking_backward_3.5mph_level
7.8,walking_backward_3.5mph_uphill_5%-grade
2.1,walking_treadmill_less-than-1.0mph_0%-grade
2.3,walking_treadmill_1.0mph_0%-grade
2.8,walking_treadmill_1.2-to-1.9mph_0%-grade-1.9-to-3.0km-h
3,walking_treadmill_2.0-to-2.4mph-3.2-to-3.9km-h_0%-grade
3.5,walking_treadmill_2.5-to-2.9mph-4.0-to-4.7km-h_0%-grade
3.8,walking_treadmill_3.0-to-3.4mph-4.8-to-5.5km-h_0%-grade
4.8,walking_treadmill_3.5-to-3.9mph-5.6-to-6.3km-h_0%-grade
5.8,walking_treadmill_4.0-to-4.4mph-6.4-to-7.1km-h_0%-grade
6.8,walking_treadmill_4.5-to-4.9mph-7.2-to-7.9km-h_0%-grade
8.3,walking_treadmill_5.0-to-5.5mph-8.0-to-8.9km-h_0%-grade
3.3,walking_treadmill_downhill-3%-to-12%-grade_2.8-to-3.1mph
3.3,walking_treadmill_downhill-5%-to-25%-grade_2.8mph_with-nordic-poles
4.8,walking_treadmill_2.5mph_0%-grade_5-to-20-degrees-c_40-lb-18.2-kg-load
5.8,walking_treadmill_2.5mph_0%-grade_10-to-0-degrees-c_40-lb-18.2-kg-load
8.3,walking_curved-treadmill_3.0-to-5.0mph_brisk-pace
7.8,walking-treadmill_backwards_2.5mph_plus-10%-grade
1.5,walking_with-awalker-or-step-to-gait-on-treadmill_0.7mph-1.1km-h_0%-grade
7,boxing_punching-bag_60-b-min
8.5,boxing_punching-bag_120-b-min
10.8,boxing_punching-bag_180-b-min
10.5,rock-climbing_treadwall_4-6-m-min
10.5,rock-climbing_treadwall_7-10-m-min
12.3,rope-jumping_fast-pace_120-160-skips-min
11.8,rope-jumping_moderate-pace_general_100-to-120-skips-min_2-foot-skip_plain-bounce
8.3,rope-jumping_slow-pace_lt-100-skips-min_2-foot-skip_rhythm-bounce
7.5,roller-blading_in-line-skating_14.4km-h-9.0mph_recreational-pace
9.8,roller-blading_in-line-skating_17.7km-h-11.0mph_moderate-pace_exercise-training
12.3,roller-blading_in-line-skating_21.0-to-21.7km-h-13.0-to-13.6mph_fast-pace_exercise-training
15.5,rollerblading_in-line-skating_24.0km-h-15.0mph_maximal-effort
6.8,skateboard_longboard_13.3km-h_slow-speed
8.3,skateboard_longboard_16.2km-h_typical-speed
10.5,skateboard_longboard_18.4km-h_fast-speed
4.8,jogging_in-place
3.3,jogging-2.6-to-3.7mph
6.5,running_4-to-4.2mph
7.8,running-4.3-to-4.8mph
8.5,running_5.0-to-5.2mph
9,running_5.5-5.8mph
9.3,running_6-6.3mph
10.5,running_6.7mph
11,running_7mph
11.8,running_7.5mph
12,running_8mph
12.5,running_8.6mph
13,running_9mph
14.8,running_9.3-to-9.6mph
14.8,running_10mph
16.8,running_11mph
18.5,running_12mph
19.8,running_13mph
23,running_14mph
15,running_stairs_up
10,running_on-a-track_team-practice
18,running_on-track_500-1500m_competitive
19.3,running_on-track_2000-3000m_competitive
8,running_training_pushing-awheelchair-or-baby-carrier
13.3,running_marathon
10.3,running-uphill_4.5mph_5%-incline
13.3,running-uphill_6.0mph_5%-incline
15.5,running-uphill_7.0mph_5%-incline
17.5,running-uphill_5.0-to-5.9mph_15%-incline
8.8,running-uphill_0.6-to-0.79mph_30%-incline
10.3,running-uphill_0.8-to-0.99mph_30%-incline
11.8,running-uphill_1.0-to-1.19mph_30%-incline
13.5,running-uphill_1.2-to-1.39mph_30-40%-incline
14.8,running-uphill_1.4-to-1.59mph_30%-incline
16.3,running-uphill_gt-1.6mph_10-30%-incline
16,running_hilly-terrain_100m-change-in-elevation
5.8,running-downhill_5.0-to-5.9mph_10%-to-15%
7.5,running-downhill_6.0-to-6.9mph_10%-to-15%
9,running-downhill_7.0-to-8.9mph_10%-to-15%
9.3,running-downhill_6.0-to-7.9mph_3%-to-9%
13.8,running-downhill_8.0-to-10.5mph_3%-to-9%
5.3,running-jogging_curved-treadmill_3.0-to-3.9mph
6.5,running-jogging_curved-treadmill_4.0-to-4.9mph
11,running-curved-treadmill_5.0-to-5.9mph
12,running-curved-treadmill_7.0-to-7.9mph
14,running-curved-treadmill_8.0-to-8.9mph
16.8,running-curved-treadmill_9.0-to-9.9mph
8.5,running_5.0-6mph_1.0-to-3.0-kg-backpack
9.5,running_6.0-7mph_1.0-to-3.0-kg-backpack
9.8,running_7.0-8mph_1.0-to-3.0-kg-backpack
12,running_8.0-9mph_1.0-to-3.0-kg-backpack
7.8,running_barefoot_3.5-6mph
12,running_barefoot_6.0-8mph
13.5,running_barefoot_8.0-9mph
8,running_jogging-stroller_indoors_5mph
9,running_jogging-stroller_indoors_6mph
10,running_jogging-stroller_outdoors_5mph
11.5,running_jogging-stroller_outdoors_6mph
11.5,skipping_5.5-6.0mph
13,triathlon_running
5.5,aerobic_step_with-4-inch-step
7.3,aerobic_step_with-6-8-inch-step
9,aerobic_step_with-10-12-inch-step
7.5,calisthenics-e.g._pushups_sit-ups_pull-ups_jumping-jacks_burpees_battling-ropes_vigorous-effort
3.8,calisthenics-e.g._pushups_sit-ups_pull-ups_lunges_moderate-effort
2.8,calisthenics-e.g._curl-ups_abdominal-crunches_plank_light-effort
3.5,calisthenics_light-or-moderate-effort_general-e.g._back-exercises_going-up-and-down-from-floor-taylor-code-150
5,elliptical-trainer_moderate-effort
9,elliptical-trainer_vigorous-effort
5,resistanceweight-training_squats_deadlift_slow-or-explosive-effort
3.5,resistanceweight-training_multiple-exercises_8-15-reps-at-varied-resistance
3,bodyweight-resistance-exercises-e.g._squat_lunge_push-up_crunch_general
6.5,bodyweight-resistance-exercises-e.g._squat_lunge_push-up_crunch_high-intensity
9,jumping-rope_digi-jump-machine_120-jumps-minute
7.3,rowing_stationary-ergometer_general_vigorous-effort
5,rowing_stationary-ergometer_general_lt-100w_moderate-effort
7.5,rowing_stationary_100-to-149w_vigorous-effort
11,rowing_stationary_150-to-199w_vigorous-effort
14,rowing_stationary_ge-200w_very-vigorous-effort
11,shuttle-running_forward-backward-lateral
2.3,stretching_mild
2,arm-ergometer_hand-bike_15w
2.8,arm-ergometer_hand-bike_25-30w
3.5,arm-ergometer_hand-bike_45w
2.8,sit-to-stand-exercise_6-12-times-min
4,sit-to-stand-exercise_18-24-times-min
`;

// TODO: if the CSV is hardcoded, why not hardcode the Record directly and avoid so much operation?
// will do it once i'm not lazy
export const MET_DATA: Record<METCalculableActivity, number> =
    Object.fromEntries(
        // sometimes i wonder why big CSV libraries exist if it's not that hard
        // what the hell, make it part of the javascript language, CSV is also used on the web
        // imagine CSV based APIs :sob:
        CSV.split("\n")
            .map((line: string): string[] => {
                return line.split(",").map((s) => s.trim());
            })
            .map(
                ([met, activity]: string[]):
                    | [null]
                    | [METCalculableActivity, number] => {
                    if (!met || !activity) return [null];
                    const act = activity.trim();
                    if (!isActivity(act)) return [null];
                    return [act, parseFloat(met.trim())];
                },
            )
            .filter((entry) => entry[0] !== null),
        // TypeError fix (because of .filter())
    ) as Record<METCalculableActivity, number>;

/** temporal TypeError fix*/
function isActivity(act: any): act is METCalculableActivity {
    return METCalculableActivities.includes(act);
}

export type METCalculableActivity = (typeof METCalculableActivities)[number];

export type METBaseActivity = "running";
