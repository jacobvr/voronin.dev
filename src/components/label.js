import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`  
  flex: 1 0 100%;
  box-sizing: border-box;

  @media (min-width: 850px) {
    flex: 1 0 50%;
    text-align: right;
    padding-right: 0.5rem;
  }
`;

const Label = ({ children }) => (
  <StyledDiv>
    {children}
  </StyledDiv>
);

Label.propTypes = {
  children: node,
};

Label.defaultProps = {
  children: null,
};

export default Label;
