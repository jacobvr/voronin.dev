import React from 'react';
import InfoWrapper from './info-wrapper';
import Row from './row';
import Label from './label';
import Value from './value';
import Link from './link';

const info = [
  {
    label: 'email',
    url: 'mailto:jacob.voronin@gmail.com',
    value: 'jacob.voronin@gmail.com',
  },
  {
    label: 'github',
    url: 'https://github.com/jacobvr',
    value: 'jacobvr',
  },
  {
    label: 'linkedin',
    url: 'https://www.linkedin.com/in/jacobvoronin',
    value: 'jacobvoronin',
  },
];

const Contact = () => (
  <InfoWrapper>
    {info.map(({ label, url, value }) => (
      <Row key={value}>
        <Label>{label}:</Label>
        <Value>
          <Link url={url}>{value}</Link>
        </Value>
      </Row>
    ))}
  </InfoWrapper>
);

export default Contact;
