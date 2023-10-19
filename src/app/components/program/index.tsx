import Image from "next/image";
import { Check } from "phosphor-react";
import React from "react";
import ButtonLink from "../buttonLink";

function Program({ ...rest }) {


  return (
    <section className="py-44">
      <div className="flex items-center gap-12 w-full max-w-[1216px] p-6 flex-col-reverse xl:flex-row">
        <div className="flex flex-col xl:gap-28 gap-6">
          <h2 className="xl:text-5xl text-3xl font-extrabold leading-[130%]">
            {rest.program.first}
          </h2>

          <ul className="flex flex-wrap xl:w-[630px] xl:gap-10 gap-4">
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="xl:text-3xl text-2xl font-bold leading-[120%]">
                  Workshops
                </h3>
                <p className="text-[#646464] xl:text-base text-sm leading-[130%]">
                  {rest.program.second}
                </p>
              </div>
            </li>
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="xl:text-3xl text-2xl font-bold leading-[120%]">
                  {rest.program.third}
                </h3>
                <p className="text-[#646464] xl:text-base text-sm leading-[130%]">
                  {rest.program.fourth}
                </p>
              </div>
            </li>
            <li>
              <div className="flex xl:gap-4 gap-2 w-64 flex-col">
                <h3 className="xl:text-3xl text-2xl font-bold leading-[120%]">
                  {rest.program.fifth}
                </h3>
                <p className="text-[#646464] xl:text-base text-sm leading-[130%]">
                  {rest.program.sixth}
                </p>
              </div>
            </li>
          </ul>
          <ButtonLink
            href="https://mentorship.aosc.social/"
            text="Conhecer Programa de Mentoria"
            target="_blank"
            className="w-fit"
          />
        </div>
        <div className="w-full xl:w-[448px]  bg-red-500 h-[624px] rounded-xl xl:flex items-end justify-center relative hidden">
          <div className="bg-white bounce p-4 rounded-xl flex gap-2 absolute bottom-8 left-[50%] select-none pointer-events-none ">
            <div className="bg-[#449DEF] flex items-center justify-center rounded-full w-6 h-6">
              <Check size={16} weight="bold" color="#fff" />
            </div>
            <p className="text-black text-base leading-[120%] font-semibold max-w-xs">
              {rest.program.seventh}
            </p>
          </div>
          <div className="bg-white p-8 rounded-[50%] absolute left-[-50px] top-[130px] spinner">
            <Image
              src={"/logo-aosc.svg"}
              width={318}
              height={603}
              alt="Jovem na foto"
              className="w-10 h-10"
            />
          </div>
          <Image
            src={"/jovem.png"}
            width={318}
            height={603}
            alt="Jovem na foto"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

export default Program;
