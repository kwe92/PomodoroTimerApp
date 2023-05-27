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
  const [shortBreakOption, setShortBreakOption] = useState(false);
  const [longBreakOption, setLongBreakOption] = useState(false);

  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [] = useState();
  const [timerText, setTimerText] = useState("START");
  const options: String[] = ["pomodoro", "short break", "long break"];
  const timer = new Date();
  timer.setSeconds(timer.getSeconds() + 60 * 3); // time.getSeconds() + n SEC timer

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

  const handlePomodoroOption = () => {
    if (pomodoro) {
      pause();
      restart(timer, false);
      setTimerText("START");
      return;
    } else {
      setPomodoro(true);
      setShortBreakOption(false);
      setLongBreakOption(false);
    }
  };
  // TODO: Fix short break timer display
  const handleShortBreakOption = () => {
    const timer = new Date();
    if (shortBreakOption) {
      pause();
      restart(timer, false);
      timer.setSeconds(60 * 5);
      restart(timer, false);

      return;
    } else {
      setPomodoro(false);
      setShortBreakOption(true);
      setLongBreakOption(false);
    }
  };

  const handleLongBreakOption = () => {
    if (longBreakOption) {
      return;
    } else {
      setPomodoro(false);
      setShortBreakOption(false);
      setLongBreakOption(true);
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
          display={shortBreakOption}
          onClick={handleShortBreakOption}
        >
          <p>short break</p>
        </HighlightBubble>
        <HighlightBubble
          display={longBreakOption}
          onClick={handleLongBreakOption}
        >
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
