/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../../public/icons/logo-main.png';
import typeLogo from '../../public/icons/logo-type.png';
import { FaStore } from 'react-icons/Fa';
import { FaUpload } from 'react-icons/Fa';
import { MdLeaderboard } from 'react-icons/Md';
import { FaUserFriends } from 'react-icons/Fa';

function MainMenu({ closeMainMenu }) {
  return (
    <div className="fixed left-0 top-0 z-20">
      <button
        onClick={() => closeMainMenu(false)}
        className="bg-dark0 bg-opacity-60 z-10 fixed top-0 left-0 w-full h-full"
      ></button>
      <div className="flex flex-col fixed left-0 top-0 w-4/5 h-screen bg-dark3 z-20 tablet:w-96">
        <div className="flex gap-6 px-10 py-8">
          <span className="w-10 h-10">
            <Image src={mainLogo} alt="main logo" />
          </span>
          <span className="h-8 w-1/2">
            <Image src={typeLogo} alt="type logo" />
          </span>
        </div>
        <div className="flex flex-col py-2 border-y-2 border-dark4">
          {[
            [<FaStore />, 'store', '/'],
            [<FaUpload />, 'publish', '/publish'],
            [<MdLeaderboard />, 'leaderboards', '/leaderboards'],
            [<FaUserFriends />, 'community', '/community'],
          ].map(([icon, title, url]) => (
            <Link href={url}>
              <a className="flex items-center gap-6 px-10 py-4 hover:bg-primary capitalize ease-in-out duration-200">
                {icon}
                {title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
