"use client"
import { useSelector } from "../../redux/store/store";
import animationData from '../../Cat_Animation.json'
import Lottie from 'lottie-react';
import { useRouter} from 'next/navigation';
import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from '../../redux/store/store'
import {addauth} from '../../redux/Slice/AuthSlice'
export default function SignUp() {
    const state = useSelector((state)=>state.Theme);
    const router = useRouter();
    const dispatch=useDispatch(); 
    const [name,setname]=useState<string>('');
    const [email,setemail]=useState<string>('');
    const [password,setpassword]=useState<string>('');
    const [phone,setphone]=useState<string>('');
    const [address,setaddress]=useState<string>('');
    const handleSubmit=async ()=>{
        console.log(name,email,password,phone,address);
        try{
            const user=await axios.post(`https://petnest.onrender.com/user`,{
                name,
                email,
                password,
                phone,
                address
            })
            router.push("/");
            localStorage.setItem("token",user.data._id);
            dispatch(addauth(true))
        }catch(error){
            console.log(error);
        }
        setname("");
        setemail("");
        setpassword("");
        setphone("");
        setaddress("");
    }
    return (
        <div className={`${state ? "dark bg-[rgb(33,33,33)]" : "bg-white"}  min-h-screen h-fit tracking-wider p-10 `}>
            <div className="flex ml-[20%]">
                <div className="h-44 w-44">
                <Lottie animationData={animationData} />
                </div>
                <div className="w-[50%] h-fit p-10 flex justify-center place-items-center border-2 rounded-md border-[#F6855B]">
                    <div className="w-[100%]">
                    <h1 className="flex justify-center text-2xl font-bold mb-4 text-[#F6855B]">SignUp</h1>
                    <div className="flex justify-center">
                        <input placeholder="Name" onChange={(e)=>{
                            setname(e.target.value)
                        }} value={name} className="border-2 dark:text-white border-[#F6855B] bg-transparent outline-none rounded-md p-2 w-[60%]" />
                        </div>
                        <div className="flex justify-center">
                            <input placeholder="Email" type="email" onChange={(e)=>{
                            setemail(e.target.value)
                        }} value={email} className="border-2  dark:text-white bg-transparent border-[#F6855B] outline-none rounded-md p-2 w-[60%] mt-4" />
                        </div>   
                        <div className="flex justify-center">
                            <input placeholder="Password" onChange={(e)=>{
                            setpassword(e.target.value)
                        }} value={password} type="password" className="border-2  dark:text-white bg-transparent border-[#F6855B] outline-none rounded-md p-2 w-[60%] mt-4" />
                        </div>   
                        <div className="flex justify-center">
                            <input placeholder="Phone" onChange={(e)=>{
                            setphone(e.target.value)
                        }} value={phone} className="border-2  dark:text-white bg-transparent border-[#F6855B] outline-none rounded-md p-2 w-[60%] mt-4" />
                        </div>   
                        <div className="flex justify-center">
                            <input placeholder="Address" onChange={(e)=>{
                            setaddress(e.target.value)
                        }} value={address}  className="border-2  dark:text-white bg-transparent border-[#F6855B] outline-none rounded-md p-2 w-[60%] mt-4" />
                        </div>   
                        <div className="flex justify-center mt-4 ">
                        <button className="p-2 rounded-lg bg-[#F6855B] hover:bg-[#f57d52] text-white w-[60%]" onClick={handleSubmit}>Sign Up</button>  
                        </div>
                        <h1 className="flex justify-center mt-1 dark:text-white">Already have an account? <span className="underline text-[#F6855B] hover:text-[#f57d52] cursor-pointer ml-1" onClick={()=>{
                            router.push("/login")
                        }}> Log In</span></h1>  
                    </div>            
                </div>
            </div>
        </div>
    )
}