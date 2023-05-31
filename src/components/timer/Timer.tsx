import React, { useEffect, useState } from "react";
import { TimerSettings } from "react-timer-hook";
import "react-circular-progressbar/dist/styles.css";
import { useTimer } from "react-timer-hook";
import {
  TimerContentContainer,
  Title,
  Circle1,
  Circle2,
  Circle3,
  GearIcon,
  CirclesContainer,
  TimerText,
  GearIconContainer,
  SettingsModal as _SettingsModal,
} from "./timerStyles";
import OptMenu from "../options_menu/OptMenu";
import CircularProgress from "../circular_progress/CircularProgress";
import ModalPopUp from "../modal_popup/ModalPopUp";
import Circles from "../circles/Circles";

// TODO: Continue working on settings
// State Machine to solve for ["pomodoro", "short break", "long break"]??
const PomodoroTimer = () => {
  const [pomodoroOption, setPomodoroOption] = useState(true);
  const [shortBreakOption, setShortBreakOption] = useState(false);
  const [longBreakOption, setLongBreakOption] = useState(false);
  const [pomodoro, setPomodoro] = useState(16);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
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
    timer.setSeconds(timer.getSeconds() + (60 * pomodoro) / 2);
    setTotalTime(60 * pomodoro);
    restart(timer, false);
  }, [pomodoro]);

  let timeRemaining = minutes * 60 + seconds;
  let pctTimeRemaining = (timeRemaining / totalTime) * 100;

  // TODO: expand on this if statement to sound an alarm when the tiemr reaches 0
  if (timeRemaining == 0) {
    console.log("TIME ELAPSED2");
  }

  const handleSwitchOption = (time: number) => {
    pause();
    setTimer(new Date());
    timer.setSeconds(timer.getSeconds() + 60 * time);
    restart(timer, false);
    setTimerText("START");
  };

  const handlePomodoroOption = () => {
    handleSwitchOption(pomodoro);
    setTotalTime(60 * pomodoro);
    if (pomodoroOption) {
      return;
    } else {
      setPomodoroOption(true);
      setShortBreakOption(false);
      setLongBreakOption(false);
    }
  };

  const handleShortBreakOption = () => {
    handleSwitchOption(shortBreak);
    setTotalTime(60 * shortBreak);

    if (shortBreakOption) {
      return;
    } else {
      setPomodoroOption(false);
      setShortBreakOption(true);
      setLongBreakOption(false);
    }
  };

  const handleLongBreakOption = () => {
    handleSwitchOption(longBreak);
    setTotalTime(60 * longBreak);

    if (longBreakOption) {
      return;
    } else {
      setPomodoroOption(false);
      setShortBreakOption(false);
      setLongBreakOption(true);
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
    pomodoroOption: pomodoroOption,
    handlePomodoroOption: handlePomodoroOption,
    shortBreakOption: shortBreakOption,
    handleShortBreakOption: handleShortBreakOption,
    longBreakOption: longBreakOption,
    handleLongBreakOption: handleLongBreakOption,
  };

  return (
    <TimerContentContainer>
      <Title>pomodoro</Title>
      <OptMenu options={options} />
      <Circles
        pctTimeRemaining={pctTimeRemaining}
        styles={styles}
        minutes={minutes}
        seconds={seconds}
        handleTimerText={handleTimerText}
        timerText={timerText}
      />
      <GearIconContainer>
        <GearIcon onClick={() => setIsOpened(true)} />
      </GearIconContainer>

      {/* Dialog Modal */}
      <ModalPopUp
        isOpened={isOpened}
        onProceed={onProceed}
        setIsOpened={setIsOpened}
      />
    </TimerContentContainer>
  );
};

export default PomodoroTimer;
