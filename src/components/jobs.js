import React from 'react';
import { countTime } from '../count-time';
import InfoWrapper from './info-wrapper';
import Row from './row';
import Label from './label';
import Value from './value';
import Link from './link';

const jobs = [
  {
    title: 'software engineer @ goodleap',
    url: 'https://goodleap.com/',
    time: 'jun 2020 – now',
    from: '2020-06',
    to: 'now',
  },
  {
    title: 'software engineer @ coverhound',
    url: 'https://coverhound.com/',
    time: 'oct 2017 – jun 2020',
    from: '2017-11',
    to: '2020-06',
  },
  {
    title: 'front-end developer @ dermveda',
    url: 'https://www.dermveda.com/',
    time: 'sep 2016 – oct 2017',
    from: '2016-09',
    to: '2017-11',
  },
  {
    title: 'contractor web developer',
    time: 'jan 2014 – sep 2016',
    from: '2014-01',
    to: '2016-09',
  },
];

const Jobs = () => (
  <InfoWrapper>
    {jobs.map(({ title, url, time, from, to }) => (
      <Row key={title}>
        <Label>{time} [{countTime(from, to)}]:</Label>
        <Value>
          {url ? <Link url={url}>{title}</Link> : title}
        </Value>
      </Row>
    ))}
  </InfoWrapper>
);

export default Jobs;
