import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";
import { IoMdSettings } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import AppTheme from "../../styles/theme/AppTheme";

const theme: ThemeInterface = AppTheme;

const TimerContentContainer = styled(Column)`
  height: 100%;
`;

const Title = styled.p`
  color: white;
  font-size: 2rem;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
`;

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
    props.display ? theme.otherColors.red0 : theme.darkColors.shade0};
`;

const GearIconContainer = styled.div`
  height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

const GearIcon = styled(IoMdSettings)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${theme.lightColors.shade0};
  cursor: pointer;
`;

const SettingsModal = styled(Column)<{ display: boolean }>`
  width: 100%;
  height: 80%;
  position: absolute;
  z-index: 1;
  // justify-content: start;
  display: ${(props) => (props.display ? "inline" : "none")};
  background: rgba(22, 25, 50, 0.725);
`;

export {
  TimerContentContainer,
  Title,
  OptionsMenu,
  HighlightBubble,
  GearIcon,
  GearIconContainer,
  SettingsModal,
};
