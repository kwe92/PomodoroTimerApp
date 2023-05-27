import React, { useState } from "react";
import { TimerSettings } from "react-timer-hook";

import {
  OptionsMenu,
  TimerContentContainer,
  Title,
  HighlightBubble,
  Circle1,
  Circle2,
  Circle3,
  GearIcon,
  CirclesContainer,
  TimerText,
  GearIconContainer,
} from "./timerStyles";

import { useTimer } from "react-timer-hook";

// State Machine to solve for ["pomodoro", "short break", "long break"]??
const PomodoroTimer = () => {
  const [pomodoro, setPomodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [timerText, setTimerText] = useState("START");
  const options: String[] = ["pomodoro", "short break", "long break"];
  const time = new Date();
  time.setSeconds(time.getSeconds() + 12); // time.getSeconds() + n SEC timer

  const timerSettings: TimerSettings = {
    autoStart: false,
    expiryTimestamp: time,
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

  const handlePomodoroOption = () => {
    if (pomodoro) {
      restart(timerSettings.expiryTimestamp, false);
      setTimerText("START");
      return;
    } else {
      setPomodoro(true);
      setShortBreak(false);
      setLongBreak(false);
    }
  };

  const handleShortBreakOption = () => {
    if (shortBreak) {
      return;
    } else {
      setPomodoro(false);
      setShortBreak(true);
      setLongBreak(false);
    }
  };

  const handleLongBreakOption = () => {
    if (longBreak) {
      return;
    } else {
      setPomodoro(false);
      setShortBreak(false);
      setLongBreak(true);
    }
  };

  const handleTimerText = () => {
    if (timerText == "START") {
      setTimerText("PAUSE");
      start();
      return;
    } else {
      setTimerText("START");
      pause();
    }
  };

  return (
    <TimerContentContainer>
      <Title>pomodoro</Title>

      <OptionsMenu id="options-menu">
        <HighlightBubble
          id="bubble"
          display={pomodoro}
          onClick={handlePomodoroOption}
        >
          <p>pomodoro</p>
        </HighlightBubble>

        <HighlightBubble
          id="bubble"
          display={shortBreak}
          onClick={handleShortBreakOption}
        >
          <p>short break</p>
        </HighlightBubble>
        <HighlightBubble display={longBreak} onClick={handleLongBreakOption}>
          <p>long break</p>
        </HighlightBubble>
      </OptionsMenu>
      <CirclesContainer>
        <Circle1 id="c1" />
        <Circle2 />
        <Circle3>
          <p style={{ color: "white", fontSize: "6.25rem" }}>{`${minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</p>
          <div style={{ height: "36px" }} />
          <TimerText onClick={handleTimerText}>{timerText}</TimerText>
        </Circle3>
      </CirclesContainer>
      <GearIconContainer>
        <GearIcon />
      </GearIconContainer>
    </TimerContentContainer>
  );
};

export default PomodoroTimer;
