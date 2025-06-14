import React from "react";
import { HERO_CONTENT } from "../constants/constants";

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center h-screen lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16">
              David Nachmias
            </h1>
            <span className="bg-gradient-to-r from-blue-500 via-red-500 to-purple-500 bg-clip-text text-3xl font-semibold text-transparent">
              Full Stack Developer
            </span>
            <p className="pt-16 text-2xl font-thin tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
