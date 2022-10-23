import React from 'react';
import Carousel from './Carousel';

export default function Discover() {
  return (
    <div className="flex pt-[78px] flex-col justify-center w-full h-fit mb-20 max-w-[1200px]">
      <Carousel />
      <span className="w-full h-[300px] bg-dark2 mt-20 py-10"></span>
      <span className="w-full h-[300px] bg-dark2 mt-20 py-10"></span>
      <span className="w-full h-[300px] bg-dark2 mt-20 py-10"></span>
      <span className="w-full h-[300px] bg-dark2 mt-20 py-10"></span>
    </div>
  );
}
