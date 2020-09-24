import React from 'react';
import styled from 'styled-components';

import { FONT_SIZE, BREAK_POINTS, COLORS } from '../constants';
import fadeIn from '../lib/fadeIn';

const Container = styled.div`
  animation: 2s ${fadeIn};
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const GlobeIcon = styled.img`
  height: 100px;
  width: 100px;
  border-color: ${COLORS.grey};
  border-width: 1px;
  border-style: solid;
  border-radius: 100%;
  padding: 20px;
`;

const Greeting = styled.div`
  font-size: ${FONT_SIZE.megaHuge};
  letter-spacing: 0.2rem;
  margin: 25px 0px;

  @media (max-width: ${BREAK_POINTS.small}) {
    font-size: ${FONT_SIZE.size44};
  }
`;

const Description = styled.div`
  font-size: ${FONT_SIZE.big};
  letter-spacing: 0.1rem;
  width: 400px;
  text-align: center;

  @media (max-width: ${BREAK_POINTS.small}) {
    width: 275px;
  }
`;

const WelcomeContent = () => (
  <Container>
    <GlobeIcon src="globe.png" />
    <Greeting>
      <>Guess Country</>
    </Greeting>
    <Description>
      Challenge yourself by taking a test on knowledge of countries. Go ahead!
    </Description>
  </Container>
);

export default WelcomeContent;
