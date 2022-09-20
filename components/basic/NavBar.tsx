/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/Bi';
import { FaStore } from 'react-icons/Fa';
import { FaUser } from 'react-icons/Fa';
import { FaBookOpen } from 'react-icons/Fa';
import { ImBooks } from 'react-icons/Im';
import { FaBell } from 'react-icons/Fa';
import { HiMail } from 'react-icons/Hi';
import { FaShoppingCart } from 'react-icons/Fa';
import { MdOutlineAltRoute } from 'react-icons/Md';
import logoType from '../../public/icons/logo-type.png';
import userPortrait from '../../public/images/portrait.jpeg';
import menuLogo from '../../public/icons/isanagi.svg';

function NavBar() {
  return (
    <nav className="flex items-center fixed top-0 w-full px-6 py-4 bg-dark2 justify-between item-stretch gap-6 tablet:gap-20">
      <div className="flex items-center gap-6">
        {/* main menu button */}
        <button>
          <AiOutlineMenu className="text-xl text-white3 hover:brightness-125 ease-in-out duration-200 cursor-pointer" />
        </button>

        {/* main menu filter */}
        <div
          id="mainMenuFilter"
          className="hidden bg-dark0 bg-opacity-60 z-10 fixed top-0 left-0 w-full h-full"
        ></div>

        {/* main menu */}
        <div className="flex fixed flex-col left-0 top-0 w-4/5 h-screen bg-dark3 z-20 tablet:w-96">
          <div className="px-10 py-6 w-4/5">
            <Image src={menuLogo} alt="menu logo" />
          </div>
          <div className="flex flex-col">
            {[
              ['FaStore ', 'store', '/'],
              ['<FaStore />', 'publish', '/publish'],
              ['<FaStore />', 'leaderboards', '/leaderboards'],
              ['<FaStore />', 'community', '/community'],
            ].map(([icon, title, url]) => (
              <a
                href={url}
                className="px-10 py-4 hover:bg-primary capitalize ease-in-out duration-200"
              >
                {icon}
                {title}
              </a>
            ))}
          </div>
        </div>

        {/* navbar logo */}
        <Link href="/">
          <a className="hidden items-center shrink-0 w-44 laptop:flex">
            <Image
              src={logoType}
              alt="logo type"
              className="w-full hover:brightness-125 ease-in-out duration-200"
            />
          </a>
        </Link>
      </div>

      {/* search bar */}
      <div className=" w-full items-center flex bg-dark0 rounded-full">
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

      <div className="flex gap-10 items-center">
        {/* personal menu button */}
        <div className="flex h-20 text-white3 shrink-0 items-center text-med fixed bottom-0 left-0 w-full bg-dark1 laptop:static laptop:w-auto laptop:h-10 laptop:bg-opacity-0 laptop:gap-14">
          <button className="w-full h-full flex flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <FaBookOpen />
            <p className="text-xs capitalize laptop:hidden">recent</p>
          </button>
          <button className="w-full h-full text-lg flex flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <ImBooks />
            <p className="text-xs capitalize laptop:hidden">library</p>
          </button>
          <button className="w-full h-full flex flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <FaBell />
            <p className="text-xs capitalize laptop:hidden">notification</p>
          </button>
          <button className="w-full h-full text-lg flex flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <HiMail />
            <p className="text-xs capitalize laptop:hidden">message</p>
          </button>
          <button className="w-full h-full flex flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <FaShoppingCart />
            <p className="text-xs capitalize laptop:hidden">cart</p>
          </button>
        </div>

        <div className="flex gap-4 shrink-0 items-center">
          {/* login button on mobile */}
          <button className="bg-dark3 h-12 w-12 shrink-0 rounded-full hidden items-center justify-center laptop:hidden">
            <FaUser />
          </button>

          {/* user portrait button */}
          <button className="w-10 h-10 items-center hover:brightness-125 ease-in-out duration-200 laptopHr:mr-4">
            <Image
              src={userPortrait}
              alt="user portrait"
              className="rounded-full"
            />
          </button>

          {/* login & create account (hide once login) */}
          <div className="hidden gap-4 items-center">
            <h3 className="hidden text-right capitalize whitespace-nowrap items-end flex-col laptop:flex">
              dont have an account?
              <button className="text-primary capitalize hover:brightness-125 ease-in-out duration-200">
                create account
              </button>
            </h3>
            <button className="btn--pr btn--med uppercase hidden laptop:block">
              login
            </button>
          </div>

          {/* account upgrade */}
          <button className="btn--sc btn--med uppercase hidden laptopHr:block">
            + upgrade
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
