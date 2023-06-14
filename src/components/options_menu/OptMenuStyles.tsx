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

  @media screen and (max-width: 400px) {
    width: 21.3125rem;
  }
`;
// TODO Needs work
const HighlightBubble = styled(Row)<{
  display: boolean;
  currentColor: CurrentColor;
}>`
  width: 7.5rem;
  height: 3rem;
  border-radius: 3.125rem;
  cursor: pointer;
  background: ${(props) =>
    props.display ? props.currentColor : AppTheme.darkColors.shade0};

  @media screen and (max-width: 400px) {
    width: 6rem;
  }
`;

export { OptionsMenu, HighlightBubble };
