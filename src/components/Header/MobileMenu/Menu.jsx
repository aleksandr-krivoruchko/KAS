import React from 'react';
import { Navbar, List, ListItem, Link, BlurBox } from './Menu.styled';
import { motion } from 'framer-motion';
import { data } from 'data';

export const Menu = ({ isOpenMenu, setIsOpenMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Navbar>
        {/* <BlurBox /> */}
        <List>
          {data.navItems.map(item => (
            <ListItem key={item.href} onClick={() => setIsOpenMenu(false)}>
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
