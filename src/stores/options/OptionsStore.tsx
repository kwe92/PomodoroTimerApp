import { types } from "mobx-state-tree";

const OptionsModel = types
  .model({
    pomodoroOption: types.boolean,
    shortBreakOption: types.boolean,
    longBreakOption: types.boolean,
  })
  .actions((self) => ({
    setPomodoroOption() {
      self.pomodoroOption = true;
      self.shortBreakOption = false;
      self.longBreakOption = false;
    },
    setShortBreakOption() {
      self.shortBreakOption = true;
      self.pomodoroOption = false;
      self.longBreakOption = false;
    },
    setLongBreakOption() {
      self.longBreakOption = true;
      self.shortBreakOption = false;
      self.pomodoroOption = false;
    },
  }));

const OptionsStore = types
  .model({
    options: OptionsModel,
  })
  .actions((self) => ({
    setPomodoroOption() {
      self.options.setPomodoroOption();
    },
    setShortBreakOption() {
      self.options.setShortBreakOption();
    },
    setLongBreakOption() {
      self.options.setLongBreakOption();
    },
  }));

export default OptionsStore;
