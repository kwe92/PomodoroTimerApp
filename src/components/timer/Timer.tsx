import React, { Children, useEffect, useState } from "react";
import { TimerSettings } from "react-timer-hook";
import {
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
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
  const [timerPercent, setTimerPercent] = useState(1);

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
    restart(timer, false);
  }, [pomodoro]);

  const handleSwitchOption = (time: number) => {
    pause();
    setTimer(new Date());
    timer.setSeconds(timer.getSeconds() + 60 * time);
    restart(timer, false);
    setTimerText("START");
  };

  const handlePomodoroOption = () => {
    handleSwitchOption(pomodoro);
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
            <CircularProgressbar
              value={timerPercent}
              strokeWidth={3}
              text={`${timerPercent}`}
            />
          </div>
          <p style={{ color: "white", fontSize: "6.25rem" }}>{`${minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</p>
          <div style={{ height: "2.25rem" }} />
          <TimerText onClick={handleTimerText}>{timerText}</TimerText>
        </Circle3>
        {/* </_CircularProgressbarWithChildren> */}
      </CirclesContainer>
      <GearIconContainer>
        <GearIcon />
      </GearIconContainer>
    </TimerContentContainer>
  );
};
const _CircularProgressbarWithChildren = ({
  value,
  children,
}: {
  value: number;
  children: React.ReactNode;
}) => (
  <CircularProgressbarWithChildren value={value}>
    {children}
  </CircularProgressbarWithChildren>
);
export default PomodoroTimer;
