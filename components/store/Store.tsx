import React from 'react';
import ShortCutNav from './ShortCutNav';
import Carousel from '../basic/Carousel';

function store() {
  return (
    <div className="flex flex-col justify-center w-full h-fit items-center px-4 tablet:px-10 laptop:px-32 laptopHr:px-52 desktop:px-80 desktopHr:px-96">
      <ShortCutNav />
      <Carousel />
      <span className="w-full h-300 bg-dark2 mt-20"></span>
      <span className="w-full h-300 bg-dark2 mt-20"></span>
      <span className="w-full h-300 bg-dark2 mt-20"></span>
      <span className="w-full h-300 bg-dark2 mt-20"></span>
    </div>
  );
}

export default store;
