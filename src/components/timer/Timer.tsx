import React, { Fragment } from "react";
import {
  OptionsMenu,
  TimerContentContainer,
  Title,
  HighlightBubble,
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
    </TimerContentContainer>
  );
};

export default PomodoroTimer;
