import { ContainerWrapper } from "../container-wrapper";

export const Footer = () => {
  return (
    <footer className="bg-primary-blue w-full pt-[40px]">
      <ContainerWrapper>
        <hr className="" />
        <div className="flex flex-col justify-between xl:ml-[0px] ml-[30px] md:flex-row pt-[20px]">
          
          <nav>
            <ul className="flex flex-col md:flex-row  gap-[10px] md:gap-[20px] mb-[20px] md:mb-0">
              <li className="text-[18px] font-normal xl:text-start text-center leading-[30px] tracking-[0.2px] text-white">
                © Copyright - TastEat | Designed by
              </li>
              <li className="text-[18px] font-normal leading-[30px] tracking-[0.2px] xl:text-start text-center text-[#E1B168]">
                VictorFlow - Powered by
              </li>
              <li className="text-[18px] font-normal leading-[30px] xl:text-start text-center  tracking-[0.2px] text-[#E1B168]">
                Webflow
              </li>
            </ul>
          </nav>

        
          <div className="flex flex-col md:flex-row  justify-end gap-[10px] md:gap-[20px]">
            <ol className="text-[18px] font-normal xl:text-start text-center leading-[30px] tracking-[0.2px] text-[#E1B168]">
              Styleguide
            </ol>
            <ol className="text-[18px] font-normal xl:text-start text-center leading-[30px] tracking-[0.2px] text-[#E1B168]">
              Licenses
            </ol>
            <ol className="text-[18px] font-normal leading-[30px] xl:text-start text-center tracking-[0.2px] text-[#E1B168]">
              Protected
            </ol>
            <ol className="text-[18px] font-normal xl:text-start text-center leading-[30px] tracking-[0.2px] text-[#E1B168]">
              Not Found
            </ol>
          </div>
        </div>
        <div className="pt-[10px]">
          <hr />
        </div>
      </ContainerWrapper>
    </footer>
  );
};
