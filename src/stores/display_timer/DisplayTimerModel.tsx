import { types } from "mobx-state-tree";

const DisplayTimerOptionsModel = types
  .model({
    pomodoroTimerOptions: types.boolean,
    shortBreakTimerOptions: types.boolean,
    longBreakTimerOptions: types.boolean,
  })
  .actions((self) => ({
    displayPomodoro() {
      self.pomodoroTimerOptions = !self.pomodoroTimerOptions;
    },
    displayShortBreak() {
      self.shortBreakTimerOptions = !self.shortBreakTimerOptions;
    },
    displayLongBreak() {
      self.longBreakTimerOptions = !self.longBreakTimerOptions;
    },
    closeAllTimerOptions() {
      self.pomodoroTimerOptions = false;
      self.shortBreakTimerOptions = false;
      self.longBreakTimerOptions = false;
    },
  }));

export default DisplayTimerOptionsModel;
