import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, COLORS } from '../constants';
import fadeIn from '../lib/fadeIn';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT_SIZE.small};
  height: 70px;
  animation: 2s ${fadeIn};
`;

const Link = styled.a`
  color: ${COLORS.grey};
`;

const Footer = () => (
  <Container>
    Made with &hearts; by&nbsp;
    <Link href="https://github.com/maxestad" target="_blank">
      maxestad
    </Link>
  </Container>
);

export default Footer;
