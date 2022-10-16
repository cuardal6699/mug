import React, { useState } from "react";
import Image from "next/image";
import BG from "../public/img/bg.png";
// import N from '../assets/img/neymar.png'

export default function Hero() {
  const [image, setImage] = useState(0);
  return (
    <div className="relative">
      <div className="absolute -z-20 w-full h-full">
        <Image src={BG} layout="fill" alt="" />
      </div>
      <button
        disabled={image <= 0}
        onClick={() => setImage(image - 1)}
        className="absolute top-[80%] sm:top-[30%] xl:top-[80%] sm:pl-16 pl-8 text-2xl  sm:text-3xl sm:text-black z-50 text-white sm:disabled:text-white disabled:text-black"
      >
        &lt;{" "}
      </button>
      <button
        disabled={image >= IMAGES.length - 1}
        onClick={() => setImage(image + 1)}
        className="absolute top-[80%] sm:top-[30%] xl:top-[80%] right-0 sm:pr-16 pr-8 text-2xl  sm:text-3xl text-white sm:text-black z-50 sm:disabled:text-white disabled:text-black"
      >
        &gt;{" "}
      </button>
      <div className="-z-10 w-full pt-24 ">
        <img src={IMAGES[image]} className="mx-auto h-full object-cover" />
      </div>
    </div>
  );
}

const IMAGES = ["/img/messi.png", "/img/neymar.png", "/img/mpabbe.png"];
