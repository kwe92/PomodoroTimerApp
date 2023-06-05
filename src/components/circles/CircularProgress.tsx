import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarContainer } from "./CirclesStyles";
import AppTheme from "../../styles/theme/AppTheme";
import { observer } from "mobx-react";
import Stores from "../../stores/Stores";
import { useEffect } from "react";

interface Props {
  pctTimeRemaining: number;
}

export default observer(function CircularProgress(props: Props) {
  const { currentColorModel } = Stores();
  const currentColor = currentColorModel.currentColor;

  return (
    <CircularProgressbarContainer>
      <CircularProgressbar
        value={props.pctTimeRemaining}
        strokeWidth={3}
        styles={buildStyles({
          pathColor: currentColor,
        })}
      />
    </CircularProgressbarContainer>
  );
});
