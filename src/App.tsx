import React, { useEffect, useState } from "react";
import { TimerSettings } from "react-timer-hook";
import "react-circular-progressbar/dist/styles.css";
import { useTimer } from "react-timer-hook";
import { AppContentContainer } from "./AppStyles";
import AppTitle from "./components/title/Title";
import OptMenu from "./components/options_menu/OptMenu";
import Circles from "./components/circles/Circles";
import SettingsIcon from "./components/settings_icon/SettingsIcon";
import SettingsMenu from "./components/settings/SettingsMenu";
import { observer } from "mobx-react";
import useStores from "./stores/Stores";

export default observer(function App() {
  const { optionsStore, timeStore } = useStores();
  const [timer, setTimer] = useState(new Date());
  const [timerText, setTimerText] = useState("START");
  const [totalTime, setTotalTime] = useState(0);

  const timerSettings: TimerSettings = {
    autoStart: false,
    expiryTimestamp: timer,
    onExpire: () => console.warn("onExpire called"),
  };
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer(timerSettings);

  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setTimer(new Date());
    timer.setSeconds(timer.getSeconds() + (60 * timeStore.times.pomodoro) / 2);
    setTotalTime(60 * timeStore.times.pomodoro);
    restart(timer, false);
  }, [timeStore.times.pomodoro]);

  let timeRemaining = minutes * 60 + seconds;
  let pctTimeRemaining = (timeRemaining / totalTime) * 100;

  // TODO: expand on this if statement to sound an alarm when the timer reaches 0
  if (timeRemaining == 0) {
    console.log("TIME ELAPSED!!!");
  }

  const handleSwitchOption = (time: number) => {
    pause();
    setTimer(new Date());
    timer.setSeconds(timer.getSeconds() + 60 * time);
    restart(timer, false);
    setTimerText("START");
  };

  const handlePomodoroOption = () => {
    handleSwitchOption(timeStore.times.pomodoro);
    setTotalTime(60 * timeStore.times.pomodoro);

    if (optionsStore.options.pomodoroOption) {
      return;
    } else {
      optionsStore.options.setPomodoroOption();
    }
  };

  const handleShortBreakOption = () => {
    handleSwitchOption(timeStore.times.shortBreak);
    setTotalTime(60 * timeStore.times.shortBreak);

    if (optionsStore.options.shortBreakOption) {
      return;
    } else {
      optionsStore.options.setShortBreakOption();
    }
  };

  const handleLongBreakOption = () => {
    handleSwitchOption(timeStore.times.longBreak);
    setTotalTime(60 * timeStore.times.longBreak);

    if (optionsStore.options.longBreakOption) {
      return;
    } else {
      optionsStore.options.setLongBreakOption();
    }
  };

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
    handlePomodoroOption: handlePomodoroOption,
    shortBreakOption: optionsStore.options.shortBreakOption,
    handleShortBreakOption: handleShortBreakOption,
    longBreakOption: optionsStore.options.longBreakOption,
    handleLongBreakOption: handleLongBreakOption,
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
