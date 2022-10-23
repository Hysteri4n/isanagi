import React from 'react';

export default function ComicInfo() {
  const genres = ['action', 'adventure', 'horror', 'romance'];
  const languages = ['english', 'indonesian'];
  const types = ['colored', 'black & white'];
  const reads = ['left to right', 'right to left'];

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="sticky top-[70px] z-10 bg-dark2 outline outline-dark2 capitalize text-[1.4rem] font-semibold px-5 py-5">
        fill comic info
      </h1>

      <div className="flex flex-col gap-2 w-full">
        <label className="capitalize text-grey px-5 text-sm ">tittle</label>
        <div className="inpWrap">
          <input type="text" placeholder="Tittle..." className="inpStd" />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2">
        <label className="capitalize text-grey px-5 text-sm">language</label>
        <select className="dropDown ddFull">
          {languages.map((item) => (
            <option value="" key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 w-full">
        <div className="w-full flex flex-col gap-2">
          <label className="capitalize text-grey px-5 text-sm">genre 1</label>
          <select className="dropDown ddFull">
            {genres.map((item) => (
              <option value="" key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col gap-2">
          <label className="capitalize text-grey px-5 text-sm">genre 2</label>
          <select className="dropDown ddFull">
            {genres.map((item) => (
              <option value="" key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="capitalize text-grey px-5 text-sm">
          illustration type
        </label>
        <select className="dropDown ddFull">
          {types.map((item) => (
            <option value="" key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className="capitalize text-grey px-5 text-sm">
          read direction
        </label>
        <select className="dropDown ddFull">
          {reads.map((item) => (
            <option value="" key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="capitalize text-grey px-5 text-sm ">synopsis</label>
        <div className="inpWrap">
          <textarea
            type="text"
            placeholder="Synopsis..."
            //@ts-ignore
            rows="4"
            className="inpStd resize-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label className="capitalize text-grey px-5 text-sm ">
          tags ( 10 tags maxed )
        </label>
        <div className="inpWrap">
          <textarea
            type="text"
            placeholder="#Tag..."
            //@ts-ignore
            rows="3"
            className="inpStd resize-none"
          />
        </div>
      </div>
    </div>
  );
}
