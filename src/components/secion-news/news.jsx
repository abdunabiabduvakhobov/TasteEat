import pami from '../../assets/icons/pami.png';
import { ContainerWrapper } from '../container-wrapper';
import { PrimyeButton } from '../primyeButton';
import dito from '../../assets/icons/dito.png';

export const News = () => {
  return (
    <section className="pt-[50px] w-full sm:h-[60pc]">
      <ContainerWrapper>
        <div className="flex flex-col sm:flex-row gap-[50px]">
          
          <div className="card w-full sm:w-[840px] group cursor-pointer border-2 mb-8 sm:mb-0">
            <div className="relative">
              <img className="w-full" src={pami} alt="" />
              <div className="bg-black bg-opacity-65 absolute top-0 left-0 w-full h-full items-center justify-center hidden group-hover:flex">
                <button className="font-normal text-[16px] leading-[33px] hover:bg-[#E1B168] hover:text-white duration-300 py-5 px-[57px] border-2 border-[#E1B168] text-[#E1B168] mt-10">
                  View Menu
                </button>
              </div>
            </div>
            <div className="pt-[50px] pb-[38px] px-[48px]">
              <div className="flex gap-[40px]">
                <p className="">Delicious</p>
                <p className="">March 19, 2022</p>
              </div>
              <p className="font-normal text-[30px] leading-[39px] tracking-[0.2px] mt-[20px]">The Legend of US Cuisine: The Story of Hungry People</p>
              <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px] mt-[10px]">
                Capitalize on low-hanging fruit to identify a ballpark value-added matrix economically and the creative activity to beta test override the food quality.
              </p>
            </div>
          </div>
          
    
          <div className="card w-full sm:w-[840px] group cursor-pointer border-2">
            <div className="relative">
              <img className="w-full" src={dito} alt="" />
              <div className="bg-black bg-opacity-65 absolute top-0 left-0 w-full h-full items-center justify-center hidden group-hover:flex">
                <button className="font-normal text-[16px] leading-[33px] hover:bg-[#E1B168] hover:text-white duration-300 py-5 px-[57px] border-2 border-[#E1B168] text-[#E1B168] mt-10">
                  View Menu
                </button>
              </div>
            </div>
            <div className="pt-[50px] pb-[38px] px-[48px]">
              <div className="flex gap-[40px]">
                <p className="">Delicious</p>
                <p className="">March 19, 2022</p>
              </div>
              <p className="font-normal text-[30px] leading-[39px] tracking-[0.2px] mt-[20px]">The Legend of US Cuisine: The Story of Hungry People</p>
              <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px] mt-[10px]">
                Capitalize on low-hanging fruit to identify a ballpark value-added matrix economically and the creative activity to beta test override the food quality.
              </p>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
