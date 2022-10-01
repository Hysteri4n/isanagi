import React, { useState, useRef } from 'react';
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

  useRef(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4000);
  });

  const slideRight = () => {
    if (current === banner.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className=" w-3/4 flex gap-6">
      <div
        className="flex flex-col w-full rounded-xl relative"
        onMouseEnter={() => {
          setAutoPlay(false);
          //@ts-ignore
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        {banner.map((item, i) => {
          return (
            <div
              key={i}
              className={
                i == current ? 'banner-card banner-active' : 'banner-card'
              }
            >
              <Link href={item.pageLink}>
                <a className="relative w-full h-fit overflow-hidden rounded-xl">
                  <div className="h-fit flex">
                    <Image
                      src={item.image}
                      className="flex w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="absolute top-0 left-0 h-32 w-32">
                    <Image src={item.badge} className="w-32 h-32" alt="" />
                  </div>
                  <div className="absolute left-0 top-0 px-14 py-14 flex flex-col w-full h-full justify-end bgBanner">
                    <h2 className="capitalize w-1/2 text-xxxl font-bold">
                      {item.tittle}
                    </h2>
                    <p className="capitalize w-1/2 text-lg mb-10 font-medium">
                      {item.desc}
                    </p>
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
                </a>
              </Link>
            </div>
          );
        })}
      </div>

      <div className="bg-dark0 flex flex-col w-250 justify-between gap-2">
        {banner.map((item, i) => (
          <div
            key={i}
            className={
              i == current ? 'pagination pagination-active' : 'pagination'
            }
            onClick={() => setCurrent(i)}
          >
            <button className="flex gap-6 items-center w-full relative">
              <div className="handle-status"></div>
              <div className="w-20 h-20 flex shrink-0">
                <Image
                  src={item.image}
                  className="w-full h-full object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="flex flex-col w-full z-10">
                <h4 className="font-medium text-left capitalize truncate w-full">
                  {item.tittle}
                </h4>
                <p className="capitalize text-white3 text-left">
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

export default Carousel;
