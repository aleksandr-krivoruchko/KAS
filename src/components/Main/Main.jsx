import React from 'react';
import { Main } from './Main.styled';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Works } from './Works/Works';
import { Contacts } from './Contacts/Contacts';

export const MainSection = () => {
  return (
    <Main>
      <Home />
      <About />
      <Works />
      <Contacts />
    </Main>
  );
};
