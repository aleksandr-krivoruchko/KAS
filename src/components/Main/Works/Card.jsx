import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  CardContent,
  CardTitle,
  CardText,
  ImageThumb,
  CardImage,
  CardLink,
} from './Works.styled';

export const Card = ({ id, title, text, img, href }) => {
  return (
    <StyleCard id={id}>
      <ImageThumb>
        <CardImage src={img} alt={title} />
      </ImageThumb>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <CardLink href="#">git</CardLink>
        <CardLink href="#">live</CardLink>
      </CardContent>
    </StyleCard>
  );
};
