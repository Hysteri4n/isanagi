import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import googleLogo from '../../public/icons/googleG.png';
import { HiMail, HiLockClosed } from 'react-icons/Hi';
import { MdClose } from 'react-icons/Md';
import { FaUser, FaEye } from 'react-icons/Fa';
import { motion } from 'framer-motion';
// @ts-ignore

function Register({ showCreateModal, showLoginModal }) {
  return (
    <div className="fixed flex items-center justify-center left-0 top-0 w-full h-full z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        onClick={() => {
          showCreateModal(false);
        }}
        className="bg-black w-full h-full absolute -z-10 bg-opacity-50 top-0 left-0"
      ></motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="bgModal w-full h-full tablet:w-[450px] tablet:h-fit pt-8 pb-16 px-10 border border-dark3 flex items-center justify-center tablet:rounded-xl relative"
      >
        <button
          onClick={() => {
            showCreateModal(false);
          }}
          className="absolute top-6 right-6 text-xl"
        >
          <MdClose />
        </button>
        <div className="flex gap-4 flex-col w-full items-center">
          <h2 className="text-[1.6rem] my-4 text-center capitalize">
            register
          </h2>
          <div className="inpWrap">
            <div className="inpIcon">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="User Name..."
              className="inpStd singleIcon"
            />
          </div>
          <div className="inpWrap">
            <div className="inpIcon">
              <HiMail />
            </div>
            <input
              type="email"
              placeholder="Email..."
              className="inpStd singleIcon"
            />
          </div>

          <div className="inpWrap">
            <div className="inpIcon">
              <HiLockClosed />
            </div>
            <input
              type="password"
              placeholder="Password..."
              className="inpStd doubleIcon"
            />
            <span className="inpIconAdt">
              <FaEye />
            </span>
          </div>
          <div className="inpWrap">
            <div className="inpIcon">
              <HiLockClosed />
            </div>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="inpStd doubleIcon"
            />
            <span className="inpIconAdt">
              <FaEye />
            </span>
          </div>
          <div className="flex items-center gap-4 w-full px-2 py-8 justify-start">
            <input type="checkbox" className="accent-primary" />
            <label className="capitalize text-sm">
              i&apos;ve read and agree to all &nbsp;
              <Link href="#">
                <a className="text-primary">Agreement&apos;s</a>
              </Link>
            </label>
          </div>
          <div className="w-full flex gap-4">
            <button type="submit" className="btn--md--full btn--pr capitalize">
              register
            </button>
            <button
              onClick={() => {
                showLoginModal(true);
                showCreateModal(false);
              }}
              className="btn--md--full btn--sc capitalize"
            >
              login
            </button>
          </div>
          <div className="w-full mt-10">
            <button className="btn--md--full btn--sc capitalize flex items-center justify-center gap-4">
              <span className="flex w-5 h-5">
                <Image
                  src={googleLogo}
                  className="w-full h-full"
                  alt="google logo"
                />
              </span>
              login with google
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Register;
