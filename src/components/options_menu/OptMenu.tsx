import { HighlightBubble, OptionsMenu } from "./OptMenuStyles";

export default function OptMenu(props: Options) {
  return (
    <OptionsMenu id="options-menu">
      <HighlightBubble
        id="bubble"
        display={props.options.pomodoroOption}
        onClick={props.options.handlePomodoroOption}
      >
        <p>pomodoro</p>
      </HighlightBubble>

      <HighlightBubble
        id="bubble"
        display={props.options.shortBreakOption}
        onClick={props.options.handleShortBreakOption}
      >
        <p>short break</p>
      </HighlightBubble>
      <HighlightBubble
        display={props.options.longBreakOption}
        onClick={props.options.handleLongBreakOption}
      >
        <p>long break</p>
      </HighlightBubble>
    </OptionsMenu>
  );
}
