"use client"
import Image from "next/image";

export default function Petcard() {
    return (
        <div className="relative border-2 border-[#fbf8c5] rounded-md">
            <div className="bg-[#FFFDD0] w-fit h-fit p-10 rounded ">
                <Image src={"/Dog.png"} height={200} width={150} alt="Animals.png" />
            </div>
            <div className="text-black bg-white rounded p-1 absolute bottom-0 w-full">
                <h1 className="text-2xl font-bold flex justify-center text-[#F6855B]">Jack</h1>
                <div className="flex justify-between">
                    <h1 className="text-sm">German Shefard</h1>
                    <h1 className="text-sm">Birth: 2022</h1>
                </div>
                <div className="flex justify-between mt-1">
                    <h1 className="text-sm">Male</h1>
                    <button className="p-1 pl-4 pr-4 rounded bg-[#F6855B] border-2 border-[#F6855B] hover:bg-transparent hover:text-[#F6855B] text-white text-sm font-medium">Adopt</button>
                </div>
            </div>
        </div>
    )
} 