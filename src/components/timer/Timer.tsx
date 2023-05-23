import React, { Fragment } from "react";
import { OptionsMenu, TimerContentContainer, Title } from "./timerStyles";
const PomodoroTimer = () => {
  return (
    <TimerContentContainer>
      <Title>pomodoro</Title>
      <OptionsMenu id="options-menu" />
    </TimerContentContainer>
  );
};

export default PomodoroTimer;
