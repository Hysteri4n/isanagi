import Image from 'next/image';
import AuthorInfo from '../../components/publish/AuthorInfo';
import ComicInfo from '../../components/publish/ComicInfo';
import ComicPreferences from '../../components/publish/ComicPreferences';
import isanagiLogo from '../../public/icons/official-logo.png';

export default function originalDraft() {
  return (
    <div className="flex flex-col justify-center w-full pt-10 mb-20 h-fit items-center px-4 tablet:px-10 laptop:px-20">
      <div className="w-full flex flex-col gap-10 rounded-lg max-w-[1000px] bg-dark2 px-4  tablet:px-10 py-10  laptop:px-20 laptop:pt-20 laptop:pb-14">
        <div className="flex items-center gap-6 border-b border-dark3 pb-6 px-6">
          <div className="h-10 w-10">
            <Image src={isanagiLogo} alt="official logo" />
          </div>
          <h1 className="text-xl laptop:text-[1.8rem] capitalize font-medium">
            creating official draft
          </h1>
        </div>
        <AuthorInfo />
        <ComicInfo />
        <ComicPreferences />
        <button
          type="submit"
          className="btn--lg btn--pr mt-10 mb-20 capitalize w-full tablet:w-fit"
        >
          create draft
        </button>
      </div>
    </div>
  );
}
