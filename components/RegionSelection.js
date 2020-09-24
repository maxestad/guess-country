import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import { FONT_SIZE, BREAK_POINTS } from '../constants';
import BackButton from './BackButton';
import fadeIn from '../lib/fadeIn';

const Container = styled.div`
  animation: 1s ${fadeIn};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAK_POINTS.desktop}) {
    grid-template-columns: 1fr;
  }
`;

const StyledText = styled.div`
  text-align: center;
  max-width: 550px;
  font-size: ${FONT_SIZE.superHuge};
  margin-bottom: 30px;

  @media (max-width: ${BREAK_POINTS.small}) {
    max-width: 300px;
    font-size: ${FONT_SIZE.huge};
  }
`;

const RegionSelection = ({ updateModeName, setRegion }) => {
  const renderButton = name => (
    <Button
      onClick={() => {
        setRegion(name);
      }}
    >
      {name}
    </Button>
  );

  return (
    <Container>
      <StyledText>Choose your region</StyledText>
      <Grid>
        {renderButton('All World')}
        {renderButton('Asia')}
        {renderButton('Americas')}
        {renderButton('Africa')}
        {renderButton('Europe')}
        {renderButton('Oceania')}
      </Grid>
      <BackButton onClick={() => updateModeName(null)} />
    </Container>
  );
};

export default RegionSelection;
