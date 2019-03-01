import React from 'react';
import InfoWrapper from './info-wrapper';
import Row from './row';
import Label from './label';
import Value from './value';
import Link from './link';

const projects = [
  {
    title: 'camp paradise',
    url: 'http://www.camp-paradise.org/',
  },
  {
    title: 'housemaid cleaning',
    url: 'http://www.housemaidcleaning.com/',
  },
  {
    title: 'auto repair',
    url: 'http://rosevilletransmissionsandautorepair.com/',
  },
  {
    title: 'ab-tile',
    url: 'http://ab-tile.com/',
  },
  {
    title: 'iosif nichita [ru]',
    url: 'https://iosifnichita.com/',
  },
  {
    title: 'propovednik [ru]',
    url: 'https://propovednik.com/',
  },
  {
    title: 'music for christ [ru]',
    url: 'http://musicforchrist.info/',
  },
];

const Projects = () => (
  <InfoWrapper>
    <Row>
      <Label>side-projects:</Label>
      <Value />
    </Row>
    {projects.map(({ title, url }) => (
      <Row key={title}>
        <Label />
        <Value>
          <Link url={url}>{title}</Link>
        </Value>
      </Row>
    ))}
  </InfoWrapper>
);

export default Projects;
