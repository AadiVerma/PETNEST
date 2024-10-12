"use client"
import { useSelector ,useDispatch} from "../../redux/store/store";
import animationData from '../../Cat_Animation.json'
import Lottie from 'lottie-react';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import axios from 'axios';
import {addauth}  from '../../redux/Slice/AuthSlice';
export default function Login() {
    const themestate = useSelector((state)=>state.Theme);
    const router=useRouter();
    const [username,setUsername]=useState<string>('');
    const [password,setPassword]=useState<string>('');
    const  dispatch=useDispatch();
    const handleSubmit=async()=>{
        setPassword("");
        setUsername("");
        try{
            const user=await axios.get(`https://petnest.onrender.com/user/${username}/${password}`);
            if (user.data) {
                localStorage.setItem("token", user.data._id);
                dispatch(addauth(true));
                router.push("/");
            } else {
                console.error("Login failed: No token returned");
            }
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div className={`${themestate ? "dark bg-[rgb(33,33,33)]" : "bg-white"}  min-h-screen h-fit tracking-wider p-10`}>
            <div className="flex ml-[20%]">
                <div className="h-44 w-44">
                <Lottie animationData={animationData} />
                </div>
                <div className="w-[50%] h-fit p-10 flex justify-center place-items-center border-2 rounded-md border-[#F6855B]">
                    <div className="w-[100%]">
                    <h1 className="flex justify-center text-2xl font-bold mb-4 text-[#F6855B]">Login</h1>
                    <div className="flex justify-center">
                        <input placeholder="Name" value={username}  onChange={(e)=>{
                                setUsername(e.target.value)
                            }} className="border-2 dark:text-white border-[#F6855B] bg-transparent outline-none rounded-md p-2 w-[60%]" />
                        </div>
                        <div className="flex justify-center">
                            <input placeholder="Password"value={password} type="password" onChange={(e)=>{
                                setPassword(e.target.value)
                            }} className="border-2  dark:text-white bg-transparent border-[#F6855B] outline-none rounded-md p-2 w-[60%] mt-4" />
                        </div>   
                        <div className="flex justify-center mt-4 ">
                        <button className="p-2 rounded-lg bg-[#F6855B] hover:bg-[#f57d52] text-white w-[60%]" onClick={handleSubmit}>Login</button>  
                        </div>
                        <h1 className="flex justify-center mt-1 dark:text-white">Don`t have an account? <span className="underline text-[#F6855B] hover:text-[#f57d52] cursor-pointer ml-1" onClick={()=>{
                            router.push("/signup")
                        }}> Sign Up</span></h1>  
                    </div>            
                </div>
            </div>
        </div>
    )
}