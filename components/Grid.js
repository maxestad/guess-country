import styled, { css } from 'styled-components';

import { BREAK_POINTS } from '../constants';
import fadeIn from '../lib/fadeIn';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto auto auto;
  width: 100%;
  align-items: center;
  justify-content: center;
  animation: ${({ hasAnimation }) => hasAnimation && css`1s ${fadeIn}`};

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: 1fr;
  }
`;

export default Grid;
