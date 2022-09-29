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
      <div
        onClick={() => {
          showLoginModal(false);
        }}
        className="bg-dark0 w-full h-full absolute -z-10 bg-opacity-40 top-0 left-0"
      ></div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bgModal w-5/6 tablet:w-350 h-auto pt-12 pb-20 border border-dark3 flex relative items-center justify-center rounded-xl"
      >
        <button
          onClick={() => {
            showLoginModal(false);
          }}
          className="absolute top-6 right-6 text-lg"
        >
          <MdClose />
        </button>
        <div className="flex gap-6 flex-col w-full items-center">
          <h2 className="text text-xxl my-4 text-center capitalize">login</h2>
          <div className="relative w-5/6">
            <div className="absolute left-5 top-3 text-white3 text-md">
              <FaUser />
            </div>
            <input
              type="email"
              placeholder="Email..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
          </div>
          <div className="relative w-5/6">
            <div className="absolute left-5 top-3 text-white3 text-md">
              <HiLockClosed />
            </div>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
            <button className="absolute right-5 top-3 text-white3 text-md">
              <FaEye />
            </button>
          </div>
          <div className="flex items-center gap-4 w-5/6 px-2 py-4 justify-end">
            <label className="capitalize text-xs">remember me</label>
            <input type="checkbox" checked className="accent-primary" />
          </div>
          <div className="flex gap-4 w-5/6">
            <button type="submit" className="btn--md--full btn--pr capitalize">
              login
            </button>
            <button
              onClick={() => {
                showLoginModal(false);
              }}
              className="btn--md--full btn--sc capitalize"
            >
              cancel
            </button>
          </div>
          <div className="w-5/6 flex flex-col items-end px-2 py-6 gap-2">
            <div>
              <label className="text-xs capitalize">forgot password?</label>
              <button className="text-primary capitalize ml-1 hover:brightness-125 ease-in-out duration-200">
                reset password
              </button>
            </div>
            <div>
              <label className="text-xs capitalize">
                don&apos;t have an account?
              </label>
              <button
                onClick={() => {
                  showLoginModal(false);
                  showCreateModal(true);
                }}
                className="text-primary capitalize ml-1 hover:brightness-125 ease-in-out duration-200"
              >
                create account
              </button>
            </div>
          </div>
          <div className="w-5/6">
            <button className="btn--md--full btn--sc capitalize flex items-center justify-center gap-4">
              <span className="flex w-6 h-6">
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
        <div></div>
      </motion.div>
    </div>
  );
}

export default Login;
