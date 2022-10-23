import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsPlusLg } from 'react-icons/Bs';
import bannerI from '../../public/images/banner1.png';
import bannerII from '../../public/images/banner2.png';
import bannerIII from '../../public/images/banner3.png';
import bannerIV from '../../public/images/banner4.png';
import bannerV from '../../public/images/banner5.png';
import bannerVI from '../../public/images/banner6.png';
import badgeOfficial from '../../public/icons/official.png';
import badgePublisher from '../../public/icons/advanced.png';
import badgeAdvanced from '../../public/icons/publisher.png';

const banner = [
  {
    badge: badgeOfficial,
    image: bannerI,
    tittle: 'dr. stone',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 24',
    pageLink: '/',
    readFirst: '/',
  },
  {
    badge: badgePublisher,
    image: bannerII,
    tittle: 'jujutsu kaisen',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 38',
    pageLink: '/',
    readFirst: '/',
  },
  {
    badge: badgeAdvanced,
    image: bannerIII,
    tittle: 'the amazing spiderman',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 45',
    pageLink: '/',
    readFirst: '/',
  },
  {
    badge: badgeOfficial,
    image: bannerIV,
    tittle: 'world trigger',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 23',
    pageLink: '/',
    readFirst: '/',
  },
  {
    badge: badgePublisher,
    image: bannerV,
    tittle: 'my hero academia',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 18',
    pageLink: '/',
    readFirst: '/',
  },
  {
    badge: badgeAdvanced,
    image: bannerVI,
    tittle: 'black panther',
    desc: 'Yuta Okkotsu Gains Control Of An Extremely Powerful, Cursed Spirit And Gets Enrolled In The Tokyo Prefectural.',
    chapter: 'chapter 52',
    pageLink: '/',
    readFirst: '/',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: boolean | NodeJS.Timeout | null | undefined = null;

  useEffect(() => {
    const timeOut = setTimeout(slideRight, 5000);
    return () => {
      clearTimeout(timeOut);
    };
  });

  const slideRight = () => {
    if (current === banner.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className=" w-full h-[540px] flex flex-col px-4 tablet:px-0 gap-6 laptop:flex-row">
      <div className="flex flex-col w-full h-full rounded-xl overflow-hidden relative">
        {banner.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index == current ? 'banner-card banner-active' : 'banner-card'
              }
            >
              <Link href={item.pageLink}>
                <div className="w-full h-full">
                  <div className="h-full w-full flex object-cover">
                    <Image
                      src={item.image}
                      className="flex w-full h-full object-cover"
                      placeholder="blur"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 left-0 h-32 w-32">
                    <Image src={item.badge} className="w-32 h-32" alt="" />
                  </div>
                  <div className="absolute left-0 top-0 px-10 py-10 tablet:px-14 tablet:py-14 flex flex-col w-full h-full justify-end bgBanner">
                    <div className="capitalize tablet:w-1/2 laptop:2/3 text-[2rem] tablet:text-[3rem] font-bold leading-snug mb-2">
                      {item.tittle}
                    </div>
                    <div className="capitalize tablet:w-1/2 laptop:w-1/2 text-[1.1rem] tablet:text-[1.2rem] mb-8 font-medium">
                      {item.desc}
                    </div>
                    <div className="flex gap-4">
                      <button className="btn--pr btn--lg capitalize">
                        <Link href={item.readFirst}>
                          <a>read first chapter</a>
                        </Link>
                      </button>
                      <button className="btn--sc px-[18px] py-2 rounded-lg">
                        <BsPlusLg />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-dark0 flex gap-6 shrink-0 justify-center items-center laptop:justify-between laptop:items-start laptop:flex-col laptop:w-[280px]">
        {banner.map((item, index) => (
          <div
            key={index}
            className={
              index == current ? 'pagination pagination-active' : 'pagination'
            }
            onClick={() => setCurrent(index)}
          >
            <button className="flex gap-5 items-center hover:brightness-125 ease-in-out duration-200 h-2 w-4 rounded-lg relative bg-dark2 laptop:bg-opacity-0 laptop:w-full laptop:h-auto ">
              <div className="handle-status"></div>
              <div className="w-[64px] h-[64px] hidden laptop:flex shrink-0">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex-col gap-[2px] laptopHr:w-full z-10 hidden laptop:flex">
                <p className="text-md text-left capitalize truncate w-[180px]">
                  {item.tittle}
                </p>
                <p className="capitalize text-sm text-grey text-left">
                  {item.chapter}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
