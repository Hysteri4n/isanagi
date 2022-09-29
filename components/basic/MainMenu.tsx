/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../../public/icons/logo-main.png';
import typeLogo from '../../public/icons/logo-type.png';
import { FaStore, FaUpload, FaUserFriends } from 'react-icons/Fa';
import { MdLeaderboard } from 'react-icons/Md';
import { motion } from 'framer-motion';

//@ts-ignore
function MainMenu({ closeMainMenu }) {
  return (
    <div className="fixed left-0 top-0 z-20">
      <motion.div
        onClick={() => closeMainMenu(false)}
        className="bg-dark0 bg-opacity-60 z-10 fixed top-0 left-0 w-full h-full"
      ></motion.div>
      <motion.div
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col fixed left-0 top-0 w-4/5 h-screen bgModal z-20 tablet:w-350"
      >
        <div className="flex items-center gap-6 px-10 py-8">
          <span className="w-8 h-8">
            <Image src={mainLogo} alt="main logo" />
          </span>
          <span className="h-8 w-40 flex items-center">
            <Image src={typeLogo} alt="type logo" />
          </span>
        </div>
        <div className="flex flex-col py-2 border-y border-dark3">
          {[
            [<FaStore />, 'store', '/'],
            [<FaUpload />, 'publish', '/publish'],
            [<MdLeaderboard />, 'leaderboards', '/leaderboards'],
            [<FaUserFriends />, 'community', '/community'],
          ].map(([icon, title, url]) => (
            //@ts-ignore
            <Link href={url}>
              <a className="flex items-center gap-6 px-10 py-4 hover:bg-primary capitalize ease-in-out duration-200">
                {icon}
                {title}
              </a>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default MainMenu;
