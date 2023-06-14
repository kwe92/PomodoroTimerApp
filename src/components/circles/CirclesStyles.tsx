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

  @media screen and (max-width: 450px) {
    width: 23.625rem;
    height: 23.625rem;
    border-radius: ${23.625 / 2}rem;
  }

  @media screen and (max-width: 400px) {
    width: 21.625rem;
    height: 21.625rem;
    border-radius: ${21.625 / 2}rem;
  }
`;

const Circle2 = styled(Column)`
  width: 22.875rem;
  height: 22.875rem;
  background: #161932;
  border-radius: ${22.875 / 2}rem;
  // border: 1px solid blue;
  position: absolute;

  @media screen and (max-width: 450px) {
    width: 20.875rem;
    height: 20.875rem;

    border-radius: ${20.875 / 2}rem;
  }

  @media screen and (max-width: 400px) {
    width: 18.875rem;
    height: 18.875rem;

    border-radius: ${18.875 / 2}rem;
  }
`;

const Circle3 = styled(Column)`
  width: 21.1875rem;
  height: 21.1875rem;
  border-radius: ${21.1875 / 2}rem;
  // border: 10px solid #f87070;
  position: absolute;

  #timer {
    color: white;
    font-size: 5.75rem;
  }

  #circle-spacer {
    height: 1.5rem;
  }

  @media screen and (max-width: 450px) {
    width: 19.1875rem;
    height: 19.1875rem;

    border-radius: ${19.1875 / 2}rem;

    #timer {
      color: white;
      font-size: 5rem;
    }

    #circle-spacer {
      height: 0.75rem;
    }
  }

  @media screen and (max-width: 400px) {
    width: 17.1875rem;
    height: 17.1875rem;

    border-radius: ${17.1875 / 2}rem;

    #timer {
      color: white;
      font-size: 5rem;
    }

    #circle-spacer {
      height: 0.75rem;
    }
  }
`;

const CircularProgressbarContainer = styled(Column)`
  width: 21.1875rem;
  height: 21.1875rem;
  position: absolute;

  @media screen and (max-width: 450px) {
    width: 19.1875rem;
    height: 19.1875rem;
  }
  @media screen and (max-width: 400px) {
    width: 17.1875rem;
    height: 17.1875rem;
  }
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
