// OptMenuHandles
interface OptsInterface {
  dateModel: any;
  timeStore: any;
  optionsStore: any;
  pause: VoidFunction;
  restart: (timer: Date, autoStart: boolean) => void;
  setTimerText: Function;
  totalTimeModel: any;
}

export default class OptMenuHandles {
  dateModel: any;
  timeStore: any;
  optionsStore: any;
  pause: VoidFunction;
  restart: (timer: Date, autoStart: boolean) => void;
  setTimerText: Function;
  setTotalTime: any;

  constructor({
    timeStore,
    optionsStore,
    dateModel,
    pause,
    restart,
    setTimerText,
    totalTimeModel,
  }: OptsInterface) {
    this.dateModel = dateModel;
    this.timeStore = timeStore;
    this.optionsStore = optionsStore;
    this.pause = pause;
    this.restart = restart;
    this.setTimerText = setTimerText;
    this.setTotalTime = totalTimeModel.setTotalTime;
  }
  private _switchOption(time: number) {
    this.pause();
    this.dateModel.setTimer(new Date());
    this.dateModel.timer.setSeconds(
      this.dateModel.timer.getSeconds() + 60 * time
    );
    this.restart(this.dateModel.timer, false);
    this.setTimerText("START");
  }
  private _pomodoroOption() {
    this._switchOption(this.timeStore.times.pomodoro);
    this.setTotalTime(60 * this.timeStore.times.pomodoro);

    if (this.optionsStore.options.pomodoroOption) {
      return;
    } else {
      this.optionsStore.options.setPomodoroOption();
    }
  }

  private _shortBreakOption() {
    this._switchOption(this.timeStore.times.shortBreak);
    this.setTotalTime(60 * this.timeStore.times.shortBreak);

    if (this.optionsStore.options.shortBreakOption) {
      return;
    } else {
      this.optionsStore.options.setShortBreakOption();
    }
  }

  private _longBreakOption() {
    this._switchOption(this.timeStore.times.longBreak);
    this.setTotalTime(60 * this.timeStore.times.longBreak);

    if (this.optionsStore.options.longBreakOption) {
      return;
    } else {
      this.optionsStore.options.setLongBreakOption();
    }
  }
  handlePomodoroOption = () => {
    this._pomodoroOption();
  };

  handleShortBreakOption = () => {
    this._shortBreakOption();
  };

  handleLongBreakOption = () => {
    this._longBreakOption();
  };
}
