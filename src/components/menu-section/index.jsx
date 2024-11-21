
import { ContainerWrapper } from "../container-wrapper";
import zo from "../../assets/icons/ko.svg";
import {menu} from "./static"
import { MenuDish } from "./menu-dish";


export const MenuSection = () => {
  return (
    <section className="bg-white pt-[119px]    ">
       <ContainerWrapper>
        <div className="xl:flex    gap-44">
         <div className="flex flex-col gap-8 xl:ml-0 ml-4">
         <p className="font-normal xl:text-[25px]   text-[20px] xl:leading-[22px] tracking-[3px] ">Menu</p>
            <p className="font-normal xl:w-[400px]    xl:text-[40px] text-[40px]  xl:leading-[56px] tracking-[0.2px] ">Try Our Special dishes</p>
            <p className="font-normal xl:text-[20px]  xl:w-[500px] text-[20px]   leading-[30px] tracking-[0.2px] ">Every time you perfectly dine with us, it should happy for great inspired food in an environment designed with individual touches unique to the local area.</p>
             <img className="xl:w-[398px] xl:h-[548px] w-[275px] " src={zo} alt="" />
             <div className="group  duration-300  ">
             <button className="font-normal text-[17px] leading-[33px]    hover:bg-[#724f1b] xl:py-5 xl:px-[57px]  py-[20px] px-[40px]  hover:text-white border-2 border-[#724f1b] text-[#724f1b] ">See all dishes</button>
             </div>
         </div>
         <div className="mt-11  ">
           {
             menu.map((el,i)=>{
                return (
                  <div key={i}>
                    <p className="mb-[40px] ml-4 text-[35px] font-light mt-5  ">{el.name}</p>
                    <div className="flex flex-col gap-[50px] ">
                      {
                        el.dishes.map((dish , i)=>{
                           return <MenuDish key={i} data={dish}/>
                        })
                      }
                    </div>
                  </div>
                )
                
             })
           }
         </div>
        </div>
       </ContainerWrapper>
    </section>
  )
}
