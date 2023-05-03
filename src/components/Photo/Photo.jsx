import React from 'react';
import { Section, Wrapper, Image } from './Photo.styled';

export const Photo = () => {
  return (
    <Section>
      <Wrapper>
        <Image
          src={
            'https://img.wallscloud.net/uploads/thumb/2269332856/harley-quinn-1-58930-1024x576-MM-80.webp'
          }
          alt="My face"
        />
      </Wrapper>
    </Section>
  );
};
