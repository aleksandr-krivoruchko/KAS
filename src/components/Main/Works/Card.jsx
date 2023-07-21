import React from 'react';
import { Flex } from '../../GlobalStyle';
import {
  StyleCard,
  CardContent,
  CardTitle,
  CardText,
  Links,
  CardLink,
} from './Works.styled';

const cardVariants = {
  in: { y: '150%' },
  an: { y: '40%' },
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
        <Links>
          <CardLink
            href={href?.source}
            target="blank"
            rel="noopener noreferrer"
          >
            Source
          </CardLink>
          <CardLink href={href?.live} target="blank" rel="noopener noreferrer">
            LivePage
          </CardLink>
        </Links>
      </CardContent>
    </StyleCard>
  );
};
