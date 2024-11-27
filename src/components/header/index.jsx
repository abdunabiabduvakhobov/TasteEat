import { Navbar } from "./navbar"
import p from '../../assets/images/img.svg';


  export const Header = () => {
  return (
    <header className="bg-[#292E36]">
        <div className="container mx-auto ">
        <Navbar />
        <div className="flex justify-between md:flex-row flex-col gap-7 items-center ">
          <div className="group  duration-300     ">
            <p  className="font-sans   text-white leading-[50px]   lg:text-start    lg:w-[600px] sm:mt-20 text-[50px] text-center mt-11    sm:text-[10px] sm:leading-[100px]  sm:w-[460px]  sm:mx-auto  lg:text-[100px] lg:leading-[110px]">Welcome to Restaurant</p>
            <p  className="font-sans text-[20px] text-white leading-[30px] text-center lg:text-start   lg:w-[600px]   mt-10 sm:w-[600px] sm:mx-auto ">The people, food and the prime locations make the perfect place good friends & family to come together and have great time.</p>
          <div className="text-center lg:text-start">
          <button className="font-normal text-[16px]  leading-[33px]     hover:bg-[#E1B168]  hover:text-white  duration-300  py-5 px-[57px] border-2 border-[#E1B168] text-[#E1B168] mt-10">View Menu</button>
          </div>
          </div>
          <div>
            <img className="mt-10" src={p} alt="" />
          </div>
        </div>
        </div>
        
    </header>
    
  )
}
             