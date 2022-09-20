/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';

import { FaBookOpen } from 'react-icons/Fa';
import { ImBooks } from 'react-icons/Im';
import { FaBell } from 'react-icons/Fa';
import { HiMail } from 'react-icons/Hi';
import { FaShoppingCart } from 'react-icons/Fa';
import userPortrait from '../../public/images/portrait.jpeg';

function personalFeature() {
  return (
    <div className="flex gap-10 items-center">
      {/* user portrait button */}
      <div className="flex shadow-ns laptop:shadow-none h-20 text-white3 shrink-0 items-center text-med fixed bottom-0 left-0 w-full bg-dark0 laptop:static laptop:w-auto laptop:h-10 laptop:bg-opacity-0 laptop:gap-14">
        {[
          [<FaBookOpen />, 'recents'],
          [<ImBooks />, 'library'],
          [<FaBell />, 'notification'],
          [<HiMail />, 'message'],
          [<FaShoppingCart />, 'cart'],
        ].map(([icon, title]) => (
          <button className="w-full h-full flex text-md flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <span className="text-md">{icon}</span>
            <span className="text-xs capitalize laptop:hidden">{title}</span>
          </button>
        ))}
      </div>
      <button className="w-10 h-10 items-center hover:brightness-125 ease-in-out duration-200 laptopHr:mr-4">
        <Image
          src={userPortrait}
          alt="user portrait"
          className="rounded-full"
        />
      </button>
    </div>
  );
}

export default personalFeature;
