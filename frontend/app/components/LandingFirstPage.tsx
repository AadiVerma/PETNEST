import Image from "next/image";
import { useRouter } from "next/navigation";
export default function LandingFirstPage() {
    const router=useRouter();
    return (
        <div className="w-full h-full tracking-widest flex justify-center place-items-center pt-10 dark:bg-[#212121]">
            <div className="w-[60%] flex-col justify-center place-items-center p-20">
                <h1 className="text-[#414141] font-bold text-5xl dark:text-white"><span className="text-[#F6855B]">Every paw,</span> hoof or feather tells a story. Adopt, give them a new chapter full of love .</h1>
                <h2 className="mt-4 text-lg font-medium dark:text-white">Every pet deserves a loving home. Help us make a difference – adopt, donate, and give them a second chance at happiness.</h2>
                <div className="w-[100%] flex justify-start mt-4 gap-5">
                    <button className="pl-8 pr-8 p-2 rounded border-2 border-[#F6855B] hover:bg-[#F6855B] hover:text-white text-[#F6855B]" onClick={()=>{
                        router.push("/Adoption")
                    }}>ADOPT</button>
                    <button className="pl-8 pr-8 p-2 bg-[#F6855B] rounded hover:bg-transparent border-2 border-[#F6855B] text-white hover:text-[#F6855B]" onClick={()=>{
                        router.push("/Donation")
                    }}>DONATE</button>
                </div>
            </div>
            <div className="w-[40%] flex justify-center items-center relative">
                <Image src={"/Dog.png"} height={150} width={280} alt="Pet Image" />
                <Image src={"/Dog.png"} height={150} width={150} alt="Pet Image" className="absolute left-10 bottom-5" />
            </div>
        </div>
    )
}