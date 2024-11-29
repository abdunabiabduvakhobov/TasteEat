import { ContainerWrapper } from "../container-wrapper"
import a from '../../assets/icons/kno.svg';
import b from '../../assets/icons/inst.svg';
import c from '../../assets/icons/feyiz.svg';
import d from '../../assets/icons/twit.svg';
import e from '../../assets/icons/piter.svg';

export const SecionEnd = () => {
  return (
   <section className="bg-primary-blue w-full xl:pt-[100px] pt-[30px]">
    <ContainerWrapper>
        <div className="">
            <div className="xl:flex flex-col ]">
                <div className="xl:flex justify-between xl:gap-0 gap-[20px] items-center flex-row   ">
                    <p className="font-normal text-[22px] leading-[33px] xl:mt-0 mb-7 tracking-[0.2px] w-[110px] mx-auto xl:mx-0 text-white">#TheTastEat</p>
                    <img className="xl:w-[340px] w-[360px] mx-auto" src={a} alt="" />
                    <div className="flex gap-[12px] xl:w-[150px] xl:mt-0 mt-7  w-[140px] xl:mx-0 mx-auto ">
                    <img src={b} alt="" />
                    <img src={c} alt="" />
                    <img src={d} alt="" />
                    <img src={e} alt="" />
                    </div>
                </div>
               <div className="flex justify-between pt-[40px] xl:flex-row flex-col  ">
               <p className="text-[15px]  font-normal leading-[21px] tracking-[3px] xl:w-[100px] w-[80px]  mx-auto xl:mx-0   text-white">Contact</p>
               <p className=" text-[20px]  xl:mt-0 mt-[10px]  leading-[30px] tracking-[0.2px] text-white w-[300px] xl:mx-0  mx-auto text-center xl:text-start   ">Join our mailing list for updates Join our mailing list for updates,</p>
               <p className="text-[15px]   xl:mt-0 mt-7 leading-[21px] tracking-[3px] text-white  xl:mx-0  mx-auto text-center xl:text-start ">Working Hours</p>
               </div>
               <div className="flex justify-between pt-[40px] xl:flex-row flex-col ">
                <div >
                <p className="text-[20px]  font-normal leading-[30px] tracking-[0.2px] text-white xl:w-[300px] w-[400px]  xl:mx-0  mx-auto   xl:text-start text-center ">5 Rue Dalou, 75015 Paris</p>
               
                
                <p className="xl:w-[300px] w-[400px] xl:mt-0 mt-[10px]  xl:mx-0  mx-auto   xl:text-start text-center   text-amber-800">+123 456 789</p>
                <p className="text-[19px] font-normal xl:mt-0 mt-[10px] leading-[30px]  tracking-[0.2px] xl:w-[50px] w-[400px] xl:mx-0 mx-auto   xl:text-start text-center  text-amber-800 ">josefin@mail.com</p>
                </div>
                 <div className="flex  mx-auto xl:mx-0  text-center xl:w-[600px] w-[300px] xl:pt-[0px] pt-[20px]">
                 <input className="border-2 xl:w-[340px] xl:h-[70px] w-[200px] bg-primary-blue pl-[10px]" type="text" placeholder="email" />
                 <button className="bg-white xl:w-[190px] h-[70px] w-[100px]">Subscribe</button>
                 </div>
                 <div className="flex  w-[250px] xl:mx-0 xl:mt-0 mt-[10px]  mx-auto text-center xl:text-start  xl:pt-0 pt-[20px]">
                    <div  >
                    <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#E1B168]">Mon – Fri:</p>
                     <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#E1B168]">Sat:</p>
                     <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-[#E1B168]">Sun:</p>
                    </div>
                     <div>
                        <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-white">7.00am – 6.00pm</p>
                        <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-white">7.00am – 6.00pm</p>
                        <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-white">8.00am – 6.00pm</p>
                     </div>
                 </div>
               </div>
            </div>
        </div>
    </ContainerWrapper>
   </section>
  )
}

