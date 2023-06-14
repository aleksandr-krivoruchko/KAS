import React from 'react';
import { Section } from '../../GlobalStyle';
import { List, ListItem } from './Works.styled';
import { Card } from './Card';
import { myWorks } from 'data/data';

export const Works = () => {
  const listVariants = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2 },
    }),
    hidden: {
      opacity: 0,
      y: 70,
    },
  };

  return (
    <Section id="works">
      <List>
        {myWorks.map(item => (
          <ListItem
            key={item.id}
            whileHover={{ scale: 1.03 }}
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: true }}
            custom={item.id}
          >
            <Card
              id={item.id}
              title={item.title}
              text={item.text}
              img={item.img}
              href={item.links}
            />
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
