import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  CardContent,
  CardTitle,
  CardText,
  ImageThumb,
  CardImage,
  LinksWrapper,
  CardLink,
} from './Works.styled';

export const Card = ({ id, title, text, img, href }) => {
  return (
    <StyleCard id={id}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <ImageThumb>
          <CardImage src={img} alt={title} />
        </ImageThumb>
        <LinksWrapper>
          <CardLink />
        </LinksWrapper>
        {/* <CardText>{text}</CardText> */}
      </CardContent>
    </StyleCard>
  );
};
