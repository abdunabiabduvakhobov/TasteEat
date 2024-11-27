import { ContainerWrapper } from "../container-wrapper"
import a from '../../assets/icons/kno.svg';
import b from '../../assets/icons/inst.svg';
import c from '../../assets/icons/feyiz.svg';
import d from '../../assets/icons/twit.svg';
import e from '../../assets/icons/piter.svg';

export const SecionEnd = () => {
  return (
   <section className="bg-primary-blue w-full   xl:pt-[100px] pt-[30px]">
    <ContainerWrapper>
        <div>
            <div className="">
                <div className="flex justify-between xl:gap-0 gap-[20px] items-center flex-wrap   ">
                    <p className="font-normal text-[22px] leading-[33px] tracking-[0.2px] pl-[130px] xl:pl-0 text-white">#TheTastEat</p>
                    <img src={a} alt="" />
                    <div className="flex gap-[12px] xl:pl-0 pl-[120px] ">
                    <img src={b} alt="" />
                    <img src={c} alt="" />
                    <img src={d} alt="" />
                    <img src={e} alt="" />
                    </div>
                </div>
               <div className="flex justify-between pt-[40px] xl:flex-row flex-col">
               <p className="text-[15px] font-normal leading-[21px] tracking-[3px] xl:text-start text-center  w-[100px] xl:pl-0 pl-[150px]   text-white">Contact</p>
               <p className="xl:w-[400px] text-[20px] leading-[30px] tracking-[0.2px] text-center text-white w-[330px] xl:pl-0 pl-[20px]   ">Join our mailing list for updates Join our mailing list for updates,</p>
               <p className="text-[15px] leading-[21px] tracking-[3px] text-white xl:pl-0 pl-[120px]">Working Hours</p>
               </div>
               <div className="flex justify-between flex-wrap pt-[30px] ">
                <div >
                <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] text-white xl:pl-0 pl-[100px] ">5 Rue Dalou, 75015 Paris</p>
               
                <p className="text-[18px] font-normal leading-[30px] tracking-[0.2px] xl:pl-0 pl-[130px] text-amber-800 sm:text-[15px] md:text-[18px] lg:text-[22px] xl:text-[24px] sm:w-full">
                </p>
                <p className="xl:pl-0 pl-[130px]  text-amber-800">+123 456 789</p>
                <p className="text-[19px] font-normal leading-[30px] xl:pl-0 pl-[110px] tracking-[0.2px] text-amber-800 sm:text-[15px] sm:w-full">josefin@mail.com</p>
                </div>
                 <div className="flex pl-[40px] xl:w-[600px] w-[400px] xl:pt-[0px] pt-[20px]">
                 <input className="border-2 xl:w-[340px] xl:h-[70px] w-[200px] bg-primary-blue pl-[10px]" type="text" placeholder="email" />
                 <button className="bg-white xl:w-[190px] h-[70px] w-[100px]">Subscribe</button>
                 </div>
                 <div className="flex xl:pl-0 pl-[60px] xl:pt-0 pt-[20px]">
                    <div >
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

