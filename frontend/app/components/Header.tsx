"use client"
import Image from "next/image";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { SetStateAction, Dispatch } from "react";
export default function Header({ setIsDarkMode, isDarkMode }: { setIsDarkMode: Dispatch<SetStateAction<boolean>>, isDarkMode: boolean }) {
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className="p-2 w-[100%] tracking-widest">
            <div className="flex items-center justify-between p-4">
                <div className="flex gap-2 cursor-pointer items-center">
                    <Image src="/Paws.png" height={10} width={20} alt="Paws Image" className="h-[30px] w-[30px]" />
                    <h1 className="text-2xl font-bold text-[#F6855B] dark:text-white">PETNEST</h1>
                </div>
                <div className="dark:text-white text-[#F6855B] flex-col justify-center items-center">
                    <div className="flex gap-4 text-[#F6855B] dark:text-white items-center">
                        <h1 className="cursor-pointer hover:underline underline-offset-4 font-semibold hover:text-[#F6855B]">HOME</h1>
                        <h1 className="cursor-pointer hover:underline underline-offset-4 font-semibold hover:text-[#F6855B]">DONATE</h1>
                        <h1 className="cursor-pointer hover:underline underline-offset-4 font-semibold hover:text-[#F6855B]">ADOPT</h1>
                        <h1 className="cursor-pointer hover:underline underline-offset-4 font-semibold hover:text-[#F6855B]">ABOUT US</h1>
                        <h1 className="cursor-pointer hover:underline underline-offset-4 font-semibold hover:text-[#F6855B]">CONTACT US</h1>
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex-col justify-center">
                        <div className="flex gap-2 items-center">
                            <MdSunny className={`${isDarkMode ? "text-gray-400" : "text-[#F6855B]"} text-2xl`} />
                            <div onClick={toggleDarkMode} className="cursor-pointer flex items-center">
                                <input type="checkbox" className="sr-only peer" checked={isDarkMode} readOnly />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:[#F6855B] dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F6855B]"></div>
                                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                            </div>
                            <IoIosMoon className={`${isDarkMode ? "text-[#F6855B]" : "text-gray-500"} text-2xl`} />
                        </div>
                    </div>
                    <button className="pl-4 pr-4 p-2 rounded border-2 border-[#F6855B] hover:bg-[#F6855B] hover:text-white text-[#F6855B]">Log In</button>
                    <button className="pl-4 pr-4 p-2 bg-[#F6855B] rounded hover:bg-transparent border-2 border-[#F6855B] text-white hover:text-[#F6855B]">Sign Up</button>
                </div>

            </div>
        </div>
    )
}