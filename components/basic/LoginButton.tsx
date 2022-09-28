import React from 'react';
import { FaUser } from 'react-icons/Fa';

// @ts-ignore
function LoginButton({ showLoginModal, showCreateModal }) {
  return (
    <div className="flex gap-4 shrink-0 items-center">
      <div className="flex gap-4 items-center">
        <button
          onClick={() => {
            showLoginModal(true);
          }}
          className="flex bg-dark3 h-10 w-10 shrink-0 rounded-full items-center justify-center laptop:hidden"
        >
          <FaUser />
        </button>
        <h3 className="hidden text-xs text-right capitalize whitespace-nowrap items-end flex-col laptop:flex">
          don&apos;t have an account?
          <button
            onClick={() => {
              showCreateModal(true);
            }}
            className="text-primary text-xs capitalize hover:brightness-125 ease-in-out duration-200"
          >
            create account
          </button>
        </h3>
        <button
          onClick={() => {
            showLoginModal(true);
          }}
          className="btn--pr btn--sm uppercase hidden laptop:block"
        >
          login
        </button>
      </div>
    </div>
  );
}

export default LoginButton;
