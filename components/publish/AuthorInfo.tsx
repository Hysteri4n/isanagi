import React from 'react';

export default function AuthorInfo() {
  const roles = [
    'story writter & illustrator',
    'story writter',
    'illustrator',
    'penciler',
    'inker',
    'colourist',
    'letterer',
  ];

  return (
    <div className="flex flex-col gap-4 w-full overflow-auto resize-x">
      <h1 className="sticky top-[70px] z-10 bg-dark2 outline outline-dark2 capitalize text-[1.4rem] font-semibold px-5 py-5">
        fill author info
      </h1>
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center mb-2">
            <h1 className="px-5 font-medium capitalize whitespace-nowrap">
              author 1
            </h1>
            <span className="h-[1px] w-full bg-dark3 mr-5"></span>
          </div>
          <div className="flex flex-col tablet:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author name
              </label>
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Name..."
                  className="inpStd"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="capitalize text-grey px-5 text-md text-sm">
                author role
              </label>
              <select className="dropDown ddFull">
                {roles.map((item) => (
                  <option value="" key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author id ( optional )
              </label>
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Id..."
                  className="inpStd"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center mb-2">
            <h1 className="px-5 font-medium capitalize whitespace-nowrap">
              author 2
            </h1>
            <span className="h-[1px] w-full bg-dark3"></span>
            <button className="text-grey text-sm capitalize px-5 hover:brightness-125 ease-in-out duration-200">
              delete
            </button>
          </div>
          <div className="flex flex-col tablet:flex-row gap-4 w-fulll">
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author name
              </label>
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Name..."
                  className="inpStd"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="capitalize text-grey px-5 text-md text-sm">
                author role
              </label>
              <select className="dropDown ddFull">
                {roles.map((item) => (
                  <option value="" key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author id ( optional )
              </label>
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Id..."
                  className="inpStd"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div className="w-full flex items-center mb-2">
            <h1 className="px-5 font-medium capitalize whitespace-nowrap">
              author 3
            </h1>
            <span className="h-[1px] w-full bg-dark3"></span>
            <button className="text-grey text-sm capitalize px-5 hover:brightness-125 ease-in-out duration-200">
              delete
            </button>
          </div>
          <div className="flex flex-col tablet:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author name
              </label>
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Name..."
                  className="inpStd"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <label className="capitalize text-grey px-5 text-md text-sm">
                author role
              </label>
              <select className="dropDown ddFull">
                {roles.map((item) => (
                  <option value="" key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="capitalize text-grey px-5 text-sm ">
                author id ( optional )
              </label>{' '}
              <div className="inpWrap">
                <input
                  type="text"
                  placeholder="Author Id..."
                  className="inpStd"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="text-primary mt-5 px-5 hover:brightness-125 ease-in-out duration-200 capitalize">
          + add author
        </button>
      </div>
    </div>
  );
}
