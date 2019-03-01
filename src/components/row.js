import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0.5rem 0;

  @media (min-width: 850px) {
    flex-direction: row;
  }
`;

const Row = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
);

Row.propTypes = {
  children: node.isRequired,
};

export default Row;
