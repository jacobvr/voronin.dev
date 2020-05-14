import React from 'react';
import { countTime } from '../count-time';
import InfoWrapper from './info-wrapper';
import Row from './row';
import Label from './label';
import Value from './value';
import Link from './link';

const jobs = [
  {
    title: 'software engineer @ coverhound',
    url: 'https://coverhound.com/',
    time: 'oct 2017 – now',
  },
  {
    title: 'front-end developer @ dermveda',
    url: 'https://www.dermveda.com/',
    time: 'sep 2016 – oct 2017',
  },
  {
    title: 'contractor web developer',
    time: 'aug 2014 – sep 2016',
  },
];

const Jobs = () => (
  <InfoWrapper>
    {jobs.map(({ title, url, time }) => (
      <Row key={title}>
        <Label>{time} [{countTime(time.split(' – '))}]:</Label>
        <Value>
          {url ? <Link url={url}>{title}</Link> : title}
        </Value>
      </Row>
    ))}
  </InfoWrapper>
);

export default Jobs;
