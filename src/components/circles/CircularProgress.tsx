import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { CircularProgressbarContainer } from "./CirclesStyles";
import AppTheme from "../../styles/theme/AppTheme";

interface Props {
  pctTimeRemaining: number;
}

export default function CircularProgress(props: Props) {
  return (
    <CircularProgressbarContainer>
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
