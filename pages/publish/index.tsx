/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const points = [
  {
    tribe: 'original',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque accusantium reiciendis veniam, sint cum nesciunt mollitia libero, eligendi quaerat ut laboriosam commodi cumque dolores corporis quos cumque dolores.',
  },
  {
    tribe: 'publisher',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque accusantium reiciendis veniam, sint cum nesciunt mollitia libero, eligendi quaerat ut laboriosam commodi cumque dolores corporis quos cumque dolores corporis quos.',
  },
  {
    tribe: 'self publisher',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste neque accusantium reiciendis veniam, sint cum nesciunt mollitia libero, eligendi quaerat ut laboriosam commodi cumque dolores corporis quos.',
  },
];

const publishQnA = [
  {
    question: 'Do I keep the rights of my works when publishing on Isanagi?',
    answer:
      'Depands on type of publication that you choose. if you publish as a self-publisher or as a publisher, the ownership and the right of publication is yours. but if you publish as as an original creator the ownership belongs to you but the rights of publication back to Isanagi',
  },
  {
    question: 'Can i publish a comic i have publish on other media or website?',
    answer:
      'Yes you can! as long you owned the right of publication and ownership of your comic. but if you dont, please ask your publisher or the owner of publication to publish it on Isanagi',
  },
  {
    question: 'How much cut percentage does Isanagi take from my comic sales? ',
    answer:
      'Isangi will cut 15%-25% of every sale you make. depands on publication type that you choose. please read publication manual to get more info about it.',
  },
  {
    question: 'Can i publish a comic i have publish on other media or website?',
    answer:
      'You can publish as many tittle as you want. but you could only run a series one at a time.',
  },
  {
    question: 'Is any type of comic allowed? What about nudity?',
    answer:
      'Isanagi allowed any type of comics, any type of genre. but Isanagi prohibited any type of comic that presents sensitive issues or exposed too much nudity.',
  },
  {
    question: 'Do I keep the rights to my work when publishing on Isanagi?',
    answer:
      'Depands on type of publication that you choose. if you publish as a self-publisher or as a publisher, the ownership and the right of publication is yours. but if you publish as as an original creator the ownership belongs to you but the rights of publication back to Isanagi',
  },
  {
    question: 'Can i publish a comic i have publish on other media or website?',
    answer:
      'Yes you can! as long you owned the right of publication and ownership of your comic. but if you dont, please ask your publisher or the owner of publication to publish it on Isanagi',
  },
  {
    question: 'Can i publish a comic i have publish on other media or website?',
    answer:
      'You can publish as many tittle as you want. but you could only run a series one at a time.',
  },
  {
    question: 'How much cut percentage does Isanagi take from my comic sales? ',
    answer:
      'Isangi will cut 15%-25% of every sale you make. depands on publication type that you choose. please read publication manual to get more info about it.',
  },
  {
    question: 'Is any type of comic allowed? What about nudity?',
    answer:
      'Isanagi allowed any type of comics, any type of genre. but Isanagi prohibited any type of comic that presents sensitive issues or expose too much nudity.',
  },
];

export default function publish() {
  const [current, setCurrent] = useState(0);
  const [tribeOption, setTribeOption] = useState(false);

  return (
    <div className="flex flex-col justify-center w-full h-fit items-center">
      <div className="w-full h-screen flex flex-col items-center justify-around py-[100px] tablet:px-12 laptop:px-32 laptopHr:px-52 desktop:px-60 desktopHr:px-96">
        <AnimatePresence>
          {tribeOption && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                onClick={() => {
                  setTribeOption(false);
                }}
                className="bg-black w-full h-full absolute -z-10 bg-opacity-50 top-0 left-0"
              ></motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="bgModal w-[90%] tablet:w-[400px] px-14 py-14 flex items-center flex-col gap-10 rounded-lg border border-dark3"
              >
                <h1 className="capitalize text-[1.4rem] font-medium">
                  create draft as :
                </h1>
                <div className="w-full flex flex-col gap-6">
                  <Link href={'/publish/original-draft'}>
                    <button className="btn--pr btn--lg--full capitalize">
                      original
                    </button>
                  </Link>
                  <button className="btn--pr btn--lg--full capitalize">
                    publisher
                  </button>
                  <button className="btn--pr btn--lg--full capitalize">
                    self-publish
                  </button>
                </div>
                <button
                  onClick={() => {
                    setTribeOption(false);
                  }}
                  className="btn--sc btn--md capitalize"
                >
                  cancel
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <h1 className="text-[2rem] desktopHr:text-[5rem] max-w-[1200px] px-10 tablet:text-[3rem] laptop:text-[4rem] shadow-primary font-extrabold capitalize text-center">
          let the world know your incredible artworks
        </h1>

        <button
          onClick={() => {
            setTribeOption(true);
          }}
          className="btn--xl btn--pr uppercase"
        >
          publish now
        </button>
        <p className="text-sm tablet:text-md capitalize text-center px-10 leading-6">
          make sure you have read
          <Link href={'/agreements'}>
            <a className="text-primary hover:brightness-125 ease-in-out duration-200">
              {' '}
              agreements{' '}
            </a>
          </Link>
          and
          <Link href={'/publishing-manual'}>
            <a className="text-primary hover:brightness-125 ease-in-out duration-200">
              {' '}
              publishing manual{' '}
            </a>
          </Link>
          before publishing your comic.
        </p>
      </div>
      <div className="w-full flex justify-center bg-dark1 ">
        <div className="w-full flex items-center flex-col gap-8 tablet:gap-4 px-4 py-10 pb-20 max-w-[1000px]">
          <h1 className="text-[1.6rem] tablet:text-[2rem] w-full laptop:pt-16 laptop:pb-8 capitalize">
            why you should publish on isanagi.
          </h1>
          <div className="w-full flex flex-col laptop:flex-row gap-6 mb-8">
            {points.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-col px-6 py-6 tablet:px-10 tablet:py-10 bg-dark2 rounded-lg gap-2"
                >
                  <h1 className="text-lg tablet:text-xl font-bold capitalize">
                    {item.tribe}
                  </h1>
                  <p className="text-md text-white3 h-full">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <h1 className="text-[1.6rem] tablet:text-[2rem] w-full laptop:pt-16 laptop:pb-8">
            Publishing FAQ :
          </h1>
          <div className="w-full flex flex-col gap-6">
            {publishQnA.map((item, index) => (
              <div
                key={index}
                className="w-full cursor-pointer flex flex-col drop-shadow-md gap-2 bg-dark2 rounded-lg px-6 py-6 tablet:px-10 tablet:py-10 hover:brightness-125 ease-in-out duration-200"
                onClick={() => setCurrent(index)}
              >
                <div className="w-full flex gap-4">
                  <span
                    className={
                      index == current
                        ? 'text-md tablet:text-xl font-extrabold'
                        : 'hidden'
                    }
                  >
                    -
                  </span>
                  <span
                    className={
                      index == current
                        ? 'hidden'
                        : 'text-md tablet:text-xl font-extrabold'
                    }
                  >
                    +
                  </span>

                  <p className=" text-lg tablet:text-xl font-semibold">
                    {item.question}
                  </p>
                </div>

                <p
                  className={
                    index == current ? 'text-md text-white3' : 'hidden'
                  }
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="capitalize text-sm w-full mt-8">
            please read
            <Link href={'/creators-guideline'}>
              <a className="text-primary text-md hover:brightness-125 ease-in-out duration-200">
                {' '}
                publishing manual{' '}
              </a>
            </Link>
            for more info.
          </p>
        </div>
      </div>
    </div>
  );
}
