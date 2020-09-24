import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, BREAK_POINTS, COLORS, MODES } from '../constants';
import Timer from './Timer';

const Container = styled.div`
  display: inline-flex;
  grid-column: 3;
  grid-row: 3;

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-row: 2;
    grid-column: 1;
    justify-self: center;
  }
`;

const TimerContainer = styled.div`
  display: inline-flex;
  grid-column: 2;
  grid-row: 1;
  justify-content: center;
  font-size: ${FONT_SIZE.huge};

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-row: 1;
    grid-column: 1;
    justify-self: center;
    font-size: ${FONT_SIZE.size18};
  }
`;

const StyledText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 30px;
  max-height: 200px;
  border-left: 1px ${COLORS.grey} solid;
  align-items: flex-start;
  justify-content: center;
  font-size: ${FONT_SIZE.huge};

  @media (max-width: ${BREAK_POINTS.desktop}) {
    border: none;
    align-items: center;
    margin-bottom: 40px;
    font-size: ${FONT_SIZE.size18};
  }
`;

const SideInfo = ({
  score,
  modeName,
  updateIsRoundEnded,
  isTimerActive,
  currentRound,
  region,
}) => {
  if (modeName === MODES.TIMER_MODE) {
    return (
      <>
        <TimerContainer>
          <Timer
            updateIsRoundEnded={updateIsRoundEnded}
            isTimerActive={isTimerActive}
          />
        </TimerContainer>
        <Container>
          <StyledInfoContainer>
            <StyledText>Question {currentRound + 1}</StyledText>
            <div>Score: {score}</div>
            <div>Region: {region}</div>
          </StyledInfoContainer>
        </Container>
      </>
    );
  }

  return (
    <Container>
      <StyledInfoContainer>
        <StyledText>Question {currentRound + 1}/5</StyledText>
        <div>Score: {score}</div>
        <div>Region: {region}</div>
      </StyledInfoContainer>
    </Container>
  );
};

export default SideInfo;
