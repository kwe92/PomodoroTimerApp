import AppTheme from "../styles/theme/AppTheme";
import ColorSettingsModel from "./color_settings/ColorSettingsModel";
import CurrentColorModel from "./current_color/CurrentColorModel";
import CurrentFontModel from "./current_font/CurrentFontModel";
import DisplayTimerOptionsModel from "./display_timer/DisplayTimerModel";
import FontSettingsModel from "./font_settings/FontSettingsModel";
import IsOpenModel from "./is_opened/IsOpenedModel";
import OptionsStore from "./options/OptionsStore";
import SettingsModel from "./settings/SettingsModel";
import TimeStore from "./time/timeStore";
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

const fontSettingModel = FontSettingsModel.create({
  font1: true,
  font2: false,
  font3: false,
});

const colorSettingsModel = ColorSettingsModel.create({
  isRed: true,
  isBlue: false,
  isPurple: false,
});

const settingsModel = SettingsModel.create({
  fontSettings: fontSettingModel,
  colorSettings: colorSettingsModel,
});

const currentColorModel = CurrentColorModel.create({
  currentColor: AppTheme.otherColors.red0,
});

const currentFontModel = CurrentFontModel.create({
  currentFont: "'Kumbh Sans', sans-serif",
  isSans: true,
  isMono: false,
  isSlab: false,
});

const dislayTimerOptionsModel = DisplayTimerOptionsModel.create({
  pomodoroTimerOptions: false,
  shortBreakTimerOptions: false,
  longBreakTimerOptions: false,
});

export default function Stores() {
  return {
    optionsStore: optionsStore,
    timeStore: timeStore,
    dateModel: dateModel,
    timerModel: timerModel,
    totalTimeModel: totalTimeModel,
    timerTextModel: timerTextModel,
    isOpenModel: isOpenModel,
    settingsModel: settingsModel,
    currentColorModel: currentColorModel,
    currentFontModel: currentFontModel,
    dislayTimerOptionsModel: dislayTimerOptionsModel,
  };
}
