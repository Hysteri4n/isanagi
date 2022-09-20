/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-key */
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/Bi';
import { MdOutlineAltRoute } from 'react-icons/Md';
import logoType from '../../public/icons/logo-type.png';
import MainMenu from './MainMenu';
import PersonalFeature from './PersonalFeature';
import LoginLogout from './LoginButton';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginChanges, setLoginChanges] = useState(false);

  return (
    <nav className="flex shadow-ps items-center fixed top-0 w-full px-6 py-4 bg-dark2 justify-between item-stretch gap-4">
      {openMenu && <MainMenu closeMainMenu={setOpenMenu} />}
      <div className="flex items-center gap-6">
        {/* main menu button */}
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <AiOutlineMenu className="text-xl text-white3 hover:brightness-125 ease-in-out duration-200 cursor-pointer" />
        </button>

        {/* navbar logo */}

        <a href="/" className="hidden items-center shrink-0 w-44 laptop:flex">
          <Image
            src={logoType}
            alt="logo type"
            className="w-full hover:brightness-125 ease-in-out duration-200"
          />
        </a>
      </div>

      {/* search bar */}
      <div className=" w-full items-center flex bg-dark0 rounded-full tablet:mx-20">
        <div className="flex gap-2 px-5 border-r-2 border-dark3 items-center">
          <MdOutlineAltRoute className="text-lg rotate-90 cursor-pointer text-white3 hover:brightness-125 ease-in-out duration-200" />
        </div>
        <div className="w-full relative">
          <BiSearch className="absolute left-5 top-3 text-lg text-white3" />
          <input
            className="bg-dark0 py-3 pr-5 pl-16 capitalize w-full focus:outline-none rounded-full"
            type="search"
            placeholder="search tittle, author or publisher..."
          />
        </div>
      </div>

      {loginChanges && <PersonalFeature />}
      {!loginChanges && <LoginLogout showPersonalFeature={setLoginChanges} />}

      {/* account upgrade */}
      <button className="btn--sc btn--med uppercase hidden laptop:block">
        + upgrade
      </button>
    </nav>
  );
}

export default NavBar;
