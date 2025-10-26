# Roadmap

> [!WARNING]
> The app has spent a while unmaintained. I did not abandon it, I just lack the time to work on it (due to studies and higher priority projects). I promise to eventually retake it, but for now don't fork it or expect any release _soon_.

Here I'll keep track of what I want to do short-term so I don't forget about it. It also serves as a roadmap; not as dynamic as a project / issue but simpler to maintain and gets the job done.

Done tasks get checked immediately, then get removed once we make a release including that change.

## Overall plan

- **Current priority are active objectives.** We have to rewrite the system to be MET-based. Once the system's done, using data from the PA Compendium we can finally add more exercises, ending with PersonaPlus' bottleneck 1/2.
- Bottleneck 2/2 is the distance live tracker. Gotta do that somehow.
- Once both things are done, we're ready for `0.2`.

---

## What we'll do short/mid term

### Planned features

- [ ] using user data to personalize the app
  - [ ] eg. if a person isn't very active and sets a high-intensity objective, show a warning that won't be shown to a more active user telling them to start smaller and increase eventually (for example)
- [ ] an assistant that automatically makes objectives, from a set of templates and doing a bit of math with the user's data
- [ ] (a bit more long term) adding more active objectives
  - [ ] biking
  - [ ] (TODO: think of more ideas)
- [ ] passive objective templates
- [ ] show passive objectives streaks on the Report page

### Other cool ideas

- [ ] daily streaks for doing active objectives
  - [ ] note: don't break streak for days you didn't have objectives for, only break it if there WAS an objective for yesterday that you failed

---

## Mid/long term plans

### The "Daily Check"

- [ ] Implementation
  - [ ] Daily notification
  - [ ] Form itself
    - [ ] Section for registering sleep hours of the previous night
    - [ ] Section for registering what's been eaten
  - [ ] Customizing the form (enabling or disabling certain fields depending on the user)
  - [ ] Data registering
    - [ ] Data saving
    - [ ] Visualizing personal graphs (TODO: elaborate this idea...)

### Active Objectives

- [ ] Improve the help of the quality menu.
  - [ ] Better, and most importantly SHORTER info.
  - [ ] Images.
- [ ] Measuring objective-specific data where applicable. For example, measure distance in a running session. Display that in the report tab.
- [ ] Sound effects.
- [ ] Micro sessions.
- [ ] Creation assistant (not AI).

### Other ideas

- [ ] Google Health Connect integration
- [ ] More tools for the toolkit tab

### Misc ideas

- [ ] Light / dark themes
- [ ] Add more languages (integrate Crowding or something)
- [ ] Some more easter eggs
- [ ] More notifications
- [ ] UI animations
- [ ] A home screen widget with the streak of a passive objective
