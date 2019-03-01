import React from 'react';
import styled from 'styled-components';
import avaImage from './ava.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem;
`;

const StyledImage = styled.img`
  background: #3c3c3c;
  border-radius: 100%;
  box-shadow: 0 0 30px 20px #3c3c3c;
  height: 10rem;
  width: 10rem;
`;

const StyledH1 = styled.h1`
  flex: 1 1 100%;
  font-size: 1.5rem;
  font-weight: normal;
  margin: 0;
  padding: 3rem 1rem;
  text-align: center;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

const Ava = () => (
  <StyledHeader>
    <StyledImage src={avaImage} alt="Jacob Voronin" />
    <StyledH1 className="header">
      jacob voronin
      <br />
      software engineer
    </StyledH1>
  </StyledHeader>
);

export default Ava;
