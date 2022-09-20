import React from 'react';
import { FaUser } from 'react-icons/Fa';

function LoginButton({ showPersonalFeature }) {
  return (
    <div className="flex gap-4 shrink-0 items-center">
      {/* login & create account (hide once login) */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => showPersonalFeature(true)}
          className="flex bg-dark3 h-10 w-10 shrink-0 rounded-full items-center justify-center laptop:hidden"
        >
          <FaUser />
        </button>
        <h3 className="hidden text-right capitalize whitespace-nowrap items-end flex-col laptop:flex">
          dont have an account?
          <button className="text-primary capitalize hover:brightness-125 ease-in-out duration-200">
            create account
          </button>
        </h3>
        <button
          onClick={() => showPersonalFeature(true)}
          className="btn--pr btn--med uppercase hidden laptop:block"
        >
          login
        </button>
      </div>
    </div>
  );
}

export default LoginButton;
