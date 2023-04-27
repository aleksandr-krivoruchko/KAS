import React from 'react';
import { Section, Title, Bar, List, Text } from './ProgressBar.styled.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = () => {
  const skills = [
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
  return (
    <Section>
      <Title>Hard Skills</Title>
      <List>
        {skills.map(({ level, skill, color, trailColor }, i) => (
          <Bar>
            <CircularProgressbar
              value={level}
              text={`${level}%`}
              styles={buildStyles({
                rotation: 1,
                strokeLinecap: 'round',
                textSize: '27px',
                pathTransitionDuration: 0.5,
                pathColor: `${color}`,
                textColor: `${color}`,
                trailColor: `${trailColor}`,
              })}
            />
            <Text color={color}>{skill}</Text>
          </Bar>
        ))}
      </List>
    </Section>
  );
};
