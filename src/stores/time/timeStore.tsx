import { types } from "mobx-state-tree";

const TimeModel = types
  .model({
    pomodoro: types.number,
    shortBreak: types.number,
    longBreak: types.number,
  })
  .actions((self) => ({
    setPomodoro(time: number) {
      self.pomodoro = time;
    },
    setShortBreak(time: number) {
      self.shortBreak = time;
    },
    setLongBreak(time: number) {
      self.longBreak = time;
    },
  }));

const TimeStore = types
  .model({
    times: TimeModel,
  })
  .actions((self) => ({
    setPomodoro(time: number) {
      self.times.setPomodoro(time);
    },
    setShortBreak(time: number) {
      self.times.setShortBreak(time);
    },
    setLongBreak(time: number) {
      self.times.setLongBreak(time);
    },
  }));

export default TimeStore;
