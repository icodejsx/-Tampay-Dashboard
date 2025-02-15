import React from "react";

const Input = () => {
  return (
    <form className=" w-[25rem] rounded-full bg-red-300">
      <div className="relative">
        <div className="absolute rounded-full inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm "
          placeholder="Search by Tran ID and Account Number"
          required
        />
      </div>
    </form>
  );
};

export default Input;
