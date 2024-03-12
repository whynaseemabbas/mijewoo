import React from "react";

const Card = (props) => {
  return (
    <div className=" w-[100%] py-[30px] rounded-[10px] bg-[#F7F6F0]">
      <div className="flex flex-col w-[80%] mx-auto">
        <img src={props.image} style={{ width: "100%" }} />
        <div className="flex flex-col items-center ">
          <div className="mt-[20px]">{props.title}</div>
          <div className="flex my-[5px]">
            <div>
              <img src="/images/noto_star.png" />
            </div>
            <div>
              <img src="/images/noto_star.png" />
            </div>
            <div>
              <img src="/images/noto_star.png" />
            </div>
            <div>
              <img src="/images/noto_star.png" />
            </div>
            <div>
              <img src="/images/noto_star.png" />
            </div>
          </div>
          <div className="mb-[5px]">{props.name}</div>
          <div className="text-center">{props.discription}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
