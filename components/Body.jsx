import React from "react";
import Image from "next/image";
import BG from "../public/img/back.png";

function Body() {
  return (
    <div className=" mx-auto py-16">
      <div className="text-center py-16 lg:text-2xl sm:text-xl text-white font-japan">
        Upcoming Tournaments
      </div>
      <div className="container mx-auto lg:h-[500px] lg:w-[500px] sm:h-[800px] sm:w-[800px]">
        <Image src={BG} />
      </div>
    </div>
  );
}

export default Body;
