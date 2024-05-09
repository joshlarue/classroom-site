'use client'
import { useEffect, useRef, useState } from "react";


export default function Header({setHeaderDivPosition, headerDivPosition}) {
  const headerDiv = useRef(null);

  useEffect(() => {
    console.log(headerDiv.current.getBoundingClientRect().bottom);
    setHeaderDivPosition(headerDiv.current);
  }), [headerDivPosition];

  return (
    <>
      <div ref={headerDiv} className="sticky flex flex-col w-full top-0">
        <div className="w-full h-[1vh] bg-secondary"></div>
        <div className="flex flex-col p-[3vh] justify-center items-center w-full bg-[#3D485F]">
          <h2 className="text-2xl text-base text-center">Mrs. LaRue's</h2>
          <h1 className="text-6xl font-bold text-accent mt-1">Class 5B</h1>
        </div>
      </div>
    </>
  );
}