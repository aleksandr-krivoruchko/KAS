import React from 'react';
import { Section, Flex } from '../../GlobalStyle';
import { Title, Text } from './Contacts.styled';

export const Contacts = () => {
  return (
    <Section id="contacts">
      <Flex direction="column">
        <Title
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0 }}
        >
          Contacts
        </Title>
        <Text>
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
        <Text>
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
        <Text>
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
