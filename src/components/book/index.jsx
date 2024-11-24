import { ContainerWrapper } from "../container-wrapper"

export const Book = () => {
  return (
    <section className="h-full bg-[url('../book.png')] bg-no-repeat w-full pt-[60px] bg-cover bg-center">
      <ContainerWrapper>
        <div className="backdrop-hue-rotate-60 bg-green/70 w-[90%] sm:w-[920px] sm:h-[580px]  mx-auto sm:ml-[300px] p-4 sm:p-0">
            <div className="text-white pt-[50px] sm:pt-[100px]"> 
                <p className="text-[12px] sm:text-[15px] leading-[22.5px] tracking-[3px] font-normal text-center">reservation</p>
                <p className="text-[30px] sm:text-[40px] font-normal leading-[56px] tracking-[0.2px] text-center">Book Your Table</p>
                <div className="mt-[20px] sm:mt-[30px] flex flex-wrap justify-center gap-[20px]">
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[30px] sm:px-[57px] py-4 sm:py-5 border-2 w-full sm:w-auto" type="text" placeholder="Name" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[30px] sm:px-[57px] py-4 sm:py-5 border-2 w-full sm:w-auto" type="text" placeholder="Email" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[30px] sm:px-[57px] py-4 sm:py-5 border-2 w-full sm:w-auto" type="text" placeholder="Persons" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[30px] sm:px-[57px] py-4 sm:py-5 border-2 w-full sm:w-auto" type="text" placeholder="Timing" />
                    <input className="backdrop-hue-rotate-60 bg-green/70 px-[30px] sm:px-[57px] py-4 sm:py-5 border-2 w-full sm:w-auto" type="text" placeholder="Date" />
                </div>
                <div className="text-center pt-[30px] sm:pt-[40px]">
                  <button className="font-normal text-[18px] sm:text-[22px] leading-[33px] hover:bg-[#724f1b] py-4 sm:py-5 px-[40px] sm:px-[57px] bg-[#cac8c4] border-[#724f1b] text-black w-full sm:w-auto">Book A Table</button>
                </div>
            </div>
            
        </div>
        
      </ContainerWrapper>
    </section>
  )
}
