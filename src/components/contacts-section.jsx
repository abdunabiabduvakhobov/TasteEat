import { Blaktot } from "../assets/icons/blaktot"
import { Location } from "../assets/icons/location"
import { Svich } from "../assets/icons/svich"
import { ContainerWrapper } from "./container-wrapper"


export const ContactsSection = () => {
  return (
    <section className="bg-white-1 pt-[100px] pb-[60px]">
     <ContainerWrapper>
        <div className="flex  xl:items-center  flex-col gap-4 md:flex-row md:flex-wrap items-start xl:justify-between" >
            <div className="flex items-center gap-2 xl:gap-5">
                <a href="#" className="bg-primary-blue p-[15px] rounded-full">
                 <Location className={'w-[30px] h-[30px]  xl:w-auto xl:h-auto'}/>
                </a>
                <div>
                    <p className="text-primary-blue xl:text-[30px] xl:leading-[39px] text-[22px] tracking-[0.2px] font-normal">Locate Us</p>
                     <p className="text-primary-blue tracking-[0.2px] font-normal xl:text-[20px] text-[17px] xl:leading-[30px]">Riverside 25, San Diego, California</p>
                </div>
            </div>
            <div  className="flex items-center gap-2 xl:gap-5">
                <a href="#" className="bg-primary-blue p-[15px] rounded-full">
                 <Svich className={'w-[30px] h-[30px]  xl:w-auto xl:h-auto'}/>
                </a>
                <div>
                    <p className="text-primary-blue xl:text-[30px] xl:leading-[39px] text-[22px] tracking-[0.2px] font-normal">Open Hours</p>
                     <p className="text-primary-blue tracking-[0.2px] font-normal xl:text-[20px] text-[17px] xl:leading-[30px]">Mon To Fri 9:00 AM - 9:00 PM</p>
                </div>
            </div>
            <div  className="flex items-center gap-2 xl:gap-5">
                <a href="#" className="bg-primary-blue p-[15px] rounded-full">
                 <Blaktot className={'w-[30px] h-[30px]  xl:w-auto xl:h-auto'}/>
                </a>
                <div>
                    <p className="text-primary-blue xl:text-[30px] xl:leading-[39px] text-[22px] tracking-[0.2px] font-normal">Reservation</p>
                     <p className="text-primary-blue tracking-[0.2px] font-normal xl:text-[20px] text-[17px] xl:leading-[30px]">restaurantate@gmail.com</p>
                </div>
            </div>
        </div>
     </ContainerWrapper>
    </section>
  )
}
