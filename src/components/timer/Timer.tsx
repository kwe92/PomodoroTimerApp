import React, {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import AppTheme from "../../styles/theme/AppTheme";

import { TimerSettings } from "react-timer-hook";

// TODO: Refactor divs into tyled components
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
} from "./timerStyles";

import { useTimer } from "react-timer-hook";

const theme = AppTheme;

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
    }
    {
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
      <div
        style={{
          position: "relative",
          top: "10rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "10rem",
          width: "4rem",
        }}
      >
        <Circle1 id="c1" />
        <Circle2 />
        <Circle3>
          <p style={{ color: "white", fontSize: "100px" }}>{`${minutes}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`}</p>
          {/* GAP */}
          <div style={{ height: "36px" }} />

          {/* TODO: TURN INTO BUTTONS ? */}
          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "15px",
              color: "rgba(215,224,255,1)",
              // textAlign: "center",
            }}
            onClick={() => {
              if (timerText == "START") {
                setTimerText("PAUSE");
                start();
                return;
              } else {
                setTimerText("START");
                pause();
              }
            }}
          >
            {timerText}
          </p>
        </Circle3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          // background: "orange",
          height: "23rem",
        }}
      >
        <GearIcon />
      </div>
    </TimerContentContainer>
  );
};

export default PomodoroTimer;
