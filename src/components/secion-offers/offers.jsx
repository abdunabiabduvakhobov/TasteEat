import { ContainerWrapper } from '../container-wrapper';
import on from '../../assets/icons/on.png';
import bu from '../../assets/icons/burger.png';
import ol from '../../assets/icons/ol.png';
import pizza from '../../assets/icons/pizza.png';

export const Offers = () => {
  return (
    <section className="bg-white w-full ">
      <ContainerWrapper>
        <div className="xl:flex gap-5 xl:gap-[50px] flex-wrap">
        
          <div className="pt-[50px] flex-1 max-w-[735px]">
            <div className="bg-cyan-400 xl:h-[409px] p-5 xl:p-10">
              <img className="pt-[40px] pl-[20px]" src={on} alt="" />
              <div className="flex flex-col xl:flex-row items-start xl:items-center">
                <div className="text-primary-blue pt-[20px] xl:pl-[30px]">
                  <p className="text-[15px]   leading-[22.5px] tracking-[4.5px] font-normal">
                    50% Offer Going
                  </p>
                  <p className="text-[40px] font-normal  leading-[56px] tracking-[0.2px]">
                    Chicken Burger
                  </p>
                  <p className="text-[20px]  leading-[30px]  tracking-[0.2px] font-normal ">
                    Chicken burger with tasty toppings and leaves.
                  </p>
                </div>
                <div className=" xl:mt-0 xl:ml-4">
                  <img className="w-[200px] xl:w-[365px]" src={bu} alt="Burger" />
                </div>
              </div>
            </div>
          </div>

          
          <div className="pt-[50px] flex-1 max-w-[750px]">
            <div className="bg-amber-400 xl:h-[409px] p-5 xl:p-10">
              <div className="">
                <img className="pl-[20px]" src={ol} alt="" />
              </div>
              <div className="flex flex-col xl:flex-row items-start xl:items-center">
                <div className="text-primary-blue pt-[20px] xl:pl-[30px]">
                  <p className="text-[15px] mt-10 leading-[22.5px] tracking-[4.5px] font-normal">
                    50% Offer Going
                  </p>
                  <p className="text-[40px] font-normal mt-[10px] leading-[56px] tracking-[0.2px]">
                    Chicken Pizza
                  </p>
                  <p className="text-[20px] leading-[30px] mt-[10px] tracking-[0.2px] font-normal ">
                    Pizza with multiple flavors and toppings mixed.
                  </p>
                </div>
                <div className=" xl:mt-0 xl:ml-4">
                  <img className="w-[200px] xl:w-[365px]" src={pizza} alt="Pizza" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
};
