import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import AppTheme from "../../styles/theme/AppTheme";
import { Column, Row } from "../../styles/layout/Flex";

const CrossIcon = styled(RxCross2)`
  width: 1.75rem;
  height: 1.75rem;
  color: ${AppTheme.darkColors.shade1};
  cursor: pointer;
`;

const ModalBackDrop = styled(Column)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.75rem;
  height: 30.625rem;
  background: ${AppTheme.lightColors.shade2};
  border-radius: 25px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  color: black;
  justify-content: space-between;
  padding-top: 2.125rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: rgba(227, 225, 225, 1);
  margin: 1.5rem 0;
`;

const BottomSection = styled(Column)`
  padding: 0 2.5rem;
  align-items: start;
`;

const SettingsTimerOptions = styled(Row)`
  width: 100%;
  height: 4.375rem;
  background: rgba(156, 192, 231, 1);
  margin-top: 1.5rem;
  justify-content: space-between;
`;

const SetTimerDropDown = styled.div`
  width: 8.75rem;
  height: 100%;
  background: rgba(184, 94, 87, 1);
`;

const FontSettings = styled(Row)`
  width: 100%;
  height: 2.5rem;
  justify-content: space-between;
  color: black;
`;

const OptionsContainer = styled(Row)`
  width: 9.5rem;
  height: 100%;
  justify-content: space-between;
`;

const FontCircle = styled(Column)`
  width: 2.5rem;
  height: 2.5rem;
  background: black;
  border-radius: 1.25rem;
`;

const ColorSettings = styled(Row)`
  width: 100%;
  height: 2.5rem;
  justify-content: space-between;
  color: black;
`;

const RedCircle = styled(FontCircle)`
  background: ${AppTheme.otherColors.red0};
`;

const BlueCircle = styled(FontCircle)`
  background: ${AppTheme.otherColors.blue0};
`;

const PurpleCircle = styled(FontCircle)`
  background: ${AppTheme.otherColors.purple0};
`;
export {
  CrossIcon,
  ModalBackDrop,
  SettingsContainer,
  TopSection,
  HorizontalLine,
  BottomSection,
  SettingsTimerOptions,
  SetTimerDropDown,
  FontSettings,
  OptionsContainer,
  FontCircle,
  ColorSettings,
  RedCircle,
  BlueCircle,
  PurpleCircle,
};
