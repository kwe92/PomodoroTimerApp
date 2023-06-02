import IsOpenModel from "./is_opened/IsOpenedModel";
import OptionsStore from "./options/OptionsStore";
import TimeStore from "./time/TimeStore";
import DateModel from "./timer/DateModel";
import TimerModel from "./timer/TimerModel";
import TotalTimeModel from "./timer/TotalTimeModel";
import TimerTextModel from "./timer_text/TimerTextModel";

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

const dateModel = DateModel.create({ timer: new Date() });

const timerModel = TimerModel.create({
  autoStart: false,
  expiryTimestamp: dateModel.timer,
});

const totalTimeModel = TotalTimeModel.create({ totalTime: 0 });

const timerTextModel = TimerTextModel.create({ timerText: "START" });

const isOpenModel = IsOpenModel.create({ isOpened: false });

export default function useStores() {
  return {
    optionsStore: optionsStore,
    timeStore: timeStore,
    dateModel: dateModel,
    timerModel: timerModel,
    totalTimeModel: totalTimeModel,
    timerTextModel: timerTextModel,
    isOpenModel: isOpenModel,
  };
}
