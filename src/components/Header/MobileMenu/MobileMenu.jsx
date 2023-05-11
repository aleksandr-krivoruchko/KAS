import React, { useState } from 'react';
import { Wrapper } from './Menu.styled';
import { MenuButton } from './MenuButton';
import { Menu } from './Menu';

export const MobileMenu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <Wrapper>
      <MenuButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      {isOpenMenu && (
        <Menu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      )}
    </Wrapper>
  );
};
