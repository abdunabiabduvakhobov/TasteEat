import { ContainerWrapper } from "../container-wrapper"


export const Book = () => {
  return (
    <section className="h-screen bg-[url('../book.png')] bg-no-repeat pt-[120px] bg-cover bg-center ">
      <ContainerWrapper>
        <div className="backdrop-hue-rotate-60 bg-green/70 w-[920px] h-[507px]   ml-[300px] ">
            <div className="text-white pt-[100px] "> 
                <p className="text-[15px] leading-[22.5px] tracking-[3px] font-normal text-center">reservation</p>
                <p className="text-[40px] font-normal leading-[56px] tracking-[0.2px] text-center">Book Your Table</p>
                <div className="ml-[110px] mt-[30px] flex flex-wrap gap-[20px]">
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[47px] py-5 border-2" type="text" placeholder="Name" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[47px] py-5 border-2 text-"  type="text" placeholder="Email" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[10px] py-5 border-2 text-"  type="text" placeholder="Persons" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[10px] py-5 border-2 text-"  type="text" placeholder="Timing" />
                    
                </div>
            </div>
        </div>
      </ContainerWrapper>
    </section>
  )
}
