"use client"
import LandingFirstPage from "./components/LandingFirstPage";
import { useSelector } from "../redux/store/store";
export default function Home() {
  const state=useSelector((state)=>state.Theme);
  return (
    <div className={`${state ? "dark bg-[#212121]" : "light bg-white"} flex flex-col h-full`}>
      <div className={`${state ? "dark bg-[#212121]" : "light bg-white"} bg-white p-0 m-0`}>
        <LandingFirstPage />
      </div>
    </div>
  );
}
