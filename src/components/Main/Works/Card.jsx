import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  Description,
  CardTitle,
  CardText,
  CardImage,
} from './Works.styled';

export const Card = ({ id, title, text, img }) => {
  return (
    <StyleCard
      initial={{ y: '-100%', rotate: 180 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ ease: 'easeInOut', duration: 1 }}
      id={id}
    >
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <CardImage src={img} alt={title} />
    </StyleCard>
  );
};

/*  VanillaTilt.init(document.querySelectorAll('.box'), {
    max: 25,
    speed: 400,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
    perspective: 500,
    transition: true,
  });
 */
