"use client"
import Link from "next/link";
import { useSelector } from "../../redux/store/store";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";
export default function AboutUS() {
    const state = useSelector((state)=>state.Theme);
    return (
        <div className={`${state ? "dark bg-[#212121]" : "bg-white"} min-h-screen h-fit p-6 tracking-wider`}>
            <h1 className="flex justify-center font-bold text-[#F6855B] text-4xl">About Us</h1>
            <div className="flex justify-center gap-4">
                <div className="w-[60%] pl-10 pt-6">
                    <h1 className=" text-[#F6855B] flex justify-start font-semibold text-2xl">Welcome to PetNest</h1>
                    <h2 className="flex justify-start text-[#414141] dark:text-white">At PetNest, we are dedicated to improving the lives of animals in need. Our mission is to rescue, rehabilitate, and find loving homes for abandoned and abused pets. We believe that every animal deserves a second chance.</h2>
                    <h3 className="flex justify-start text-[#F6855B] font-bold text-xl mt-2">Our Mission</h3>
                    <h2 className="flex justify-start text-[#414141] dark:text-white">We strive to create a world where every animal is loved and cared for. Through our efforts, we provide shelter, medical care, and support to animals who have nowhere else to turn.</h2>
                    <h3 className="flex justify-start text-[#F6855B] font-bold text-xl mt-2">How You Can Help</h3>
                    <h2 className="flex justify-start text-[#414141] dark:text-white font-bold text-md mt-2 ">Donate to Help Animals in Need :</h2>
                    <h1 className=" text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://www.aspca.org/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">ASPCA:</span></Link> The American Society for the Prevention of Cruelty to Animals provides crucial support for animal welfare.</h1>
                    <h1 className="text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://www.humanesociety.org/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">Humane Society:</span> </Link>Donate to support their mission of protecting animals and promoting their welfare.</h1>
                    <h1 className=" text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://petfinderfoundation.org/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">Petfinder Foundation: </span></Link> Helps shelters and rescues care for homeless pets.</h1>
                    <h2 className="flex justify-start text-[#414141] dark:text-white font-bold text-md mt-2 ">Adopt a Furry Friend: :</h2>
                    <h1 className=" text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://www.adoptapet.com/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">Adopt a Pet:</span></Link> Search for adoptable pets in your area.</h1>
                    <h1 className="text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://www.petfinder.com/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">Petfinder:</span></Link> rowse thousands of adoptable pets and find your perfect match.</h1>
                    <h1 className=" text-[#414141] dark:text-white text-sm mt-2 pl-10"><Link href={"https://www.hasindia.org/"}><span className="text-[#F6855B] text-md font-bold cursor-pointer underline">The Humane Animal Society :</span></Link> A great resource for finding shelter pets in need of homes.</h1>
                    <div className="flex justify-center mt-4 text-4xl text-[#F6855B] gap-4 ">
                        <Link href={"https://www.instagram.com/aditya946verma/"}><FaInstagramSquare className="cursor-pointer" /></Link>
                        <Link href={"https://www.linkedin.com/in/adityaverma7099/"}><IoLogoLinkedin className="cursor-pointer" /></Link>
                        <Link href={"https://x.com/KaplishAditya"}><BsTwitterX className="cursor-pointer" /></Link>
                        <Link href={"https://github.com/AadiVerma"}><FaGithubSquare className="cursor-pointer" /></Link>
                    </div>
                </div>
                <div className="w-[40%] flex justify-center items-center relative">
                    <Image src={"/Dog.png"} height={150} width={280} alt="Pet Image" />
                    <Image src={"/Dog.png"} height={150} width={150} alt="Pet Image" className="absolute left-10 bottom-5" />
                </div>
            </div>
        </div>
    )
}