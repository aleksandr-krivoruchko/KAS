import React, { useEffect, useState } from 'react';
import { Flex } from '../../GlobalStyle';
import { StyledSection, Title, List, ListItem } from './Works.styled';
import { Card } from './Card';
import { CardTest } from './CardTest';
import { myWorks } from 'data/data';

export const Works = () => {
  //   const [repos, setRepos] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await getRepos();
  //       console.log(data);
  //       setRepos(data);
  //     };
  //     try {
  //       fetchData();
  //     } catch (error) {
  //       console.error();
  //     }
  //   }, []);
  return (
    <StyledSection id="works">
      <Title>Works</Title>
      {/* <CardTest /> */}
      <List>
        {myWorks.map(item => (
          <ListItem key={item.id}>
            <Card
              id={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
              href={item.links?.source}
            />
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};
