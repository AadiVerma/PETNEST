"use client"
import Petcard from "../components/PetCard";
import { useSelector } from "../../redux/store/store";
export default function DonationCard() {
    const state=useSelector();
    return (
        <div className={`${state? "dark bg-[#212121]":"bg-white"} min-h-screen h-fit tracking-wider p-10`}>
            <h1 className="text-3xl font-bold  text-[#F6855B] flex justify-center">Meet The Animals</h1>
            <h2 className="flex justify-center mt-2 text-4xl font-semibold text-[#414141] dark:text-white"> Waiting for Adoption</h2>
            <div className="flex justify-center place-items-center gap-10 flex-wrap mt-10">
                <Petcard name={"Tommy"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Dog.png"} type={"Adopt"}/>
                <Petcard name={"Shadow"} breed={"Abyssinian"} sex={"Female"} birth={"2023"} image={"/Cat3.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Cat.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Dog.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Cat3.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Dog.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Dog.png"} type={"Adopt"}/>
                <Petcard name={"Jack"} breed={"German Shefard"} sex={"Male"} birth={"2022"} image={"/Cat.png"} type={"Adopt"}/>
            </div>
        </div>
    )
}