import darkImg from '../img/cap.jpg';
import lightImg from '../img/paper.webp';

export const lightTheme = {
  body: `url(${lightImg})`,
  text: 'black',
  hoverText: 'tomato',
  fontFamily: 'Sigmar',
  sidebar: {
    bg: 'transparent',
    titleColor: '#000000',
    subTitleColor: 'tomato',
    textShadow: '2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c',
    avatarBorderColor: '#000',
  },
  social: {
    color: '#1150af',
    hoverColor: '#fff',
    bg: '#1150af',
    shadow: '#1150af',
  },
};
export const darkTheme = {
  body: `url("${darkImg}")`,
  text: '#44ddee',
  hoverText: '#ffb7ce',
  fontFamily: 'Anton',
  sidebar: {
    bg: '#232323',
    titleColor: '#ffffff',
    subTitleColor: '#44ddee',
    textShadow: '0 0 5px #fff',
    avatarBorderColor: '#fff',
  },
  social: {
    color: '#fff',
    hoverColor: '#000',
    bg: '#fff',
    shadow: '#fff',
  },
};
