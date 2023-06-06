import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import AppTheme from "../../styles/theme/AppTheme";
import { Column, Row } from "../../styles/layout/Flex";
import { BsCheckLg } from "react-icons/bs";

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
  @media screen and (max-width: 450px) {
    width: 20.5rem;
    height: 34.375rem;
    position: relative;
    bottom: 3rem;
    left: 1rem;
  }
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
  // ?? remove maybe
  @media screen and (max-width: 450px) {
    padding: 0 1.25rem;
    align-items: center;
  }
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

interface FontCircleInterface {
  isselected?: string;
}

const FontCircle = styled(Column)<FontCircleInterface>`
  width: 2.5rem;
  height: 2.5rem;
  background: ${(props) =>
    props.isselected == "true" ? "black" : "rgba(239,244,250,1)"};
  border-radius: 1.25rem;
  color: ${(props) => (props.isselected == "true" ? "white" : "black")};
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

interface BsCheckProps {
  displayon: string;
}
const CheckIcon = styled(BsCheckLg)<BsCheckProps>`
  display: ${(props) => (props.displayon == "true" ? "inline" : "none")};
  color: black;
`;

interface ApplyButtonProps {
  currentColor: CurrentColor;
}
const ApplyButton = styled.button<ApplyButtonProps>`
  position: relative;
  top: 2.125rem;
  left: 12.5rem;
  width: 8.75rem;
  height: 3.375rem;
  background: ${(props) => props.currentColor};
  border: none;
  border-radius: ${8.75 / 2}rem;
  font-size: 1rem;
  color: white;

  @media screen and (max-width: 450px) {
    top: 0.625rem;
    left: 5.625rem;
  }
`;

const SettingsTimerOptions = styled(Row)`
  width: 100%;
  height: 4.375rem;
  margin-top: 1.5rem;
  justify-content: space-between;
  // ?? maybe remove
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin-bottom: 6rem;
  }
`;

const SetTimerDropDown = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  justify-content: start;
  z-index: 1;
  width: 8.75rem;
  height: 100%;
  #timer-title {
    color: rgba(165, 166, 178, 1);
  }
  // ?? remove maybe
  @media screen and (max-width: 450px) {
    flex-direction: row;
    align-items: center;
    padding: 0.25rem 0;
    justify-content: space-between;
    width: 100%;
  }
`;

const SetTimerListTile = styled(Row)<{ currentColor: CurrentColor }>`
  align-items: start;
  justify-content: start;
  padding: 0.5rem 0.375rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.currentColor};
  }
`;

const PickTimeIconListTile = styled(Row)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: rgba(239, 241, 250, 1);
  padding: 0.0625rem 0.625rem;
  border-radius: 0.75rem;

  @media screen and (max-width: 450px) {
    width: 8.75rem;
  }
`;

const ArrowIconContainer = styled(Column)`
  align-items: center;
  color: rgba(187, 189, 203, 1);
`;

const SetTimerDropDownOptions = styled.li<{ display: string }>`
  display: ${(props) => (props.display == "true" ? "flex" : "none")};
  flex-direction: column;
  width: 8.75rem;
  position: absolute;
  background: white;
  top: 4.375rem;
  color: black;
  border-radius: 0.75rem;
  box-shadow: 0.0625rem 0.125rem 0.375rem rgba(187, 189, 203, 1);
  // TODO: convert to rem
  @media screen and (max-width: 450px) {
    left: 2.25rem;
    top: 2.5rem;
  }
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
  CheckIcon,
  ApplyButton,
  SetTimerDropDownOptions,
  SetTimerListTile,
  PickTimeIconListTile,
  ArrowIconContainer,
};
