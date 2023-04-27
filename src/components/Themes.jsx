import darkImg from '../img/cap.jpg';
import lightImg from '../img/paper.webp';

export const lightTheme = {
  body: `url(${lightImg})`,
  text: 'black',
  hoverText: 'red',
  background: '#363537',
  fontFamily: 'Sigmar',
};
export const darkTheme = {
  body: `url("${darkImg}")`,
  text: '#44ddee',
  hoverText: '#ffb7ce',
  bg: '#0000339',
  fontFamily: 'Anton',
};
