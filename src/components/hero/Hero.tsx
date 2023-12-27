import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div>
      <div className="brightness-50 absolute w-full">
        <Image
          src="/bgMobile.png"
          alt="dad"
          width={500}
          height={377}
          className="block sm:block md:hidden w-100"
        />
        <Image
          src="/bgDesktop.png"
          alt="dad"
          width={1920}
          height={378}
          className="hidden sm:block md:block"
        />
      </div>
      <div className="relative flex flex-col ml-5 pt-32 text-white text-base w-[360px] md:w-[480px] md:pt-10 md:pl-6 lg:w-[637px] lg:pt-16 lg:pl-24">
        <h2 className="text-lg font-bold leading-8 lg:text-4xl lg:w-[560px] lg:font-semibold">A melhor loja de Jordan</h2>
        <p className="text-base font-semibold leading-7 lg:text-1xl lg:pt-6 lg:font-medium">
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </p>
      </div>
    </div>
  );
};
