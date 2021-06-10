import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Marquee from 'react-smooth-marquee'; //import Marquee from 'react-double-marquee';
import Player from '../Player/Player';
import Menu from '../Menu/Menu';
import LastTweet from '../LastTweet/LastTweet';
import NowPlaying from '../NowPlaying/NowPlaying';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
import SearchBar from '../SearchBar/SearchBar';
import { store } from '../../store.js';
import radionopalLogo from '../../assets/images/logo.svg';
import './Header.scss';

const initialState = {
  scroll: false,
  volume: 0.9,
  showMenu: false
};

const Header = () => {
  const { state: storeState } = useContext(store);
  const { playing, isOnline, nowPlaying } = storeState;
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(document.querySelector('.header'));
  }, []);

  return (
    <header className={'header -top-1 sticky z-10'}>
      <div className="header__container md:absolute p-3 w-full">
        <div className="grid grid-cols-8 gap-4 h-5/6">
          <div className="header__col gap-2 md:gap-8 flex md:block col-span-6 md:col-span-3 justify-between items-start h-0">
            <Link to="/" className="contents">
              <img className="header__logo mb-6" src={radionopalLogo} alt="Radio Nopal logo" />
            </Link>
            <div className="header__player-container">
              <div className="inline-flex">
                <Player />
              </div>
              <div className="header__now-playing leading-4">
                {playing && nowPlaying && <span className="header__live-signal ml-1"></span>}
                {isOnline ? nowPlaying && playing && 'Estás escuchando: ' : 'Offline'}
                <br />
                <span>
                  <NowPlaying />
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-5 flex space-between ml-auto h-0">
            <div className="flex items-start mr-4">
              <VolumeSlider />
            </div>
            <div className="hidden md:block w-2/4">
              <SearchBar fullWidth />
              <div className="header__links hidden absolute pt-1 right-8 justify-end"></div>
            </div>
            <div className="float-right mt-1 md:ml-4 relative">
              <HamburgerMenu
                className="header__hamburger-menu cursor-pointer z-40"
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
        <Marquee className="header__marquee leading-7">
          <LastTweet />
        </Marquee>
      </div>
      <Menu showMenu={state.showMenu} />
    </header>
  );
};

export default Header;
