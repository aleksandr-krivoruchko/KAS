import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialGithub,
} from 'react-icons/sl';

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
