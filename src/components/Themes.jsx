import darkImg from '../img/cap.jpg';
import lightImg from '../img/paper.webp';

export const lightTheme = {
  body: `url(${lightImg})`,
  text: 'black',
  hoverText: 'red',
  fontFamily: 'Sigmar',
  sidebar: {
    bg: 'transparent',
    titleColor: '#000000',
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
  },
};
