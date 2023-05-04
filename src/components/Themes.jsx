import darkImg from '../img/nord.jpg';
import lightImg from '../img/paper.webp';

export const lightTheme = {
  body: `url(${lightImg})`,
  text: '#000',
  hoverText: 'tomato',
  fontFamily: 'Sigmar',
  sidebar: {
    bg: 'transparent',
    titleColor: '#000',
    subTitleColor: 'tomato',
    textShadow: '2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c',
    avatarBorderColor: '#1150af',
    social: {
      color: '#1150af',
      hoverColor: '#f5f5f5',
      bg: '#1150af',
      shadow: '#1150af',
    },
  },
  main: {
    textColor: '#000',
  },
};
export const darkTheme = {
  body: `url("${darkImg}")`,
  text: '#44ddee',
  hoverText: '#fff',
  //   fontFamily: 'Anton',
  fontFamily: 'Sigmar',

  sidebar: {
    bg: '#232323',
    titleColor: '#fff',
    subTitleColor: '#44ddee',
    textShadow: '0 0 5px #fff',
    avatarBorderColor: '#fff',
    social: {
      color: '#fff',
      hoverColor: '#000',
      bg: '#fff',
      shadow: '#fff',
    },
  },
  main: {
    textColor: '#f5f5f5',
  },
};
