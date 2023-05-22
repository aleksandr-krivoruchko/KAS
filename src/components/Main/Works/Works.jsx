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

  const listVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 },
    }),
    hidden: {
      opacity: 0,
      y: -100,
    },
  };

  return (
    <StyledSection
      id="works"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.8, once: true }}
    >
      {/* <Title>Works</Title> */}
      {/* <CardTest /> */}
      <List>
        {myWorks.map(item => (
          <ListItem
            key={item.id}
            whileHover={{ scale: 1.03 }}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            custom={item.id}
          >
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
