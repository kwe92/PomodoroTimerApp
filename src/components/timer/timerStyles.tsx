import styled from "styled-components";
import { Column, Row } from "../../styles/layout/Flex";
import { IoMdSettings } from "react-icons/io";
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

const CirclesContainer = styled(Column)`
  position: relative;
  top: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 4rem;
`;

const Circle1 = styled(Column)`
  width: 25.625rem;
  height: 25.625rem;
  border-radius: ${25.625 / 2}rem;
  // border: 0.0625rem solid purple;
  position: absolute;
  box-shadow: -3.125rem -3.125rem 6.25rem 0 #272c5a,
    3.125rem 3.125rem 16.25rem 0 #121530;
  // ?? background-image covers the middle div
  background-image: linear-gradient(-45deg, #2e325a 0%, #0e112a 100%);
`;

const Circle2 = styled(Column)`
  width: 22.875rem;
  height: 22.875rem;
  background: #161932;
  border-radius: ${22.875 / 2}rem;
  // border: 1px solid blue;
  position: absolute;
`;

const Circle3 = styled(Column)`
  width: 21.1875rem;
  height: 21.1875rem;
  border-radius: ${21.1875 / 2}rem;
  border: 10px solid #f87070;
  position: absolute;
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
`;

const TimerText = styled.p`
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.9375rem;
  color: rgba(215, 224, 255, 1);
  cursor: pointer;
`;

export {
  TimerContentContainer,
  Title,
  OptionsMenu,
  HighlightBubble,
  Circle1,
  Circle2,
  Circle3,
  GearIcon,
  GearIconContainer,
  CirclesContainer,
  TimerText,
};
