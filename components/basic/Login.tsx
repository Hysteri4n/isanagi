import React from 'react';
import Image from 'next/image';
import googleLogo from '../../public/icons/googleG.png';
import { FaUser, FaEye } from 'react-icons/Fa';
import { MdClose } from 'react-icons/Md';
import { HiLockClosed } from 'react-icons/Hi';
import { motion } from 'framer-motion';
// @ts-ignore

function Login({ showLoginModal, showCreateModal }) {
  return (
    <div className="fixed flex items-center justify-center left-0 top-0 w-full h-full z-30">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        onClick={() => {
          showLoginModal(false);
        }}
        className="bg-black w-full h-full absolute -z-10 bg-opacity-50 top-0 left-0"
      ></motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="bgModal w-[90%] tablet:w-[400px] h-auto pt-8 pb-16 px-10 border border-dark3 flex relative items-center justify-center rounded-xl"
      >
        <button
          onClick={() => {
            showLoginModal(false);
          }}
          className="absolute top-6 right-6 text-xl"
        >
          <MdClose />
        </button>
        <div className="flex gap-4 flex-col w-full items-center">
          <h2 className="text-[1.6rem] my-2 text-center capitalize">login</h2>
          <div className="inpWrap">
            <div className="inpIcon">
              <FaUser />
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
              placeholder="Confirm Password..."
              className="inpStd doubleIcon"
            />
            <span className="inpIconAdt">
              <FaEye />
            </span>
          </div>
          <div className="flex items-center gap-4 w-full px-2 py-4 justify-end">
            <label className="capitalize text-sm">remember me</label>
            <input type="checkbox" className="accent-primary" />
          </div>
          <div className="flex gap-4 w-full">
            <button type="submit" className="btn--md--full btn--pr capitalize">
              login
            </button>
            <button
              onClick={() => {
                showLoginModal(false);
                showCreateModal(true);
              }}
              className="btn--md--full btn--sc capitalize"
            >
              register
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
          <div className="w-full flex justify-center px-2 pt-4">
            <label className="text-sm capitalize">forgot password?</label>
            <button className="text-primary text-sm capitalize ml-1 hover:brightness-125 ease-in-out duration-200">
              reset password
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
