import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarContainer } from "../timer/timerStyles";
import AppTheme from "../../styles/theme/AppTheme";

interface Props {
  pctTimeRemaining: number;
}

export default function CircularProgress(props: Props) {
  return (
    <CircularProgressbarContainer>
      {/* refactor: pathColor to be useContext or observable state 
from settings */}
      <CircularProgressbar
        value={props.pctTimeRemaining}
        strokeWidth={3}
        styles={buildStyles({
          pathColor: AppTheme.otherColors.red0,
        })}
      />
    </CircularProgressbarContainer>
  );
}
