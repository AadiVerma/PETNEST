"use client"
import Petcard from "../components/PetCard";
import { useSelector } from "../../redux/store/store";
export default function DonationCard() {
    const state=useSelector();
    return (
        <div className={`${state? "dark bg-[#212121]":"bg-white"} flex justify-center place-items-center min-h-screen h-fit tracking-wider flex-wrap gap-10 p-10`}>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
            <Petcard/>
        </div>
    )
}