import React from 'react';
import { string, node } from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
  color: #bbb;
`;

const Link = ({ url, children }) => (
  <StyledAnchor
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    {children}
  </StyledAnchor>
);

Link.propTypes = {
  url: string.isRequired,
  children: node.isRequired,
};

export default Link;
