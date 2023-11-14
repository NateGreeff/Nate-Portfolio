import './Header.css';
import NavLink from '../Nav/NavLink';

import Nav from '../Nav/Nav';

export default function Header() {

  const links = [
    {
      name: 'About Me',
      path: '/',
    },
    {
      name: 'Portfolio',
      path: '/Portfolio',
    },
    {
      name: 'Contact',
      path: '/Contact',
    },
    {
      name: 'Resume',
      path: '/Resume',
    },
  ];

  return (
    <header>
      <h2>Nate&apos;s Portfolio</h2>
      <Nav links={links.map((link, index) => {
        return <NavLink key={index} name={link.name} path={link.path}/>
      })}/>
    </header>
  );
}
