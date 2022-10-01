/* eslint-disable react/jsx-key */
import React from 'react';
import Image from 'next/image';
import { FaBookOpen, FaBell, FaShoppingCart } from 'react-icons/Fa';
import { ImBooks } from 'react-icons/Im';
import { HiMail } from 'react-icons/Hi';
import userPortrait from '../../public/images/portrait.jpeg';

function personalFeature() {
  return (
    <div className="flex gap-12 items-center">
      <div className="flex shadow-ns h-20 text-white3 shrink-0 pt-2 items-center text-med fixed bottom-0 left-0 w-full bg-dark1 laptop:pt-0 laptop:static laptop:shadow-none laptop:w-auto laptop:h-10 laptop:bg-opacity-0 laptop:gap-14">
        {[
          [<FaBookOpen />, 'recents', ''],
          [<ImBooks />, 'library', ''],
          [<FaBell />, 'notification', '3'],
          [<HiMail />, 'message', '3'],
          [<FaShoppingCart />, 'cart', '14'],
        ].map(([icon, title, count]) => (
          <button className="w-full h-full flex text-md flex-col items-center justify-center hover:brightness-125 ease-in-out duration-200">
            <span className="text-lg relative">
              {icon}
              <p className="absolute text-white -top-2 left-3 bg-primary text-xs px-2 py rounded-lg">
                {count}
              </p>
            </span>
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
