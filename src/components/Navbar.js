import React from 'react';
import logo from './assets/images/logo.svg';
import menuicon from './assets/images/icon-menu.svg';
import closeicon from './assets/images/icon-menu-close.svg';
import { Closeicon, Logo, Menuicon, Menulist, Navbarsection, Overlayscreen } from './styled/Newshp.styled';

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <Navbarsection>
      <Logo src={logo} alt='logo' />
      <ul>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
      <Menuicon src={menuicon} alt='menuicon' onClick={()=>setToggleMenu(true)} />
      {toggleMenu && (
        <>
          <Overlayscreen/>
          <Menulist>
            <Closeicon src={closeicon} alt='closeicon' onClick={()=>setToggleMenu(false)} />
              <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
              </ul>
          </Menulist>
        </>
      )}
    </Navbarsection>
  )
}
