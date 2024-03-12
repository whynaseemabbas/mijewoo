import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { PiBagSimple } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandle = () => {
    setIsOpen(!isOpen);
  };

  const Nav = (
    <nav className="space-x-4 ">
      <div className="lg:hidden absolute top-[80px] pt-10 pb-10 w-full left-0 right-0 bg-[#ffffff] sm:flex flex-col items-center">
        <a
          href="#"
          className=" text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
        >
          Home
        </a>
        <a
          href="#"
          className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
        >
          Product
        </a>
        <a
          href="#"
          className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
        >
          Categories
        </a>
        <a
          href="#"
          className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
        >
          SALE
        </a>
      </div>
    </nav>
  );
  return (
    <div className="w-full pt-5 pb-5 pl-10 pr-10">
      <div className=" flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:hidden lg:flex items-center">
          <div>
            <a
              href="#"
              className=" text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
            >
              Home
            </a>
          </div>
          <div>
            <a
              href="#"
              className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
            >
              Product
            </a>
          </div>
          <a
            href="#"
            className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-[#505050] hover:text-[#000000] hover:cursor-pointer hover:underline underline-offset-8"
          >
            SALE
          </a>
        </div>

        <div className="flex flex-col text-center ">
          <div className="font-[400] text-[20px]">MEJIWOO</div>
          <div>미지우</div>
        </div>

        <div className="flex pr-[70px] static flex items-center">
          <input
            className='width="30%" sm:hidden md:block lg:block placeholder:text-[#000000] bg-[#F7F6F0] pl-[20px]  p-[10px] rounded-[10px] text-[14px] font-[400]'
            type="input"
            placeholder="search"
          />
          {/* <IoMdSearch className=" sm:none absolute  left-[1135px] top-[50px] text-[25px]" /> */}
          <div className="flex items-center sm:hidden lg:flex lg:flex-row">
            <div className="text-[25px] pr-[30px] pl-[30px] ">
              <PiBagSimple className="cursor-pointer" />
            </div>
            <div className="text-[25px]">
              <AiOutlineUser className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div>{isOpen && Nav}</div>
        <button className="lg:hidden sm:block" onClick={clickHandle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
