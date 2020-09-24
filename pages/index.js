import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import Mode from '../components/Mode';
import Footer from '../components/Footer';

import { COLORS } from '../constants';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    height: 100%;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(32, 131, 128, 1) 100%
    );
    color: ${COLORS.grey};
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }

  #__next {
    height: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 70px);
`;

const Home = () => (
  <>
    <GlobalStyle />
    <Container>
      <Mode />
    </Container>
    <Footer />
  </>
);

export default Home;
