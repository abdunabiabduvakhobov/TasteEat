import { SecondaryButton } from "../secondaryButton"
import a from '../../assets/icons/kno.svg';
import { PrimyeButton } from "../primyeButton";
import b from '../../assets/icons/inst.svg';
import c from '../../assets/icons/feyiz.svg';
import d from '../../assets/icons/twit.svg';
import e from '../../assets/icons/piter.svg';
import x from '../../assets/icons/iks.png'; 
import { Hamburgermenu } from "../../assets/icons/hamburger-menu";
import { useState } from "react";



 export  const Navbar = () => {
    const [menu,setMenu] = useState('hidden')
  return (
     <div className="">
         <div className="flex justify-between pt-4  md:flex-row flex-col gap-6 items-center  ">
        <SecondaryButton>Call-123 456 789</SecondaryButton>
         <div><img className="" src={a} alt="" /></div>
         <PrimyeButton>Reservation</PrimyeButton>
        </div>
        <div className={`${menu} absolute top-0  left-0 w-full h-screen z-50 bg-[#292E36]`}>
        <nav className="h-full">
                <ul className="flex flex-col items-center w-full justify-center h-full gap-6 ">
                    <li><a className="text-amber-800" href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Menu</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                    <img onClick={()=>setMenu('hidden')} className="w-10 " src={x} alt="" />
                </ul>
            </nav>
        </div>
        <hr className="mt-7" />
        
        <div className="flex justify-between  items-center bg-[#292E36]  ">
            <Hamburgermenu onClick={()=>setMenu('block')} className={"fill-[#9e8866] w-5 h-10 md:hidden pt-4"} />
            <nav className="hidden md:block">
                <ul className="flex gap-16 text-[16px] items-center text-white pt-4  ">
                    <li><a className="text-amber-800" href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Menu</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact Us</a></li>
                    
                </ul>
            </nav>
            <div className="flex gap-6 pt-4 ">
                <img src={b} alt="" />
                <img src={c} alt="" />
                <img src={d} alt="" />
                <img src={e} alt="" />
                
            </div>
            
        </div>
        <hr className="mt-4"  />
     </div>
  )
}






















































































