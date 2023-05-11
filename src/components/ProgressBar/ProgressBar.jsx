import React from 'react';
import { Section, Title, Bar, List, Text } from './ProgressBar.styled.js';
import { Skill } from './Skill.jsx';

export const ProgressBar = ({ skills, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {skills.map(({ level, skill, color, trailColor }, i) => (
          <Bar key={color}>
            <Skill level={level} color={color} trailColor={trailColor} />
            <Text color={color}>{skill}</Text>
          </Bar>
        ))}
      </List>
    </Section>
  );
};
