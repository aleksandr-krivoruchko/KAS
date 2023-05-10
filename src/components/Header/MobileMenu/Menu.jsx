import React from 'react';
import { Navbar, List, ListItem, Link, BlurBox } from './Menu.styled';
import { motion } from 'framer-motion';

export const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  const items = [
    { value: 'Home', href: '#home' },
    { value: 'About', href: '#about' },
    { value: 'Works', href: '#works' },
    { value: 'Contacts', href: '#contacts' },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Navbar>
        {/* <BlurBox /> */}
        <List>
          {items.map(item => (
            <ListItem onClick={() => setIsOpenMenu(false)}>
              <Link href={item.href} data-hover={item.value}>
                {item.value}
              </Link>
            </ListItem>
          ))}
        </List>
      </Navbar>
    </motion.div>
  );
};
