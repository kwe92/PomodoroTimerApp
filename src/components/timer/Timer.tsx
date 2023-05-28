import React, { Children, useEffect, useState } from "react";
import { TimerSettings } from "react-timer-hook";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTimer } from "react-timer-hook";
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
import AppTheme from "../../styles/theme/AppTheme";

// State Machine to solve for ["pomodoro", "short break", "long break"]??
const PomodoroTimer = () => {
  const [pomodoroOption, setPomodoroOption] = useState(true);
  const [shortBreakOption, setShortBreakOption] = useState(false);
  const [longBreakOption, setLongBreakOption] = useState(false);
  const [pomodoro, setPomodoro] = useState(1);
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

  useEffect(() => {
    setTimer(new Date());
    timer.setSeconds(timer.getSeconds() + (60 * pomodoro) / 2);
    setTotalTime(60 * pomodoro);
    restart(timer, false);
  }, [pomodoro]);

  // TODO: expand on this if statement to sound an alarm when the tiemr reaches 0
  if (minutes * 60 + seconds == 0) {
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

  return (
    <TimerContentContainer>
      <Title>pomodoro</Title>

      <OptionsMenu id="options-menu">
        <HighlightBubble
          id="bubble"
          display={pomodoroOption}
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
          {/* TODO: Get circle progress indicator to work properly */}
          <div
            style={{
              position: "absolute",
              width: " 21.1875rem",
              height: "21.1875rem",
            }}
          >
            {/* refactor: pathColor to be useContext or observable state from settings */}
            <CircularProgressbar
              value={((minutes * 60 + seconds) / totalTime) * 100}
              strokeWidth={3}
              styles={buildStyles({
                pathColor: AppTheme.otherColors.red0,
              })}
            />
          </div>
          <p style={{ color: "white", fontSize: "6.25rem" }}>{`${minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</p>
          <div style={{ height: "2.25rem" }} />
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
