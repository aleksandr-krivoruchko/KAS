import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  CardContent,
  CardTitle,
  CardText,
  CardLink,
} from './Works.styled';

const cardVariants = {
  in: { y: '100%' },
  an: { y: '50%' },
  transition: { type: 'spring', stiffness: 100, duration: 2 },
};

export const Card = ({ id, title, text, img, href }) => {
  return (
    <StyleCard id={id} initial="in" whileHover="an" img={img}>
      <CardContent
        variants={cardVariants}
        transition={{ type: 'spring', stiffness: 70 }}
      >
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardLink href={href?.source}>git</CardLink>
        <CardLink href={href?.live}>live</CardLink>
      </CardContent>
    </StyleCard>
  );
};
