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
  styles: { p: Object; div: Object };
  minutes: number;
  seconds: number;
  handleTimerText: Function;
  timerText: string;
}

export default function Circles(props: Props) {
  return (
    <CirclesContainer>
      <Circle1 id="c1" />
      <Circle2 />
      <Circle3>
        <CircularProgress pctTimeRemaining={props.pctTimeRemaining} />
        <p style={props.styles.p}>{`${props.minutes}:${
          props.seconds < 10 ? `0${props.seconds}` : props.seconds
        }`}</p>
        <div style={props.styles.div} />
        <TimerText
          onClick={() => {
            props.handleTimerText();
          }}
        >
          {props.timerText}
        </TimerText>
      </Circle3>
    </CirclesContainer>
  );
}
