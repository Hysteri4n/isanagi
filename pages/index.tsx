import React, { useState } from 'react';
import { BsCaretRightFill } from 'react-icons/Bs';
import Discover from '../components/store/Discover';
import Browse from '../components/store/Browse';

export default function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showStore, setShowStore] = useState(true);

  return (
    <div className="flex items-center flex-col tablet:px-10 laptop:px-20">
      <div className="sticky top-[70px] bg-dark0 w-full z-20 px-4 flex justify-center">
        <div className="flex w-full gap-2 py-5 overflow-x-auto no-scrollbar max-w-[1200px]">
          <button
            onClick={() => {
              setShowStore(true);
            }}
            className="border text-white3 border-dark2 text-sm bg-dark2 items-center whitespace-nowrap gap-6 rounded-full px-4 py-2 capitalize ease-in-out duration-200 hover:bg-dark4 hover:text-white "
          >
            discover
          </button>
          <button
            onClick={() => {
              setShowStore(false);
            }}
            className="border text-white3 border-dark2 text-sm bg-dark2 items-center whitespace-nowrap gap-6 rounded-full px-4 py-2 capitalize ease-in-out duration-200 hover:bg-dark4 hover:text-white "
          >
            browse
          </button>
          <button className="border text-sm text-white3 border-dashed border-dark3 items-center whitespace-nowrap gap-6 rounded-full px-4 py-2 capitalize hover:bg-dark4 hover:border-solid ease-in-out duration-200">
            + add shortcut
          </button>
        </div>
        <button className="sticky hidden right-0 bgGradRight pl-8 px-4 py-2 hover:text-primary ease-in-out duration-200">
          <BsCaretRightFill />
        </button>
      </div>
      {showStore && <Discover />}
      {!showStore && <Browse />}
    </div>
  );
}
