import React from 'react';
import ShortCutNav from './ShortCutNav';
import Carousel from '../basic/Carousel';

function store() {
  return (
    <div className="flex flex-col justify-center w-full h-fit items-center mt-24">
      <ShortCutNav />
      <Carousel />
      <span className="w-3/4 h-300 bg-dark2 mt-20"></span>
      <span className="w-3/4 h-300 bg-dark2 mt-20"></span>
      <span className="w-3/4 h-300 bg-dark2 mt-20"></span>
      <span className="w-3/4 h-300 bg-dark2 mt-20"></span>
    </div>
  );
}

export default store;
