"use client"
import { FaAngleDown } from "react-icons/fa6";
import 'animate.css';
import { useState } from "react";
export default function Header () {
    const [myAccount, setMyAccount] = useState(true)
    
      return(
<>
    <div className="bg-white pl-10 pt-3 border-b-2 w-90%">
      <p className="">Welcome</p>
      <div className="bg-gray-400">
      {myAccount&& <div className="border-2 border-white bg-black w-28 h-40 text-white flex flex-col " onMouseEnter={()=>{setMyAccount(true)}} onMouseLeave={()=>setMyAccount(false)}  >
        <button className="hover:text-red-500">Wishlist</button>
        <button className="hover:text-red-500">Login</button>
        <button className="hover:text-red-500">Register</button>
        <button className="hover:text-red-500" onMouseEnter={()=>{setMyAccount(true)}} onMouseLeave={()=>setMyAccount(false)}>My Account</button></div>}
      </div>
    </div>
   <div className=" flex bg-white  h-24">
      <h1 className="pt-7 text-3xl pl-10">Phuler</h1>
    <div className="flex pt-8 pl-96 text-xl">
      <button className="pr-5 hover:text-red-500 cursor-pointer">HOME </button><FaAngleDown/>
      <button className="pr-5 hover:text-red-500 cursor-pointer">ABOUT</button>
      <button className="pr-5 hover:text-red-500 cursor-pointer">SHOP</button>
      <button className="pr-5 hover:text-red-500 cursor-pointer">BLOG</button>
      <button className="pr-5 hover:text-red-500 cursor-pointer">PAGES</button>
     
    </div>
   </div>
   <div className="mt-56 ml-12 ">
      <h1 className=" text-red-500 text-3xl pb-3 animate__animated animate__backInLeft">New Arrivals</h1>
      <h1 className="text-5xl pb-3 animate__animated animate__backInLeft">For MOTHER's DAY</h1>
      <h4 className="pb-3 animate__animated animate__backInLeft">Exclusive Offer -10% Off This Week</h4>
      <button className="bg-red-500 animate__animated animate__backInLeft py-2 px-4 rounded text-white cursor-pointer hover:bg-white hover:text-red-500 ">SHOP NOW</button>
   </div>
   </>
    )
}