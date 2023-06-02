import styled from "styled-components";
import { Column } from "../../styles/layout/Flex";

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

  #timer {
    color: white;
    font-size: 6.25rem;
  }

  #circle-spacer {
    height: 2.25rem;
  }
`;

const CircularProgressbarContainer = styled(Column)`
  width: 21.1875rem;
  height: 21.1875rem;
  position: absolute;
`;

const TimerText = styled.p`
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.9375rem;
  color: rgba(215, 224, 255, 1);
  cursor: pointer;
`;

export {
  Circle1,
  Circle2,
  Circle3,
  CirclesContainer,
  CircularProgressbarContainer,
  TimerText,
};
