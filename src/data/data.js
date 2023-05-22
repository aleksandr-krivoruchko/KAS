import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialGithub,
} from 'react-icons/sl';

import wallet from '../img/reposImages/wallet.png';
import film from '../img/reposImages/filmoteka.png';
import threeD from '../img/reposImages/3d.png';
import phonebook from '../img/reposImages/phonebook.png';
import profile from '../img/reposImages/profile.png';
import note from '../img/reposImages/note.png';
import web from '../img/reposImages/web.png';
import barber from '../img/reposImages/barber.png';
import icecream from '../img/reposImages/icecream.png';
import todo from '../img/reposImages/todo.png';
import movie from '../img/reposImages/movie.png';
import greet from '../img/reposImages/greet.png';

export const navItems = [
  { value: 'Home', href: '#home', active: false },
  { value: 'About', href: '#about', active: false },
  { value: 'Works', href: '#works', active: false },
  { value: 'Contacts', href: '#contacts', active: false },
];

export const socialItems = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100024841694108',
    icon: <SlSocialFacebook size={30} />,
  },
  {
    title: 'GitHub',
    href: 'https://github.com/aleksandr-krivoruchko',
    icon: <SlSocialGithub size={30} />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krivoruchko-aleksandr/',
    icon: <SlSocialLinkedin size={30} />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: <SlSocialInstagram size={30} />,
  },
];

export const hardSkills = [
  {
    skill: 'HTML',
    level: 80,
    color: 'rgb(187, 17, 51)',
    trailColor: 'rgba(187, 17, 51, 0.2)',
  },
  {
    skill: 'CSS',
    level: 90,
    color: 'rgb(17, 80, 175)',
    trailColor: 'rgba(17, 80, 175, 0.2)',
  },
  {
    skill: 'JS',
    level: 60,
    color: 'rgb(255, 153, 68)',
    trailColor: 'rgba(255, 153, 68, 0.2)',
  },
  {
    skill: 'React',
    level: 50,
    color: 'rgb(148, 33, 147)',
    trailColor: 'rgba(148, 33, 147, 0.2)',
  },
  {
    skill: 'Node',
    level: 30,
    color: 'rgb(156, 82, 242)',
    trailColor: 'rgba(156, 82, 242, 0.2)',
  },
  {
    skill: 'Redux',
    level: 40,
    color: 'rgb(132, 188, 153)',
    trailColor: 'rgba(132, 188, 153, 0.2)',
  },
];
export const softSkills = [
  {
    skill: 'Time management',
    level: 80,
    color: 'rgb(187, 17, 51)',
    trailColor: 'rgba(187, 17, 51, 0.2)',
  },
  {
    skill: 'Communication',
    level: 50,
    color: 'rgb(17, 80, 175)',
    trailColor: 'rgba(17, 80, 175, 0.2)',
  },
  {
    skill: 'Adaptability',
    level: 65,
    color: 'rgb(255, 153, 68)',
    trailColor: 'rgba(255, 153, 68, 0.2)',
  },
  {
    skill: 'Problem-solving',
    level: 70,
    color: 'rgb(148, 33, 147)',
    trailColor: 'rgba(148, 33, 147, 0.2)',
  },
  {
    skill: 'Teamwork',
    level: 80,
    color: 'rgb(156, 82, 242)',
    trailColor: 'rgba(156, 82, 242, 0.2)',
  },
  {
    skill: 'Attention to details',
    level: 90,
    color: 'rgb(132, 188, 153)',
    trailColor: 'rgba(132, 188, 153, 0.2)',
  },
];
export const myWorks = [
  {
    id: 1,
    title: 'Wallet',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: wallet,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/WALLET',
      live: 'https://team-project-wallet.netlify.app/',
    },
  },
  {
    id: 2,
    title: 'Filmoteka',
    text: 'Example no procure has painful who right teachings can great ever one painful. ',
    img: film,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/FILMOTEKA',
      live: 'https://kostusta.github.io/filmoteka-team-project-js/',
    },
  },
  {
    id: 3,
    title: '3D website',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: threeD,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/Portfolio',
      live: 'https://3d-portfolio-site.netlify.app/',
    },
  },
  {
    id: 4,
    title: 'Phonebook',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: phonebook,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/PHONE-BOOK',
      live: 'https://aleksandr-krivoruchko.github.io/PHONE-BOOK/',
    },
  },
  {
    id: 5,
    title: 'Friendly profile',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: profile,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/friendly-profile',
      live: 'https://kak-horosho-tu-menya-znaesh.netlify.app/',
    },
  },
  {
    id: 6,
    title: 'Notebook',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: note,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/Notebook',
      live: 'https://my-notes-vite-app.netlify.app/',
    },
  },
  {
    id: 7,
    title: 'Webstudio',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: web,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/WEB-STUDIO',
      live: 'https://aleksandr-krivoruchko.github.io/WEB-STUDIO',
    },
  },
  {
    id: 8,
    title: 'Barber Shop',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: barber,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/BARBER-SHOP',
      live: 'https://aleksandr-krivoruchko.github.io/BARBER-SHOP',
    },
  },
  {
    id: 9,
    title: 'Ice Cream Shop',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: icecream,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/ICE-CREAM',
      live: 'https://ardeewest.github.io/ice-cream-team-project/',
    },
  },
  {
    id: 10,
    title: 'Todo List',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: todo,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/TODOLIST',
      live: 'https://aleksandr-krivoruchko.github.io/TODOLIST/index.html',
    },
  },
  {
    id: 11,
    title: 'Movie Search',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: movie,
    links: {
      source:
        'https://github.com/aleksandr-krivoruchko/goit-react-hw-05-movies',
      live: 'https://aleksandr-krivoruchko.github.io/goit-react-hw-05-movies/',
    },
  },
  {
    id: 12,
    title: 'Greeting',
    text: 'Example no procure has painful who right teachings can great ever one painful. Rejects loves in rejects mistaken a chooses nor the complete has him, complete master one expound, because, find itself how',
    img: greet,
    links: {
      source: 'https://github.com/aleksandr-krivoruchko/Greeting',
      live: 'https://aleksandr-krivoruchko.github.io/Greeting/',
    },
  },
];
