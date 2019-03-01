import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-bottom: 2.5rem;
`;

const InfoWrapper = ({ children }) => (
  <StyledSection>
    {children}
  </StyledSection>
);

InfoWrapper.propTypes = {
  children: node.isRequired,
};

export default InfoWrapper;
