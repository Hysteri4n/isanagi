/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '../../public/icons/logo-main.png';
import typeLogo from '../../public/icons/logo-type.png';
import { FaStore, FaUpload, FaCookieBite, FaHandshake } from 'react-icons/Fa';
import {
  MdLeaderboard,
  MdFeedback,
  MdPrivacyTip,
  MdLocalPolice,
} from 'react-icons/Md';
import { IoMdHelpCircle, IoMdBug } from 'react-icons/Io';
import { HiUserGroup } from 'react-icons/Hi';
import { motion } from 'framer-motion';

const mains = [
  [<FaStore />, 'store', '/'],
  [<FaUpload />, 'publish', '/publish/'],
  [<MdLeaderboard />, 'leaderboards', '/leaderboards/'],
  [<HiUserGroup />, 'community', '/community/feeds'],
];

const adts = [
  [<FaHandshake />, 'agreements', '/'],
  [<MdPrivacyTip />, 'privacy policies', '/'],
  [<MdLocalPolice />, 'legal', '/'],
  [<FaCookieBite />, 'cookies', '/'],
];

const supports = [
  [<MdFeedback />, 'send feedback', '/'],
  [<IoMdBug />, 'report bug', '/'],
  [<IoMdHelpCircle />, 'help', '/'],
];

//@ts-ignore
function MainMenu({ closeMainMenu }) {
  return (
    <div className="fixed left-0 top-0 z-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => closeMainMenu(false)}
        className="bg-black bg-opacity-50 z-10 fixed top-0 left-0 w-full h-full"
      ></motion.div>

      <motion.div
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -350, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="flex flex-col fixed left-0 top-0 w-3/4 h-screen bgModal z-20 tablet:w-[350px]"
      >
        <div className="flex items-center gap-6 px-10 py-6">
          <span className="w-8 h-8">
            <Image src={mainLogo} alt="main logo" />
          </span>
          <span className="h-6 w-36 flex items-center">
            <Image src={typeLogo} alt="type logo" />
          </span>
        </div>
        <div className="flex flex-col py-2 border-t border-dark3">
          {mains.map(([icon, title, url]) => (
            //@ts-ignore
            <Link href={url}>
              <a
                onClick={() => {
                  closeMainMenu(false);
                }}
                className="flex text-lg items-center gap-6 px-10 py-3 hover:bg-primary capitalize ease-in-out duration-200"
              >
                {icon}
                <p className="text-sm">{title}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col py-2 border-t border-dark3">
          {adts.map(([icon, title, url]) => (
            //@ts-ignore
            <Link href={url}>
              <a
                onClick={() => {
                  closeMainMenu(false);
                }}
                className="flex text-lg items-center gap-6 px-10 py-3 hover:bg-primary capitalize ease-in-out duration-200"
              >
                {icon}
                <p className="text-sm">{title}</p>
              </a>
            </Link>
          ))}
        </div>
        <div className="flex flex-col py-2 border-t border-dark3">
          {supports.map(([icon, title, url]) => (
            //@ts-ignore
            <Link href={url}>
              <a
                onClick={() => {
                  closeMainMenu(false);
                }}
                className="flex text-lg items-center gap-6 px-10 py-3 hover:bg-primary capitalize ease-in-out duration-200"
              >
                {icon}
                <p className="text-sm">{title}</p>
              </a>
            </Link>
          ))}
        </div>
        <p className="absolute bottom-0 left-0 px-10 pb-10 text-sm text-white3">
          © 2022, Isanagi. All rights reserved. All trademark are property of
          their respective owners in indonesian and other countries.
        </p>
      </motion.div>
    </div>
  );
}

export default MainMenu;
