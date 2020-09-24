import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, BREAK_POINTS } from '../constants';
import Button from './Button';
import Row from './Row';

const Description = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: ${FONT_SIZE.superHuge};
  text-align: center;

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-row: 3;
    grid-column: 1;
    font-size: ${FONT_SIZE.huge};
  }
`;

const QuestionContainer = styled(Row)`
  grid-column: 2;
  grid-row: 2;
  margin: 30px;
  font-size: ${FONT_SIZE.superHuge};
  text-align: center;

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-row: 4;
    grid-column: 1;
    margin: 20px;
    font-size: ${FONT_SIZE.huge};
  }
`;

const OptionsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  align-items: center;
  justify-content: center;
  grid-column: 2;
  grid-row: 3;

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-row: 5;
    grid-column: 1;
    display: ${({ isGuessFlag }) => !isGuessFlag && 'flex'};
    flex-direction: ${({ isGuessFlag }) => !isGuessFlag && 'column'};
  }
`;

const FlagContainer = styled.span`
  width: 200px;
  height: 150px;
  border-radius: 10px;
  border: 1px solid transparent;
  margin: 10px;

  &:hover {
    border-color: ${({ isInPool }) => isInPool && '#f2f2f2'};
  }

  @media (max-width: ${BREAK_POINTS.small}) {
    height: 105px;
    width: 140px;
    border: 0px;
  }
`;

const StyledButton = styled(Button)`
  width: 255px;
  display: flex;
  font-size: ${FONT_SIZE.big};

  @media (max-width: ${BREAK_POINTS.desktop}) {
    width: 270px;
    font-size: ${FONT_SIZE.big};
  }
`;

const ModeBody = ({
  currentItem,
  roster,
  handleCountryPick,
  isGuessCountry,
}) => {
  if (isGuessCountry) {
    return (
      <>
        <Description>Which country has the following flag?</Description>
        <QuestionContainer>
          <FlagContainer
            className={`flag-icon flag-icon-${currentItem.code.toLowerCase()}`}
          ></FlagContainer>
        </QuestionContainer>
        <OptionsContainer>
          {roster.map(item => (
            <StyledButton
              onClick={() => handleCountryPick(item.name)}
              key={item.name}
            >
              {item.name}
            </StyledButton>
          ))}
        </OptionsContainer>
      </>
    );
  }

  return (
    <>
      <QuestionContainer>
        <div>
          What is the flag of <br />
          <b>{currentItem.name}</b>?
        </div>
      </QuestionContainer>
      <OptionsContainer isGuessFlag>
        {roster.map(item => (
          <FlagContainer
            isInPool
            className={`flag-icon flag-icon-${item.code.toLowerCase()}`}
            key={item.name}
            onClick={() => handleCountryPick(item.name)}
          ></FlagContainer>
        ))}
      </OptionsContainer>
    </>
  );
};

export default ModeBody;
