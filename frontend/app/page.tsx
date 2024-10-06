"use client"
import Header from "./components/Header";
import { useState } from 'react';
import LandingFirstPage from "./components/LandingFirstPage";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className={`${isDarkMode ? "dark bg-[#212121]" : "light bg-white"} min-h-screen h-fit`}>
      <div className="flex dark:bg-[#212121] bg-white">
        <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      </div>
      <div className=" dark:bg-[#212121] bg-white">
        <LandingFirstPage />
      </div>
    </div>
  );
}
