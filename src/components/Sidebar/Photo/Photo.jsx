import React from 'react';
import myPhoto from '../../../img/me.png';
import myPhoto2 from '../../../img/me-too.png';
import { Section, Wrapper, Image } from './Photo.styled';

export const Photo = () => {
  return (
    <Section>
      <Wrapper>
        <Image src={myPhoto2} alt="My face" />
      </Wrapper>
    </Section>
  );
};
