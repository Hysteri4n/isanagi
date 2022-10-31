import React, { useState } from 'react';
import { BsCaretRightFill, BsCaretLeftFill } from 'react-icons/Bs';
import Discover from '../components/store/Discover';
import Browse from '../components/store/Browse';
import VolumesOnSale from '../components/store/categories/VolumesOnSale';

const pages = [
  {
    name: 'discover',
    page: <Discover />,
  },
  {
    name: 'browse',
    page: <Browse />,
  },
  {
    name: 'volumes on sale',
    page: <VolumesOnSale />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'volumes on sale',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'volumes on sale',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'volumes on sale',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'volumes on sale',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
  {
    name: 'top tittles',
    page: <Browse />,
  },
];

export default function home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex items-center flex-col tablet:px-10 pt-2 laptop:px-20">
      <div className="flex flex-col w-full max-w-[1280px]">
        <div className="w-full flex gap-2 py-3 sticky top-0 z-10 no-scrollbar bg-dark0 pl-4 overflow-hidden tablet:pl-0 tablet:py-5">
          <div className="hidden sticky left-0 bgGradLeft px-4 py-[10px] text-lg cursor-pointer hover:text-primary">
            <BsCaretLeftFill />
          </div>
          {pages.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? 'bg-dark4 py-[10px] px-4 cursor-pointer text-sm rounded-[20px] whitespace-nowrap capitalize'
                    : 'bg-dark2 hover:bg-dark3 py-[10px] text-white3 hover:opacity-100 hover:text-white px-4 cursor-pointer text-sm rounded-[20px] whitespace-nowrap capitalize opacity-80 ease-in-out duration-200'
                }
                onClick={() => setCurrent(index)}
              >
                {item.name}
              </div>
            );
          })}
          <div className="sticky right-0 bgGradRight px-4 py-[8px] text-lg cursor-pointer hover:text-primary">
            <BsCaretRightFill />
          </div>
        </div>

        <div className="w-full">
          {pages.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == current ? 'storePage stateActive' : 'storePage'
                }
              >
                {item.page}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
