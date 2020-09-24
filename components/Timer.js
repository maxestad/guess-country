import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from './Button';
import { FONT_SIZE, BREAK_POINTS } from '../constants';
import Row from './Row';

const Container = styled(Row)`
  flex-direction: column;
  grid-column: 2;
  grid-row: 3;

  @media (max-width: ${BREAK_POINTS.small}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  font-size: ${FONT_SIZE.huge};
`;

const StyledText = styled.div`
  text-align: center;
  max-width: 550px;
  font-size: ${FONT_SIZE.huge};

  @media (max-width: ${BREAK_POINTS.small}) {
    font-size: ${({ isTimerActive }) =>
      isTimerActive ? FONT_SIZE.size18 : FONT_SIZE.huge};
    max-width: 300px;
  }
`;

const Timer = ({ updateIsRoundEnded, isTimerActive, setIsTimerActive }) => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    let interval = null;

    if (isTimerActive && seconds >= 1) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      updateIsRoundEnded(true);
    }

    return () => clearInterval(interval);
  }, [isTimerActive, seconds, updateIsRoundEnded]);

  return (
    <>
      {!isTimerActive && (
        <Container>
          <StyledText>
            You will have {seconds} seconds to answer as many questions as you
            can
          </StyledText>
          <StyledButton
            onClick={() => {
              setIsTimerActive(true);
            }}
          >
            Start
          </StyledButton>
        </Container>
      )}
      {isTimerActive && (
        <StyledText isTimerActive>
          Time left: {seconds} {seconds === 1 ? 'second' : 'seconds'}
        </StyledText>
      )}
    </>
  );
};

export default Timer;
