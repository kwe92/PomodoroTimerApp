import CircularProgress from "./CircularProgress";
import {
  Circle1,
  Circle2,
  Circle3,
  CirclesContainer,
  TimerText,
} from "../circles/CirclesStyles";

interface Props {
  pctTimeRemaining: number;
  minutes: number;
  seconds: number;
  handleTimerText: Function;
  timerText: string;
}

export default function Circles(props: Props) {
  const _handleTimerText = () => {
    props.handleTimerText();
  };
  return (
    <CirclesContainer>
      <Circle1 id="c1" />
      <Circle2 />
      <Circle3>
        <CircularProgress pctTimeRemaining={props.pctTimeRemaining} />
        <p id="timer">{`${props.minutes}:${
          props.seconds < 10 ? `0${props.seconds}` : props.seconds
        }`}</p>
        <div id="circle-spacer" />
        <TimerText onClick={_handleTimerText}>{props.timerText}</TimerText>
      </Circle3>
    </CirclesContainer>
  );
}
