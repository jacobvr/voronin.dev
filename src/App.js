import React from 'react';
import styled from 'styled-components';
import Ava from './components/ava';
import Contact from './components/contact';
import Jobs from './components/jobs';
import Projects from './components/projects';

const StyledApp = styled.div`
  background: #2f2f2f;
  color: #bbb;
  font-family: 'Roboto', sans-serif;
`;

const StyledWrapper = styled.main`
  font-size: 1rem;
  margin: 0 auto;
  max-width: 56rem;
  padding: 0 2rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

const App = () => (
  <StyledApp>
    <Ava />
    <StyledWrapper>
      <Contact />
      <Jobs />
      <Projects />
    </StyledWrapper>
  </StyledApp>
);

export default App;
