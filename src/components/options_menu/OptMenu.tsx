import Stores from "../../stores/Stores";
import { HighlightBubble, OptionsMenu } from "./OptMenuStyles";
import { observer } from "mobx-react";

export default observer(function OptMenu(props: Options) {
  const { currentColorModel } = Stores();
  const currentColor = currentColorModel.currentColor;
  return (
    <OptionsMenu id="options-menu">
      <HighlightBubble
        currentColor={currentColor as CurrentColor}
        display={props.options.pomodoroOption}
        onClick={props.options.handlePomodoroOption}
      >
        <p>pomodoro</p>
      </HighlightBubble>

      <HighlightBubble
        currentColor={currentColor as CurrentColor}
        display={props.options.shortBreakOption}
        onClick={props.options.handleShortBreakOption}
      >
        <p>short break</p>
      </HighlightBubble>
      <HighlightBubble
        currentColor={currentColor as CurrentColor}
        display={props.options.longBreakOption}
        onClick={props.options.handleLongBreakOption}
      >
        <p>long break</p>
      </HighlightBubble>
    </OptionsMenu>
  );
});
