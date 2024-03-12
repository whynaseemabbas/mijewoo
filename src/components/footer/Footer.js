import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="flex justify-around items-center sm:flex sm:flex-col mt-[50px] p-[100px] bg-[#F7F6F0]">
        <div className="flex flex-col justify-center ">
          <div className="text-[45px] font-[600] text-center ">
            Get more benefits by Sign Up & Join Mejiwoo Community!
          </div>

          <div className="flex items-center mt-[40px]">
            <div>
              <img src="/images/makidiamond.png" className="pr-[10px]" />
            </div>
            <div className="text-[24px] font-[600] ">
              FREE Special Gift to a new member
            </div>
          </div>

          <div className="flex items-center mt-[20px] sm:flex ">
            <div>
              <img src="/images/makidiamond.png" className="pr-[10px]" />
            </div>
            <div className="text-[24px] font-[600]">
              Get 2x JIWOO Points to purchase items
            </div>
          </div>

          <div className="flex items-center mt-[20px]">
            <div>
              <img src="/images/makidiamond.png" className="pr-[10px]" />
            </div>
            <div className="text-[24px] font-[600]">
              Get special voucher code every month{" "}
            </div>
          </div>

          <div className="flex items-center mt-[20px]">
            <div>
              <img src="/images/makidiamond.png" className="pr-[10px]" />
            </div>
            <div className="text-[24px] font-[600]">
              Claim Voucher Disc. Up To 50%{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="sm:hidden">
            <img src="/images/Line3.png" />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              style={{ width: "100%" }}
              className="w-[100%] mb-[20px] placeholder: text-center"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="w-[100%] mb-[20px] placeholder: text-center"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Password"
              className="w-[100%] mb-[20px] placeholder: text-center"
            />
          </div>
          <div className="flex items-center mb-[20px]">
            <input type="checkbox" className="mr-[10px]"></input>
            <div>
              I agree to all the <strong>Terms</strong> and{" "}
              <strong>Privacy Policy</strong>
            </div>
          </div>

          <div className="flex justify-center mb-[20px]">
            <button
              className="bg-[#fff] px-[30px] py-[12px] rounded-[20px]"
              type="submit"
            >
              SIGN UP
            </button>
          </div>

          <div className="mb-[20px]">
            <img src="/images/Frame 40.png" />
          </div>

          <div className="flex items-center justify-center p-[10px] rounded-[20px] bg-[#fff] mb-[20px]">
            <div className="text-[20px] pr-[10px]">
              <FcGoogle />
            </div>
            <div className="text-[20px]">SIGN UP WITH GOOGLE</div>
          </div>

          <div className="flex items-center justify-center p-[10px] rounded-[20px] bg-[#fff]">
            <div className="text-[#1877f2] text-[20px] pr-[10px]">
              <BsFacebook />
            </div>
            <div className="text-[20px]">SIGN UP WITH FACEBOOK</div>
          </div>
        </div>
      </div>
      {/* // Header part 2 */}
      <div className="flex sm:flex sm:flex-col">
        <div className="flex flex-col items-center justify-center mx-[100px]">
          <div className="text-[32px] font-[500]">MEJIWOO</div>
          <div className="text-[16px] font-[400]">미지우 </div>
        </div>

        <div className="flex flex-col items-start my-[30px] mr-[50px]">
          <div>
            <strong>About Us</strong>
          </div>
          <div className="py-[5px]">News</div>
          <div>Oficial Store</div>
          <div className="py-[5px]">Company</div>
          <div>Careers</div>
        </div>

        <div className="flex flex-col items-start my-[30px] mr-[50px]">
          <div>
            <strong>Get Help</strong>
          </div>
          <div className="py-[5px]">FAQ</div>
          <div>Shipping</div>
          <div className="py-[5px]">Payment</div>
          <div>Returns</div>
          <div className="py-[5px]">Contact Us</div>
        </div>

        <div className=" my-[30px] mr-[50px] ">
          <div>
            <strong>Follow Us</strong>
          </div>
          <div className="flex items-center mt-[10px]">
            <div className="text-[#1877f2]">
              <BsFacebook />
            </div>
            <div className="px-[25px] text-[#D75691]">
              {" "}
              <FaInstagram />
            </div>
            <div className="text-[#2C9BF0]">
              <BsTwitter />
            </div>
            <div className="px-[25px] text-[#EA4A24]">
              <BsYoutube />
            </div>
          </div>
        </div>

        <div className="flex  items-end pb-[10px] pl-[150px] text-[16px] font-[600]">
          <div>Guide</div>
          <div className="px-[20px]">Terms & Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <div className="flex items-center justify-center h-[6vh] bg-[#000000] text-white">
        <div className="text-[10px]">
          <img src="/images/iccopyright.png" />
        </div>
        <div className="text-[14px] font-[400]">
          2023 MEJIWOO. All Rights Reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
