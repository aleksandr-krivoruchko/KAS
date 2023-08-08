import darkImg from 'img/north.jpg';
import lightImg from 'img/paper.webp';

export const theme = {
  darkTheme: {
    media: {
      phone: '(min-width: 425px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1440px)',
    },

    body: `url("${darkImg}")`,
    text: '#44ddee',
    hoverText: '#fff',
    fontFamily: 'Sigmar',

    sidebar: {
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
    hero: {
      titleColor: 'rgb(57 63 79)',
    },
    main: {
      textColor: '#f5f5f5',
    },
  },
  lightTheme: {
    media: {
      phone: '(min-width: 425px)',
      tablet: '(min-width: 768px)',
      desktop: '(min-width: 1200px)',
    },

    body: `url(${lightImg})`,
    text: '#000',
    hoverText: 'tomato',
    fontFamily: 'Sigmar',
    sidebar: {
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
    hero: {
      titleColor: 'rgb(210 208 215)',
    },

    main: {
      textColor: '#000',
    },
  },
};
