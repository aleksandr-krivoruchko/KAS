import React from 'react';
import { Flex } from '../../GlobalStyle';
import { StyledSection, Title, List, ListItem } from './Works.styled';
import { Card } from './Card';
import { myWorks } from 'data/data';

export const Works = () => {
  return (
    <StyledSection id="works">
      {/* <Title>Works</Title> */}
      <List>
        {myWorks.map(item => (
          <ListItem key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
            />
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};
