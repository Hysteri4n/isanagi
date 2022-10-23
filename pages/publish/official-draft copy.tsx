/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import AuthorInfo from '../../components/publish/AuthorInfo';
import ComicInfo from '../../components/publish/ComicInfo';

export default function officialDraft() {
  const [showStep, setShowState] = useState(true);

  return (
    <div className="flex flex-col justify-center w-full mb-20 h-fit items-center px-4 tablet:px-10 laptop:px-20">
      <div className="w-full sticky z-20 top-[70px] flex flex-col gap-10 max-w-[1000px] rounded-b-lg bg-dark0 mt-[70px] mb-4 ">
        <div className="flex justify-between items-center bg-dark2 w-full mt-4 px-4 py-8 tablet:px-10 tablet:py-10  laptop:px-20 laptop:py-12 rounded-lg shadow-ps">
          <h1 className="text-xl laptop:text-[1.8rem] w-full capitalize font-medium text-center tablet:text-left">
            creating official draft
          </h1>
          <div className="flex items-center bg-dark2 fixed bottom-0 z-20 left-0 w-full tablet:w-fit shadow-ns tablet:shadow-none tablet:static py-4 px-6 tablet:py-0 tablet:px-0">
            <button className="w-10 h-10 rounded-full shrink-0 bg-dark3 hover:bg-primary ease-in-out duration-200 ">
              1
            </button>
            <span className="h-[4px] bg-dark3 w-full tablet:w-10"></span>
            <button className="w-10 h-10 rounded-full shrink-0 bg-dark3 hover:bg-primary ease-in-out duration-200 ">
              2
            </button>
            <span className="h-[4px] bg-dark3 w-full tablet:w-10"></span>
            <button className="w-10 h-10 rounded-full shrink-0 bg-dark3 hover:bg-primary ease-in-out duration-200 ">
              3
            </button>
            <span className="h-[4px] bg-dark3 w-full tablet:w-10"></span>
            <button className="w-10 h-10 rounded-full shrink-0 bg-dark3 hover:bg-primary ease-in-out duration-200 ">
              4
            </button>
            <span className="h-[4px] bg-dark3 w-full tablet:w-10"></span>
            <button className="w-10 h-10 rounded-full shrink-0 bg-dark3 hover:bg-primary ease-in-out duration-200 ">
              5
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-10 rounded-lg max-w-[1000px] bg-dark2 px-4 py-4 tablet:px-10 tablet:py-10  laptop:px-20 laptop:py-12">
        {showStep && <AuthorInfo />}
        {showStep && <ComicInfo />}
        <div className="mb-20 flex gap-4">
          <button className="btn--lg btn--sc mt-10 capitalize">
            previous step
          </button>
          <button className="btn--lg btn--pr mt-10 capitalize">
            next step
          </button>
          <button
            type="submit"
            className="hidden btn--lg btn--pr mt-10 capitalize"
          >
            create draft
          </button>
        </div>
      </div>
    </div>
  );
}
