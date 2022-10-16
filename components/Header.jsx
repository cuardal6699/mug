import React from "react";

function Header() {
  return (
    <div className="absolute flex p-10 w-full mx-auto z-20 xl:items-center font-japan">
      <p className="sm:flex-1">Logo</p>

      <ul className="flex items-center mx-auto gap-4">
        <li>
          <a
            href="/focus"
            className="text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#C4A85D] hover:font-semibold hover:text-white  hover:rounded-md"
          >
            News
          </a>
        </li>
        <li>
          <a
            href="!#"
            className="text-black p-2 transition-all ease-in-out duration-300 hover:bg-[#C4A85D] hover:font-semibold hover:text-white  hover:rounded-md"
          >
            Tournaments
          </a>
        </li>
        <li>
          <a
            href="/cases"
            className="text-black p-2 transition-all ease-in-out duration-300 hover:font-semibold hover:bg-[#C4A85D] hover:text-white hover:rounded-md"
          >
            More
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
