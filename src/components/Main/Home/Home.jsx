import React from 'react';
import { Section } from '../../GlobalStyle';
import { Wrapper, Title, Text } from './Home.styled';
import Button from 'components/Button';
import { BiSolidDownload } from 'react-icons/bi';
import { PiReadCvLogoBold } from 'react-icons/pi';

export const Home = () => {
  return (
    <Section id="home">
      <Wrapper>
        <Title
          initial={{ y: '-500%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          hello <br /> everyone incoming
        </Title>
        <Text
          initial={{ opacity: 0, x: '150%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: 'easeOut', duration: 2 }}
        >
          I am an adequate beginner Front-End developer, looking for a full-time
          entry level in a company to use and improve my skills in HTML, CSS,
          JS, React and become part of a friendly and professional team
        </Text>

        <a href="public/CV_Krivoruchko.pdf" download="CV_Krivoruchko.pdf">
          <Button type="primary" text="CV" icon={<BiSolidDownload />} />
        </a>
        <a href="#about">
          <Button
            type="secondary"
            text="Read more"
            icon={<PiReadCvLogoBold />}
          />
        </a>
      </Wrapper>
    </Section>
  );
};
