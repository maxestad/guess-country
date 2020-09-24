import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, BREAK_POINTS, COLORS } from '../constants';
import Button from './Button';

const FinishedRoundInfoContainer = styled.div`
  margin-top: 30px;
  padding: 30px 0px 20px 0px;
  border: 1px ${COLORS.grey} solid;
  border-radius: 20px;
  display: block;
  width: 350px;
  text-align: center;

  @media (max-width: ${BREAK_POINTS.small}) {
    width: 310px;
  }
`;

const RoundInfo = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-evenly;
  font-size: ${FONT_SIZE.huge};
`;

const StyledText = styled.div`
  font-size: ${FONT_SIZE.megaHuge};
  text-align: center;

  @media (max-width: ${BREAK_POINTS.small}) {
    font-size: ${FONT_SIZE.superHuge};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const FinishedRoundInfo = ({
  score,
  resetGame,
  mistake,
  updateModeName,
  setRegion,
}) => (
  <>
    <StyledText>Round finished!</StyledText>
    <FinishedRoundInfoContainer>
      <RoundInfo>
        <div>Correct: {score}</div>
        <div>Mistakes: {mistake}</div>
      </RoundInfo>
      <ButtonContainer>
        <Button onClick={resetGame}>New round</Button>
        <Button
          onClick={() => {
            updateModeName(null);
            setRegion(null);
            resetGame();
          }}
        >
          Back Home
        </Button>
      </ButtonContainer>
    </FinishedRoundInfoContainer>
  </>
);

export default FinishedRoundInfo;
