import nm from  '../assets/images/kartinka.svg';
import { Imzo } from "../assets/icons/imzo";
import { ContainerWrapper } from './container-wrapper'

export const Secion = () => {
  return (
    <section className='bg-white-1 pt-[100px] pb-[60px]'>
        <ContainerWrapper>
        <div className="flex gap-[95px]  flex-col items-center   xl:flex-row  ">
            <div>
                <img src={nm} alt="" />
            </div>
            <div className="">
                <p className="font-light text-[50px]  leading-[56px]  xl:w-[430px]   xl:text-start  tracking-[0.2px]">The Delicious Story</p>
                <p className="font-light text-[20px] leading-[30px]  xl:w-[559px]   tracking-[0.2px] ml-2  mt-4">The people, food and the prime locations make the perfect place  for the friends & family to come together and have great time. </p>
                <div className="flex flex-col xl:flex-row">
                 <div className="mt-6">
                 <p className="font-light mt-2  ml-2 text-[40px] leading-[56px]">2018</p>
                 <p className=" mt-2 font-light  ml-2 text-[20px] leading-[30px]">Plan for this restaurant to deliver healthy food.</p>
                 </div>
                  <div className="mt-6   ">
                  <p className="font-light mt-2  ml-2  text-[40px] leading-[56px]">2022</p>
                  <p className=" font-light mt-2  ml-2 text-[20px] leading-[30px]">Happily in the fourth year by fulfill the motto.</p>
                  </div>
                </div>
                <div>
                    <p className="text-[20px] font-normal  ml-2 leading-[30px] tracking-[0.2px] mt-5">JOSEFINE</p>
                    <Imzo className={'mt-4  ml-2'} />

                </div>
            </div>
            
         </div>
        </ContainerWrapper>
    </section>
  )
}
