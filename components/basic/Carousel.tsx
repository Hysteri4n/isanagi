import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/store.module.css';
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

function Carousel() {
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
    <div className=" w-full h-550 flex flex-col gap-10 laptopHr:flex-row">
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
                  <div className="h-full flex">
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
                  <div className="absolute left-0 top-0 px-10 py-10 tablet:px-20 tablet:py-20 flex flex-col w-full h-full justify-end bgBanner">
                    <div className="capitalize tablet:w-1/2 laptop:2/3 text-xxxl tablet:text-xxxxl font-bold leading-snug mb-4">
                      {item.tittle}
                    </div>
                    <div className="capitalize tablet:w-1/2 laptop:w-2/3 laptopHr:w-1/2 text-lg tablet:text-lg mb-12 font-medium">
                      {item.desc}
                    </div>
                    <div className="flex gap-4">
                      <button className="btn--pr btn--lg capitalize">
                        <Link href={item.readFirst}>
                          <a>read first chapter</a>
                        </Link>
                      </button>
                      <button className="btn--sc px-6 py-2 rounded-lg">
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

      <div className="bg-dark0 flex gap-6 shrink-0 justify-center items-center laptopHr:justify-between laptopHr:items-start laptopHr:flex-col laptopHr:w-250">
        {banner.map((item, index) => (
          <div
            key={index}
            className={
              index == current ? 'pagination pagination-active' : 'pagination'
            }
            onClick={() => setCurrent(index)}
          >
            <button className="flex gap-6 items-center h-3 w-6 rounded-lg relative bg-dark1 laptopHr:bg-opacity-0 laptopHr:w-full laptopHr:h-auto ">
              <div className="handle-status"></div>
              <div className="w-20 h-20 hidden laptopHr:flex shrink-0">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex-col laptopHr:w-full z-10 hidden laptopHr:flex">
                <div className="font-medium text-left capitalize truncate laptopHr:w-f90">
                  {item.tittle}
                </div>
                <div className="capitalize text-white3 text-left">
                  {item.chapter}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
