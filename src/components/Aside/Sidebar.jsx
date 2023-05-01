import React from 'react';
import { Aside } from './Sidebar.styled';
import { Photo } from '../Photo/Photo';
import { ProgressBar } from '../ProgressBar/ProgressBar';
import { Socialbar } from '../Socialbar/Socialbar';
const hardSkills = [
  {
    skill: 'HTML',
    level: 80,
    color: 'rgb(187, 17, 51)',
    trailColor: 'rgba(187, 17, 51, 0.2)',
  },
  {
    skill: 'CSS',
    level: 90,
    color: 'rgb(17, 80, 175)',
    trailColor: 'rgba(17, 80, 175, 0.2)',
  },
  {
    skill: 'JS',
    level: 60,
    color: 'rgb(255, 153, 68)',
    trailColor: 'rgba(255, 153, 68, 0.2)',
  },
  {
    skill: 'React',
    level: 50,
    color: 'rgb(148, 33, 147)',
    trailColor: 'rgba(148, 33, 147, 0.2)',
  },
  {
    skill: 'Node',
    level: 30,
    color: 'rgb(156, 82, 242)',
    trailColor: 'rgba(156, 82, 242, 0.2)',
  },
  {
    skill: 'Redux',
    level: 40,
    color: 'rgb(132, 188, 153)',
    trailColor: 'rgba(132, 188, 153, 0.2)',
  },
];
const softSkills = [
  {
    skill: 'HTML',
    level: 80,
    color: 'rgb(187, 17, 51)',
    trailColor: 'rgba(187, 17, 51, 0.2)',
  },
  {
    skill: 'CSS',
    level: 90,
    color: 'rgb(17, 80, 175)',
    trailColor: 'rgba(17, 80, 175, 0.2)',
  },
  {
    skill: 'JS',
    level: 60,
    color: 'rgb(255, 153, 68)',
    trailColor: 'rgba(255, 153, 68, 0.2)',
  },
  {
    skill: 'React',
    level: 50,
    color: 'rgb(148, 33, 147)',
    trailColor: 'rgba(148, 33, 147, 0.2)',
  },
  {
    skill: 'Node',
    level: 30,
    color: 'rgb(156, 82, 242)',
    trailColor: 'rgba(156, 82, 242, 0.2)',
  },
  {
    skill: 'Redux',
    level: 40,
    color: 'rgb(132, 188, 153)',
    trailColor: 'rgba(132, 188, 153, 0.2)',
  },
];

export const Sidebar = () => {
  return (
    <Aside>
      <Photo />
      <Socialbar />
      <ProgressBar skills={hardSkills} title="Hard Skills &#128170;" />
      <ProgressBar skills={softSkills} title="Soft Skills 🤝" />
    </Aside>
  );
};
