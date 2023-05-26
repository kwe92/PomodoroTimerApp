import React, { Fragment } from "react";

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
} from "./timerStyles";

// State Machine to solve for ["pomodoro", "short break", "long break"]??
const PomodoroTimer = () => {
  const options: String[] = ["pomodoro", "short break", "long break"];
  const optionListItems = options.map((option) => (
    <li>
      <HighlightBubble>
        <p>{option}</p>
      </HighlightBubble>
    </li>
  ));

  return (
    <TimerContentContainer>
      <Title>pomodoro</Title>
      {/* <OptionsMenu id="options-menu">{optionListItems}</OptionsMenu> */}

      <OptionsMenu id="options-menu">
        <HighlightBubble id="bubble">
          <p>pomodoro</p>
        </HighlightBubble>
        <p>short break</p>
        <p>long break</p>
      </OptionsMenu>
      <div
        style={{
          position: "relative",
          top: "10rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green",
          height: "10rem",
          width: "4rem",
        }}
      >
        <Circle1 id="c1" />
        <Circle2 />
        <Circle3>
          <p style={{ color: "white", fontSize: "100px" }}>65:48</p>
          {/* GAP */}
          <div style={{ height: "36px" }} />

          <p
            style={{
              fontSize: "1rem",
              letterSpacing: "15px",
              color: "rgba(215,224,255,1)",
            }}
          >
            RESTART
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
