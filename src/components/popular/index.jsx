import { ContainerWrapper } from "../container-wrapper"
import { Propis } from "./propis"


export const Popular = () => {
  return (
    <section className="bg-white   w-full ">
        <ContainerWrapper>
         <div className="">
         <div className="flex flex-col gap-[7px]  justify-center pt-[100px] items-center ">
            <p className="text-[15px] leading-[22.5px]  tracking-[3px] text-center ">menu</p>
            <p className="text-[40px] leading-[56px] tracking-[0.2px] text-center font-light xl:w-[300px] ">Popular Dishes</p>
            <p className="text-[20px] leading-[30px] tracking-[0.2px] text-center xl:w-[800px]">There is a game between the waiters in restaurant to see who serves the food to
            each table fastest. That led to attempting the Guinness Record.
            </p>
          </div>
         </div>
         <Propis/>
        </ContainerWrapper>
    </section>
  )
}
