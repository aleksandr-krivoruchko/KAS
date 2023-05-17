import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  CardContent,
  CardTitle,
  CardText,
  CardImage,
} from './Works.styled';

export const Card = ({ id, title, text, img }) => {
  return (
    <StyleCard id={id}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardImage src={img} alt={title} />
      </CardContent>
    </StyleCard>
  );
};
