import React from "react";
import { motion } from "framer-motion";
import ButtonLink from "../buttonLink";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

function Headline({ ...rest }) {

  return (
    <section
      className="flex items-center w-full max-w-[1216px] py-10 px-6 justify-center xl:justify-start pt-32 "
      {...rest}
    >
      <div className="max-w-[696px] w-full flex flex-col gap-5 justify-start items-center xl:items-start">
        <motion.h1
          className="md:text-5xl text-3xl font-extrabold leading-[130%] my-element justify-start items-center text-center max-w-3xl xl:max-w-none xl:text-start"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
        >
          {rest.headline.first}{" "}
          <br className="hidden xl:block" /> {rest.headline.second}
          {rest.headline.third}
        </motion.h1>
        <p className="md:text-xl text-sm text-[#646464] leading-[150%] font-medium text-center max-w-3xl xl:text-start">
          {rest.headline.fourth}
        </p>
        <div className="flex items-center gap-4 flex-col min-[420px]:flex-row">
          <ButtonLink
            href={
              "https://linktr.ee/angolaosc"
            }
            text={rest.headline.zero}
            target="_blank"
          />
          <LinkScroll
            to={"purposes"}
            smooth={true}
            duration={1400}
            delay={0.8}
            className="cursor-pointer hover:no-underline text-gray-500 hover:text-red-600"
          >
            {rest.headline.fifth}
          </LinkScroll>
        </div>
        <div className="flex items-center gap-2 flex-col-reverse xl:flex-row">
          <div className="flex -space-x-3 overflow-hidden p-2 px-0">
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/avatar.avif"
              alt=""
              width={32}
              height={32}
            />
            <Image
              className="inline-block h-11 w-11 rounded-full cursor-pointer scale-90 hover:scale-105 transition-all ease-in-out"
              src="/sparkles.png"
              alt=""
              width={32}
              height={32}
            />
          </div>
          <span className="text-base font-semibold">
            {rest.headline.sixth}
          </span>
        </div>
      </div>
      <div className="bg-gray-200 rounded-lg w-[600px] hidden items-center justify-center relative xl:flex">
        <motion.span
          className="bg-red-300 absolute top-[90px] left-24 text-black font-bold text-base rounded-full px-4 py-3 cursor-pointer"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          Open Source
        </motion.span>
        <motion.span
          className="bg-violet-300 absolute top-3/4 left-24 text-black font-bold text-base rounded-full px-7 py-3 cursor-pointer z-30"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {rest.headline.seventh}
        </motion.span>
        <motion.span
          className="bg-yellow-300 absolute top-[80%] right-48 text-black font-bold text-base rounded-full px-4 py-3 cursor-pointer z-30"
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
        >
          {rest.headline.eighth}
        </motion.span>
        <Image
          src={"/hero.png"}
          alt="hero"
          width={236.67}
          height={580.54}
          className="transition-all  duration-[2s] bounce z-10"
        />
      </div>
    </section>
  );
}

export default Headline;
