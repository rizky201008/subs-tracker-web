"use client";
import { useState } from "react";
import { FaClosedCaptioning, FaSearch, FaWindowClose } from "react-icons/fa";

export default function TopBar() {
  const [state, setState] = useState({
    search: false,
  });

  const updateSearch = (value: boolean) => {
    setState(() => ({ ...state, search: value }));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-2 md:z-10 w-full max-w-4xl flex flex-col gap-3 flex-grow-0">
      <div className="flex flex-row justify-between items-center w-full">
        <div className="avatar placeholder cursor-pointer">
          <div className="bg-neutral text-neutral-content w-8 h-8 rounded-full">
            <span className="text-xs">UI</span>
          </div>
        </div>
        <button
          className="btn btn-ghost rounded-full"
          onClick={() => updateSearch(!state.search)}
        >
          {state.search ? <FaWindowClose /> : <FaSearch />}
        </button>
      </div>
      {state.search && (
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" autoFocus />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      )}
    </div>
  );
}
