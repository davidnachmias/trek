import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

export default function () {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-t-2xl border-4 border-neutral-800 p-4">
          <RiReactjsFill className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-t-2xl border-4 border-neutral-800 p-4">
          <RiNextjsFill className="text-7xl " />
        </div>
        <div className="rounded-t-2xl border-4 border-neutral-800 p-4">
          <BiLogoMongodb className="text-7xl" />
        </div>
        <div className="rounded-t-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl" />
        </div>
      </div>
    </div>
  );
}
