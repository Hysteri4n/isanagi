/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-key */
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/Bi';
import { MdOutlineAltRoute } from 'react-icons/Md';
import logoType from '../../public/icons/logo-type.png';
import MainMenu from './MainMenu';
import PersonalFeature from './PersonalFeature';
import LoginButton from './LoginButton';
import Login from './Login';
import CreateAccount from './CreateAccount';

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [createAccountModal, setCreateAccount] = useState(false);

  return (
    <nav className="flex shadow-ps items-center fixed top-0 w-full px-6 py-5 bg-dark2 justify-between gap-4">
      {openMenu && <MainMenu closeMainMenu={setOpenMenu} />}
      <div className="flex items-center gap-6">
        {/* main menu button */}
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <AiOutlineMenu className="text-xxl text-white3 hover:brightness-125 ease-in-out duration-200 cursor-pointer" />
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
      <div className=" w-full items-center flex bg-dark0 rounded-full overflow-hidden tablet:mx-20">
        <div className="flex gap-2 px-5 border-r-2 border-dark3 items-center">
          <button>
            <MdOutlineAltRoute className="text-lg rotate-90 text-white3 hover:brightness-125 ease-in-out duration-200" />
          </button>
        </div>
        <div className="w-full flex">
          <button className="px-5 hover:brightness-125 ease-in-out duration-200">
            <BiSearch className="text-lg text-white3" />
          </button>
          <input
            className="bg-dark0 text-sm py-3 pr-5 pl-0 capitalize w-full focus:outline-none"
            type="search"
            placeholder="search tittle, author or publisher..."
          />
        </div>
      </div>

      <LoginButton
        showLoginModal={setLoginModal}
        showCreateModal={setCreateAccount}
      />

      {loginModal && (
        <Login
          showLoginModal={setLoginModal}
          showCreateModal={setCreateAccount}
        />
      )}
      {createAccountModal && (
        <CreateAccount
          showLoginModal={setLoginModal}
          showCreateModal={setCreateAccount}
        />
      )}

      {/* account upgrade */}
      <button className="btn--sc btn--sm uppercase hidden laptopHr:block">
        + upgrade
      </button>
    </nav>
  );
}

export default NavBar;
