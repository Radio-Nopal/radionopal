import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import SocialNetworksLinks from '../SocialNetworksLinks';
import Player from '../Player/Player';
import Menu from '../Menu/Menu';
import NowPlaying from '../NowPlaying/NowPlaying';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import radionopalLogo from '../../assets/images/logo.svg';
import nopalLogo from '../../assets/images/nopal.svg';
import './Header.scss';

const initialState = {
  scroll: false,
  volume: 0.9,
  showMenu: false
};

const Header = ({ backgroundColor, backgroundImages }) => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setState((prev) => ({ ...prev, scroll: window.scrollY > 150 }));
    });
  }, []);
  return (
    <header
      className={`header top-0 sticky z-10 ${state.scroll ? 'header--collapsed' : ''}`}
      style={{
        backgroundImage: `url(${backgroundImages ? backgroundImages[0] : 'none'})`,
        backgroundColor: backgroundColor ? backgroundColor.css : 'none'
      }}>
      <div className="header__container md:absolute p-8 w-full">
        <div className="grid grid-cols-8 gap-4">
          <div className="header__col gap-2 md:gap-8 flex md:block col-span-6 md:col-span-4 space-between items-start">
            <Link to="/" className="contents">
              <img
                className="header__logo w-1/6 mb-6"
                src={radionopalLogo}
                alt="Radio Nopal logo"
              />
            </Link>
            <img src={nopalLogo} className="header__nopal hidden w-1/5" alt="Radio Nopal logo" />
            <div className="inline-flex">
              <Player />
            </div>
            <NowPlaying />
          </div>
          <div className="col-span-2 md:col-span-4 flex space-between ml-auto">
            <div className="flex items-start mr-4">
              <VolumeSlider />
            </div>
            <div className="hidden md:block w-2/4">
              <input type="text" className="w-100" name="search" placeholder="buscar" />
              <div className="header__links hidden absolute right-8 justify-end pt-4">
                <SocialNetworksLinks />
              </div>
            </div>
            <div className="float-right mt-1 md:ml-4 relative">
              <HamburgerMenu
                className="cursor-pointer z-40"
                isOpen={state.showMenu}
                menuClicked={() => setState((prev) => ({ ...prev, showMenu: !state.showMenu }))}
                width={18}
                height={15}
                strokeWidth={3}
                animationDuration={0.5}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu showMenu={state.showMenu} />
    </header>
  );
};

export default Header;
