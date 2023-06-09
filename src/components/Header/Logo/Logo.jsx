import React from 'react';
import logo from '../../../img/Logo.svg';
import { LogoImg, LogoLink } from './Logo.styled';
import { motion } from 'framer-motion';

export const Logo = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.7 }}
    >
      <LogoLink href="#">
        <LogoImg src={logo} alt="my logo" />
      </LogoLink>
    </motion.div>
  );
};
