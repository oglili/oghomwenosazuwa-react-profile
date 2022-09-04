import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';
import logo from '../logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav>
      <div className='nav-center' id='top'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? 'links-container show-container' : 'links-container'
          }`}
        >
          <ul className='links me'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <NavLink
                  to={url}
                  key={id}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {text}
                </NavLink>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
