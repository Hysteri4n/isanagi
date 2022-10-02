/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/link';
import '../../styles/store.module.css';
import { BsCaretRightFill } from 'react-icons/Bs';

function shortCutNav() {
  const shorCut = [
    { name: 'store', link: '/' },
    { name: 'browse', link: '/' },
  ];

  return (
    <div className="sticky top-0 w-full flex justify-center bg-dark0 z-20">
      <div className="flex w-full gap-2 py-6 overflow-x-auto no-scrollbar">
        {shorCut.map((item, i) => (
          <div key={i} className="flex items-center">
            <Link href={item.link}>
              <a className="border text-white3 border-dark2 bg-dark1 items-center whitespace-nowrap gap-6 rounded-full px-6 py-2 capitalize ease-in-out duration-200 hover:brightness-125 ">
                {item.name}
              </a>
            </Link>
          </div>
        ))}
        <button className="border text-white3 border-dashed border-dark3 items-center whitespace-nowrap gap-6 rounded-full px-6 py-2 capitalize hover:bg-dark2 hover:border-solid ease-in-out duration-200">
          + add shortcut
        </button>
      </div>
      <button className="sticky hidden right-0 bgGradRight pl-8 px-4 py-2 hover:text-primary ease-in-out duration-200">
        <BsCaretRightFill />
      </button>
    </div>
  );
}

export default shortCutNav;
