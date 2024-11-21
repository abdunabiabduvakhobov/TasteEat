import { ContainerWrapper } from "../container-wrapper"
import { Slider } from "./slider"


export const ClinetsComments = () => {
  return (
    <section className="bg-primary-blue h-screen w-full mt-[300px] ">
        <ContainerWrapper>
            <div className="text-white-2 pt-[200px]">
                <p className="text-[15px] leading-[22.5px] tracking-[3px]">Testimonial</p>
                <p className="text-[40px] font-light leading-[56px] tracking-[0.2px]">our clients say</p>
                <p className="font-light text-[20px] leading-[30px] tracking-[0.2px]">We love to hear from customers, so please leave a comment or say hello in an email.</p>
            </div>
            <Slider/>
        </ContainerWrapper>
    </section>
    
  )
}

