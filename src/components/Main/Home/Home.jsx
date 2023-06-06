import React from 'react';
import { Section, Flex } from '../../GlobalStyle';
import { Title, Text } from './Home.styled';

export const Home = () => {
  return (
    <Section id="home">
      <Flex direction="column">
        <Title
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ ease: 'easeInOut', delay: 1, duration: 1 }}
        >
          Hello I am Fucking Developer
        </Title>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: 'easeOut', delay: 1, duration: 2 }}
        >
          Example no procure has painful who right teachings can great ever one
          painful. Rejects loves in rejects mistaken a chooses nor the complete
          has him, complete master one expound, because, find itself how, who.
          From enjoy builder great has find consequences happiness, occur,
          builder trivial occur itself mistaken, which praising truth to a some
          but. Consequences but will master which right human trivial is some
          has one painful it praising dislikes annoying obtain trivial.
          Produces, desires nor, chooses advantage those encounter happiness not
          advantage pleasure it truth: there nor, human system, all will.
        </Text>
      </Flex>
    </Section>
  );
};
