import styled from 'styled-components';

import { BREAK_POINTS, COLORS } from '../constants';

const Button = styled.div`
  padding: 7px 20px 7px 20px;
  margin: 7px;
  cursor: pointer;
  background-color: transparent;
  border: 1px ${COLORS.grey} solid;
  border-radius: 15px;
  display: flex;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size};

  @media (max-width: ${BREAK_POINTS.small}) {
    width: ${({ widthMobile }) => widthMobile};
    padding: 7px 13px;
  }

  @media (min-width: ${BREAK_POINTS.desktop}) {
    &:hover {
      background-color: rgb(230, 230, 230, 0.2);
    }
  }
`;

export default Button;
