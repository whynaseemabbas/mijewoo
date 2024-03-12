import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F7F6F0] pt-[20px] pb-[20px]">
      <div className="flex items-center justify-between sm:flex flex-col items-center">
        <div className="flex">
          <div className="">
            <img src="/images/banner4.png" style={{ width: "100%" }} />
          </div>
          <div>
            <img src="/images/banner3.png" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-[600] text-[48px] w-[100%]">MEJIWOO</div>
          <div className="font-[400] text-[32px] ">미지우 </div>
          <div className="border border-black w-[100%] font-[100] my-[5px]"></div>
          <div className="text-[16px] font-[400]">
            make your everyday look prettier
          </div>
          <div> with MEJIWOO Korean Made</div>
        </div>
        <div className="flex">
          <div>
            <img src="/images/banner2.png" style={{ width: "100%" }} />
          </div>
          <div className="">
            <img src="/images/banner1.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
