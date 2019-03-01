import React from 'react';
import InfoWrapper from './info-wrapper';
import Row from './row';
import Label from './label';
import Value from './value';
import Link from './link';

const jobs = [
  {
    title: 'software engineer @ coverhound',
    url: 'https://coverhound.com/',
    time: 'oct 2017 – now [2 yr 3 mos]',
  },
  {
    title: 'front-end developer @ dermveda',
    url: 'https://www.dermveda.com/',
    time: 'sep 2016 – oct 2017 [1 yr 2 mos]',
  },
  {
    title: 'contractor web developer',
    time: 'aug 2014 – sep 2016 [2 yrs 2 mos]',
  },
];

const Jobs = () => (
  <InfoWrapper>
    {jobs.map(({ title, url, time }) => (
      <Row key={title}>
        <Label>{time}:</Label>
        <Value>
          {url ? <Link url={url}>{title}</Link> : title}
        </Value>
      </Row>
    ))}
  </InfoWrapper>
);

export default Jobs;
