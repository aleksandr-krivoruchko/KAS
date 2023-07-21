import React from 'react';
import { Section, Flex } from '../../GlobalStyle';
import { Wrapper, Title, Subtitle, Text } from './Home.styled';
import { ProgressBar } from '../../ProgressBar/ProgressBar.jsx';
import { hardSkills, softSkills } from '../../../data/data.js';

export const Home = () => {
  return (
    <Section id="home">
      <Wrapper>
        <Title
          initial={{ y: '-500%' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 200, duration: 1 }}
        >
          hello <br /> everyone incoming
        </Title>
        <Text
          initial={{ opacity: 0, x: '300%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', delay: 0, duration: 1 }}
        >
          I am an adequate beginner Front-End developer, looking for a full-time
          entry level in a company to use and improve my skills in HTML, CSS,
          JS, React and become part of a friendly and professional team
        </Text>
        <ProgressBar title="Hard skills" skills={hardSkills} />
        <ProgressBar title="Soft skills" skills={softSkills} />
      </Wrapper>
    </Section>
  );
};
