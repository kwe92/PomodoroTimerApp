import { types } from "mobx-state-tree";

interface HandleTimerText {
  resume: Function;
  pause: Function;
}
const TimerTextModel = types
  .model({
    timerText: types.string,
  })
  .actions((self) => ({
    setTimerText(timerText: string) {
      self.timerText = timerText;
    },
  }))
  .actions((self) => ({
    handleTimerText({ resume, pause }: HandleTimerText) {
      if (self.timerText == "START") {
        self.setTimerText("PAUSE");
        resume();
        return;
      } else {
        self.setTimerText("START");
        pause();
      }
    },
  }));

export default TimerTextModel;
