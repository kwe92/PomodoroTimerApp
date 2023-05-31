import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import AppTheme from "../../styles/theme/AppTheme";

const CrossIcon = styled(RxCross2)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${AppTheme.lightColors.shade0};
  cursor: pointer;
`;

export { CrossIcon };
