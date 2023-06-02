import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import { AppContentContainer } from "./AppStyles";
import AppTitle from "./components/title/Title";
import OptMenu from "./components/options_menu/OptMenu";
import Circles from "./components/circles/Circles";
import SettingsIcon from "./components/settings_icon/SettingsIcon";
import SettingsMenu from "./components/settings/SettingsMenu";
import { observer } from "mobx-react";
import useStores from "./stores/Stores";
import OptMenuHandles from "./components/options_menu/OptMenuHandles";

export default observer(function App() {
  const { optionsStore, timeStore, dateModel, timerModel, totalTimeModel } =
    useStores();
  const { seconds, minutes, pause, resume, restart } = timerModel.useTimer(
    dateModel.timer
  );
  const [timerText, setTimerText] = useState("START");
  const [isOpened, setIsOpened] = useState(false);

  const optMenuHandles = new OptMenuHandles({
    timeStore,
    optionsStore,
    dateModel,
    pause,
    restart,
    setTimerText,
    totalTimeModel,
  });
  useEffect(() => {
    dateModel.setTimer(new Date());
    dateModel.timer.setSeconds(
      dateModel.timer.getSeconds() + (60 * timeStore.times.pomodoro) / 2
    );
    totalTimeModel.setTotalTime(60 * timeStore.times.pomodoro);
    restart(dateModel.timer, false);
  }, [timeStore.times.pomodoro]);

  let timeRemaining = minutes * 60 + seconds;
  let pctTimeRemaining = (timeRemaining / totalTimeModel.totalTime) * 100;

  // TODO: expand on this if statement to sound an alarm when the timer reaches 0
  if (timeRemaining == 0) {
    console.log("TIME ELAPSED!!!");
  }

  const handleTimerText = () => {
    if (timerText == "START") {
      setTimerText("PAUSE");
      resume();
      return;
    } else {
      setTimerText("START");
      pause();
    }
  };

  const onProceed = () => {
    console.log("Proceed clicked");
  };

  const styles = {
    p: { color: "white", fontSize: "6.25rem" },
    div: { height: "2.25rem" },
  };

  const options = {
    pomodoroOption: optionsStore.options.pomodoroOption,
    handlePomodoroOption: optMenuHandles.handlePomodoroOption,
    shortBreakOption: optionsStore.options.shortBreakOption,
    handleShortBreakOption: optMenuHandles.handleShortBreakOption,
    longBreakOption: optionsStore.options.longBreakOption,
    handleLongBreakOption: optMenuHandles.handleLongBreakOption,
  };

  return (
    <AppContentContainer>
      <AppTitle title="pomodoro" />
      <OptMenu options={options} />
      <Circles
        pctTimeRemaining={pctTimeRemaining}
        styles={styles}
        minutes={minutes}
        seconds={seconds}
        handleTimerText={handleTimerText}
        timerText={timerText}
      />

      {/* Dialog Modal */}
      <SettingsMenu
        isOpened={isOpened}
        onProceed={onProceed}
        setIsOpened={setIsOpened}
      />
      <SettingsIcon setIsOpened={setIsOpened} />
    </AppContentContainer>
  );
});
