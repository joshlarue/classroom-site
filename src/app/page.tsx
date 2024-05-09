'use client'
import { useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Posts from "./components/Posts";

export default function Home() {
  const [headerDivPosition, setHeaderDivPosition] = useState();

  return (
    <>
      <Header setHeaderDivPosition={setHeaderDivPosition} headerDivPosition={headerDivPosition}/>
      <div className="w-full flex">
        <Posts />
        <Contact headerDivHeight={headerDivPosition} />
      </div>
    </>
  );
}