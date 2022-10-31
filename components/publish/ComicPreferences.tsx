import React from 'react';

export default function ComicPreferences() {
  const schedule = ['unscheduled', 'weekly', 'bi-monthly', 'monthly'];
  const access = [
    'free',
    'paid',
    'limited free (3 days)',
    'limited free (1 week)',
  ];

  return (
    <div className="flex flex-col gap-8 w-full">
      <h1 className="sticky top-0 z-10 bg-dark2 outline outline-dark2 capitalize text-[1.4rem] font-semibold px-5 py-5">
        set comic preferences
      </h1>

      <div className="w-full flex flex-col gap-2">
        <label className="capitalize text-grey px-5 text-sm">
          chapter release schedule
        </label>
        <select className="dropDown ddFull">
          {schedule.map((item) => (
            <option value="" key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4 w-full">
        <div className="w-full flex flex-col gap-2">
          <label className="capitalize text-grey px-5 text-sm">access</label>
          <select className="dropDown ddFull">
            {access.map((item) => (
              <option value="" key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full dbl">
          <label className="capitalize text-grey px-5 text-sm ">
            chapter price
          </label>
          <div className="inpWrap">
            <input type="text" placeholder="$ 0" className="inpStd" />
          </div>
        </div>
      </div>
    </div>
  );
}
