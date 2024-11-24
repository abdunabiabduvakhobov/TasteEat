import { ContainerWrapper } from "../container-wrapper"


export const SecionNews = () => {
  return (
   <section className=" w-full ">
  <ContainerWrapper>
       <div>
        <div className="xl:flex flex-col gap-[20px] pt-[70px] ">
          <p className="font-normal text-[15px] leading-[22.5px] tracking-[3px] text-center">Blog</p>
          <p className="font-normal text-center text-[40px] tracking-[0.2px] leading-[56px]">Be First Who Read News</p>
          <p className="text-[20px] font-normal leading-[30px] text-center mx-auto tracing-[0.2px] xl:w-[500px]">Explore the latest stories about our dishes, offers,events and future plans here.</p>
        </div>
       </div>
  </ContainerWrapper>
   </section>
  )
}
