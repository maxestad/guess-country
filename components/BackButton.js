import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, COLORS, BREAK_POINTS } from '../constants';

const ArrowBack = styled.div`
  border: solid ${COLORS.grey};
  border-width: 0 2px 2px 0;
  padding: 10px;
  transform: rotate(135deg);

  &:active {
    transform: scale(0.9) rotate(135deg);
  }

  @media (max-width: ${BREAK_POINTS.small}) {
    padding: 8px;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 60px;
  top: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${FONT_SIZE.size20};

  &:active {
    transform: scale(0.9);
  }

  @media (max-width: ${BREAK_POINTS.small}) {
    left: 30px;
    top: 30px;
    font-size: ${FONT_SIZE.size18};
  }
`;

const BackButton = ({ onClick }) => (
  <Container onClick={onClick}>
    <ArrowBack />
    Back
  </Container>
);

export default BackButton;
