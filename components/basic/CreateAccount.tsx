import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import googleLogo from '../../public/icons/googleG.png';
import { HiMail, HiLockClosed } from 'react-icons/Hi';
import { MdClose } from 'react-icons/Md';
import { FaUser, FaEye } from 'react-icons/Fa';
import { motion } from 'framer-motion';
// @ts-ignore

function CreateAccount({ showCreateModal, showLoginModal }) {
  return (
    <div className="fixed flex items-center justify-center left-0 top-0 w-full h-full z-50">
      <div
        onClick={() => {
          showCreateModal(false);
        }}
        className="bg-dark0 w-full h-full absolute -z-10 bg-opacity-40 top-0 left-0"
      ></div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bgModal w-full h-full tablet:w-450 tablet:h-3/4 pt-12 pb-20 border border-dark3 flex items-center justify-center tablet:rounded-xl relative"
      >
        <button
          onClick={() => {
            showCreateModal(false);
          }}
          className="absolute top-6 right-6 text-lg"
        >
          <MdClose />
        </button>
        <div className="flex gap-6 flex-col w-full items-center">
          <h2 className="text text-xxl my-4 text-center capitalize">
            create account
          </h2>
          <div className="relative w-5/6">
            <div className="absolute flex left-5 top-3 text-white3 text-md">
              <HiMail />
            </div>
            <input
              type="email"
              placeholder="Email..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
          </div>
          <div className="relative w-5/6">
            <div className="absolute flex left-5 top-3 text-white3 text-md">
              <FaUser />
            </div>
            <input
              type="text"
              placeholder="User Name..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
          </div>
          <div className="relative w-5/6">
            <div className="absolute flex left-5 top-3 text-white3 text-md">
              <HiLockClosed />
            </div>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
            <button className="absolute flex right-5 top-3 text-white3 text-md">
              <FaEye />
            </button>
          </div>
          <div className="relative w-5/6">
            <div className="absolute flex left-5 top-3 text-white3 text-md">
              <HiLockClosed />
            </div>
            <input
              type="password"
              placeholder="Confirm Password..."
              className="border border-dark3 py-3 px-5 pl-14 bg-dark1 rounded-lg w-full focus:border-primary focus:outline-none"
            />
            <button className="absolute flex right-5 top-3 text-white3 text-md">
              <FaEye />
            </button>
          </div>
          <div className="flex items-center gap-4 w-5/6 px-2 py-8 justify-start">
            <input type="checkbox" className="accent-primary" />
            <label className="capitalize text-xs">
              i&apos;ve read and agree to all &nbsp;
              <Link href="#">
                <a className="text-primary">Agreement&apos;s</a>
              </Link>
            </label>
          </div>
          <div className="w-5/6 flex gap-4">
            <button className="btn--md--full btn--pr capitalize">
              create account
            </button>
            <button
              onClick={() => {
                showCreateModal(false);
              }}
              className="btn--md--full btn--sc capitalize"
            >
              cancel
            </button>
          </div>

          <div className="w-5/6 flex justify-center">
            <div>
              <label className="text-xs capitalize">
                already have an account?
              </label>
              <button
                onClick={() => {
                  showLoginModal(true);
                  showCreateModal(false);
                }}
                className="text-primary capitalize ml-1 hover:brightness-125 ease-in-out duration-200"
              >
                go login
              </button>
            </div>
          </div>
          <div className="w-5/6 pt-16">
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
      </motion.div>
    </div>
  );
}

export default CreateAccount;
