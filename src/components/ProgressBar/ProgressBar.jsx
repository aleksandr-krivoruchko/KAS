import React from 'react';
import { Section, Title, Bar, List, Text } from './ProgressBar.styled.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const ProgressBar = ({ skills, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
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
