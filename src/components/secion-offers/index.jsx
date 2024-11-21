import { ContainerWrapper } from "../container-wrapper"

export const SecionOffers = () => {
  return (
    <section className="bg-white   w-full ">
        <ContainerWrapper>
         <div className="">
         <div className="flex flex-col gap-[7px]  justify-center items-center pt-[90px]">
            <p className="text-[15px] leading-[22.5px]  tracking-[3px] text-center ">offers</p>
            <p className="text-[40px] leading-[56px] tracking-[0.2px] text-center font-light xl:w-[300px] ">Our Offer dishes</p>
            <p className="text-[20px] leading-[30px] tracking-[0.2px] text-center xl:w-[800px]">Our chefs create melt-in-your-mouth dishes that'll satiate even the fussiest eaters now 
              the dishes are in offers use it based on hunger.
            </p>
          </div>
         </div>
        
        </ContainerWrapper>
    </section>
  )
}
