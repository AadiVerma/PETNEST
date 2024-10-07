"use client"
import Image from "next/image";

export default function Petcard({name,breed,birth,sex,image}:{name:string,breed:string,birth:string,sex:string,image:string}) {
    return (
        <div className="relative border-2 border-[#fbf8c5] rounded-md">
            <div className="bg-[#FFFDD0] h-[280px] w-[250px] p-10 rounded ">
                <Image src={image} height={300} width={150} alt="Animals.png" className="min-h-[150px] min-w-[150px]" />
            </div>
            <div className="text-black bg-white rounded p-1 absolute bottom-0 w-full">
                <h1 className="text-2xl font-bold flex justify-center text-[#F6855B]">{name}</h1>
                <div className="flex justify-between">
                    <h1 className="text-sm">{breed}</h1>
                    <h1 className="text-sm">Birth: {birth}</h1>
                </div>
                <div className="flex justify-between mt-1">
                    <h1 className="text-sm">{sex}</h1>
                    <button className="p-1 pl-4 pr-4 rounded bg-[#F6855B] border-2 border-[#F6855B] hover:bg-transparent hover:text-[#F6855B] text-white text-sm font-medium">Adopt</button>
                </div>
            </div>
        </div>
    )
} 