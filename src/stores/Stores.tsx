import OptionsStore from "./options/OptionsStore";
import TimeStore from "./time/timeStore";

const optionsStore = OptionsStore.create({
  options: {
    pomodoroOption: true,
    shortBreakOption: false,
    longBreakOption: false,
  },
});

const timeStore = TimeStore.create({
  times: {
    pomodoro: 16,
    shortBreak: 5,
    longBreak: 10,
  },
});

export default function useStores() {
  return {
    optionsStore: optionsStore,
    timeStore: timeStore,
  };
}
