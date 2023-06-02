export default function activeLink(e) {
  const activeClass = 'active';
  const pressedLink = e.target.closest('a');
  const links = e.currentTarget.querySelectorAll('a');

  links.forEach(l => {
    if (l.classList.contains(activeClass)) {
      l.classList.remove(activeClass);
      pressedLink.classList.add(activeClass);
    }
    pressedLink.classList.add(activeClass);
  });
}
