import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`  
  flex: 1 0 100%;
  box-sizing: border-box;

  @media (min-width: 850px) {
    flex: 1 0 50%;
    padding-left: 0.5rem;
  }
`;

const Value = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
);

Value.propTypes = {
  children: node,
};

Value.defaultProps = {
  children: null,
};

export default Value;
