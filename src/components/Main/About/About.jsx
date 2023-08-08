import React from 'react';
import { Section, Flex } from '../../GlobalStyle';
import { Title, Text } from './About.styled';

export const About = () => {
  return (
    <Section id="about">
      <Flex>
        <Title
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0 }}
        >
          About
        </Title>
        <Text>
          Denouncing mistaken — itself — occur annoying explorer how a procure
          trivial with not extremely pursue find. Teachings not happiness fault
          itself: pain are give rationally right painful occasionally do, nor.
          Obtain this, which no builder procure system those builder complete a
          rationally ever chooses must expound or great explain extremely, or.
          Advantage — find the trivial explorer no occur painful toil a chooses
          trivial mistaken. But, which the know trivial desires account which
          desires with dislikes a mistaken this consequences born. Laborious
          occasionally right in pursue example account ever pursue us pursue,
          resultant. To rejects desires nor toil, with truth one explorer master
          complete with, no him. Know there expound system do builder but some
          fault know pleasure. Builder occasionally how — obtain actual
          consequences give pursue dislikes undertakes, happiness a laborious in
          account denouncing from, him except can denouncing. Actual truth
          praising fault must who desires resultant pleasure, painful mistaken
          occasionally explain any exercise.
        </Text>
      </Flex>
    </Section>
  );
};
