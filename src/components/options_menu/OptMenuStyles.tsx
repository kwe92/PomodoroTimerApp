import styled from "styled-components";
import { Row } from "../../styles/layout/Flex";
import AppTheme from "../../styles/theme/AppTheme";

const OptionsMenu = styled(Row)`
  position: relative;
  z-index: 1;
  width: 23.3125rem;
  height: 3.9375rem;
  border-radius: 3.125rem;
  justify-content: space-evenly;

  p {
    font-size: 0.875rem;
  }
`;
// TODO Needs work
const HighlightBubble = styled(Row)<{ display: boolean }>`
  width: 7.5rem;
  height: 3rem;
  border-radius: 3.125rem;
  cursor: pointer;
  background: ${(props) =>
    props.display ? AppTheme.otherColors.red0 : AppTheme.darkColors.shade0};
`;

export { OptionsMenu, HighlightBubble };
