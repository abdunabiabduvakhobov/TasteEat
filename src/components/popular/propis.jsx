import la from '../../assets/icons/lag.svg';
import suv from '../../assets/icons/suv.svg';
import div from '../../assets/icons/div.svg';
import opo from '../../assets/icons/opo.svg';
import { ButtonPropis } from './ButtonPropis';
export const Propis = () => {
  return (
    <section>
      <div className='bg-white w-full  pt-[60px]'>
        <div className='xl:flex gap-[80px]   '>
            <div className='xl:mt-0 mt-[60px] xl:ml-0 ml-[14px]'>
                <img className='' src={la} alt="" />
                <div className='flex gap-[40px] '>
                <p className='text-[28px] font-sans leading-[42px]  tracking-[0.2px] mt-[10px] '>Chicken Manjoori</p>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px]'>$15</p>
                </div>
                <hr className='w-[320px] mt-[10px]' />
                <p className='text-[20px] mt-[10px] font-normal w- leading-[30px] tracking-[0.2px] w-[300px]'>Dish relished by all age groups as a starter dish at parties.</p>
            </div>
            <div className='xl:mt-0 mt-[60px] xl:ml-0 ml-[14px]'>
                <img src={suv} alt="" />
                <div className='flex gap-[170px] '>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px] '>Hotdog</p>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px]'>$10</p>
                </div>
                <hr className='w-[320px] mt-[10px]' />
                <p className='text-[20px] mt-[10px] font-normal leading-[30px] tracking-[0.2px] w-[300px]  '>Grilled sausage served in the slit of a partially sliced bun..</p>
            </div>
            <div className='xl:mt-0 mt-[60px] xl:ml-0 ml-[14px]'>
                <img src={div} alt="" />
                <div className='flex gap-[105px] '>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px] '>Fresh Salmon</p>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px]'>$5</p>
                </div>
                <hr className='w-[320px] mt-[10px]' />
                <p className='text-[20px] mt-[10px] font-normal leading-[30px] tracking-[0.2px] w-[300px] '>Beat the health blues with our Super Immune Blue Juice Recipe.</p>
            </div>
            <div className='xl:mt-0 mt-[60px] xl:ml-0 ml-[14px]'>
                <img src={opo} alt="" />
                <div className='flex gap-[120px] '>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px] mt-[10px] '>Veg Burger</p>
                <p className='text-[30px] font-sans leading-[42px] tracking-[0.2px]  mt-[10px]'>$10</p>
                </div>
                <hr className='w-[320px] mt-[10px]' />
                <p className='text-[20px] mt-[10px] font-normal leading-[30px] tracking-[0.2px] w-[300px]'>Burgers may be made from ingredients like beans.</p>
            </div>
        </div>
       <div className='text-center pt-[50px]'>
       <ButtonPropis>See all dishes</ButtonPropis>
       </div>
      </div>
    </section>
  )
}
