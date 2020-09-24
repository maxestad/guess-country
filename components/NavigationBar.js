import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, BREAK_POINTS, COLORS, MODES } from '../constants';
import fadeIn from '../lib/fadeIn';

const Container = styled.header`
  display: inline-flex;
  justify-content: center;
  border: 1px ${COLORS.grey} solid;
  border-radius: 5px;
  margin-top: 35px;
  animation: 2s ${fadeIn};

  @media (max-width: ${BREAK_POINTS.small}) {
    flex-direction: column;
  }
`;

const Button = styled.div`
  font-size: ${FONT_SIZE.small};
  cursor: pointer;
  text-align: center;
  width: 150px;
  height: 2.75rem;
  line-height: 2.75rem;
  padding: 0 1.25rem 0 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border-color: ${COLORS.grey};
  border-width: 0px 1px 0px 0px;
  border-style: solid;

  &:hover {
    background-color: rgb(230, 230, 230, 0.3);
  }

  &:last-child {
    border-width: 0px;
  }

  @media (max-width: ${BREAK_POINTS.small}) {
    width: 150px;
    border-width: 0px 0px 1px 0px;
  }
`;

const NavigationBar = ({ updateModeName }) => (
  <Container>
    <Button onClick={() => updateModeName(MODES.GUESS_FLAG)}>Guess Flag</Button>
    <Button onClick={() => updateModeName(MODES.GUESS_COUNTRY)}>
      Guess Country
    </Button>
    <Button onClick={() => updateModeName(MODES.TIMER_MODE)}>Timer Mode</Button>
  </Container>
);

export default NavigationBar;
