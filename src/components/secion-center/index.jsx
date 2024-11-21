import { ContainerWrapper } from "../container-wrapper";
import zip from '../../assets/icons/zip.svg';
import dast from '../../assets/icons/dast.svg';
import lim from '../../assets/icons/lim.svg';

export const SecionCenter = () => {
  return (
    <section className="bg-primary-blue  w-full mt-[120px]">
        <ContainerWrapper>
            <div className="flex flex-col xl:flex-row gap-[30px]  lg:gap-[250px] pt-[100px] lg:pt-[200px]">
                <div className="text-white-1 text-center lg:text-left">
                    <p className="text-[20px] lg:text-[25px] leading-[22.5px] mt-[10px] font-normal tracking-[3px]">What we offer</p>
                    <p className="text-[30px] lg:text-[40px] leading-[56px] font-normal mt-[20px] lg:mt-[30px] tracking-[0.2px]">Our Great Services</p>
                    <p className="text-[16px] lg:text-[20px] leading-[30px] w-full lg:w-[438px] mt-[20px] font-normal tracking-[0.2px]">The atmosphere sets the stage. It’s about more than just a dining room away from your home. Food takes the spotlight as guests enjoy.</p>
                </div>
                <div className="flex flex-wrap justify-center  lg:justify-start gap-[20px] lg:gap-[40px]">
                    <div className="border-solid border-[15px] border-[#323841] w-[200px] lg:w-[254px] text-white-1 h-[200px] lg:h-[235px] flex flex-col justify-center items-center">
                        <img className=" lg:pl-[10px] pt-[20px] lg:pt-[35px]" src={zip} alt="" />
                        <p className="text-[18px] lg:text-[25px] leading-[35px] tracking-[0.2px] pt-[10px] text-center">Opened 24/7</p>
                    </div>
                    <div className="border-solid border-[15px] border-[#323841] w-[200px] lg:w-[254px] text-white-1 h-[200px] lg:h-[235px] flex flex-col justify-center items-center">
                        <img className=" lg:pl-[10px] pt-[20px] lg:pt-[35px]" src={dast} alt="" />
                        <p className="text-[18px] lg:text-[25px] leading-[35px] tracking-[0.2px] pt-[10px] text-center">Special Menus</p>
                    </div>
                    <div className="border-solid border-[15px] border-[#323841] w-[200px] lg:w-[254px] text-white-1 h-[200px] lg:h-[235px] flex flex-col justify-center items-center">
                        <img className=" lg:pl-[10px] pt-[20px] lg:pt-[35px]" src={lim} alt="" />
                        <p className="text-[18px] lg:text-[25px] leading-[35px] tracking-[0.2px] pt-[10px]  text-center">Home Delivery</p>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    </section>
  );
};
