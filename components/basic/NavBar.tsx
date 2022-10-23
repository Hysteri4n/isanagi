/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/Bi';
import { FaUser } from 'react-icons/Fa';
import { MdOutlineAltRoute } from 'react-icons/Md';
import logoType from '../../public/icons/logo-type.png';
import MainMenu from './MainMenu';
import Login from './Login';
import { AnimatePresence } from 'framer-motion';
import Register from './Register';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [createAccountModal, setCreateAccount] = useState(false);

  return (
    <nav className="fixed top-0 z-30 h-[70px] flex shadow-lg items-center w-full px-4 tablet:px-6 py-4 bg-dark2 justify-between gap-4">
      <AnimatePresence>
        {openMenu && <MainMenu closeMainMenu={setOpenMenu} />}
      </AnimatePresence>
      <div className="flex items-center gap-6">
        {/* main menu button */}
        <button
          onClick={() => {
            setOpenMenu(true);
          }}
        >
          <AiOutlineMenu className="text-[1.6rem] text-white3 hover:brightness-125 ease-in-out duration-200 cursor-pointer" />
        </button>

        {/* navbar logo */}
        <a href="/" className="hidden items-center shrink-0 w-32 laptop:flex">
          <Image
            src={logoType}
            alt="logo type"
            className="w-full hover:brightness-125 ease-in-out duration-200"
          />
        </a>
      </div>

      {/* search bar */}
      <div className="w-full items-center flex bg-dark0 rounded-full overflow-hidden tablet:mx-20">
        <div className="flex gap-2 pl-5 pr-4 border-r border-dark4 items-center">
          <button>
            <MdOutlineAltRoute className="text-xl rotate-90 text-white3 hover:brightness-125 ease-in-out duration-200" />
          </button>
        </div>
        <div className="w-full flex">
          <button className="pl-4 pr-3 hover:brightness-125 ease-in-out duration-200">
            <BiSearch className="text-xl text-white3" />
          </button>
          <input
            className="bg-dark0 text-sm py-[10px] pr-5 pl-0 capitalize w-full focus:outline-none"
            type="search"
            placeholder="search tittle, author or publisher..."
          />
        </div>
      </div>

      {/* login and create account */}
      <AnimatePresence>
        {loginModal && (
          <Login
            showLoginModal={setLoginModal}
            showCreateModal={setCreateAccount}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {createAccountModal && (
          <Register
            showLoginModal={setLoginModal}
            showCreateModal={setCreateAccount}
          />
        )}
      </AnimatePresence>

      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            setLoginModal(true);
          }}
          className="flex text-md bg-dark4 h-8 w-8 shrink-0 rounded-full items-center justify-center laptop:hidden"
        >
          <FaUser />
        </button>
        <h3 className="hidden text-sm text-right capitalize whitespace-nowrap items-end flex-col laptop:flex">
          don&apos;t have an account?
          <button
            onClick={() => {
              setCreateAccount(true);
            }}
            className="text-primary text-sm capitalize hover:brightness-125 ease-in-out duration-200"
          >
            register now
          </button>
        </h3>
        <button
          onClick={() => {
            setLoginModal(true);
          }}
          className="btn--pr btn--sm uppercase hidden laptop:block"
        >
          login
        </button>
        <button className="btn--sc btn--sm uppercase hidden laptopHr:block">
          + upgrade
        </button>
      </div>
    </nav>
  );
}
