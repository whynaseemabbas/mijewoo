import React from "react";
import Card from "../card/Card";

const CollectionCards = () => {
  return (
    <div>
      <div className="w-[90%] mx-auto">
        <div className="text-center py-[50px] text-[48px] font-[600]">
          Season Collections
        </div>
        <div className="flex justify-between sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
          <div className="flex flex-col items-center">
            <div>
              <img
                src="/images/seasonCollections3.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-[20px] text-[32px] font-[500]">SPRING</div>
            <div>
              <button
                className="bg-[#F7F6F0] px-[20px] py-[5px] rounded-[20px] text-[15px] font-[400] mt-[25px]"
                type="button"
              >
                MORE
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img
                src="/images/seasonCollections2.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-[20px] text-[32px] font-[500]">SUMMER</div>
            <div>
              <button
                className="bg-[#F7F6F0] px-[20px] py-[5px] rounded-[20px] text-[15px] font-[400] mt-[25px]"
                type="button"
              >
                MORE
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img
                src="/images/seasonCollections1.png"
                style={{ width: "100%" }}
              />
            </div>
            <div className="mt-[20px] text-[32px] font-[500]">WINTER</div>
            <div>
              <button
                className="bg-[#F7F6F0] px-[20px] py-[5px] rounded-[20px] text-[15px] font-[400] mt-[25px]"
                type="button"
              >
                MORE
              </button>
            </div>
          </div>
        </div>

        {/* Our best seller part */}

        <div className="text-center py-[50px] text-[48px] font-[600]">
          Our Best Seller{" "}
        </div>
        <div className="flex justify-between sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row">
          <div className="flex flex-col items-center">
            <div>
              <img src="/images/best seller1.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Euphoria Crop Blouse
            </div>
            <div className=" text-[14px] font-[400]">Rp.125.000</div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="/images/best seller3.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Venas Halter Dress
            </div>
            <div className=" text-[14px] font-[400]">Rp.180.000</div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="/images/best seller2.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Snap Pure Blouse
            </div>
            <div className=" text-[14px] font-[400]">Rp.129.000</div>
          </div>
        </div>
      </div>

      {/* Get Off 50% part */}

      <div className="flex bg-[#F7F6F0] justify-around items-center py-[100PX] mt-[50px] sm:flex sm:flex-col sm:items-center">
        <div className="flex">
          <div className="pl-[50px]">
            <img src="/images/getOff2.png" />
          </div>
          <div>
            <img src="/images/getOff1.png" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="font-[600] text-[48px]">Get 50% Off</div>
          <div className="text-[16px] font-[400]">
            for all new product purchases
          </div>
          <div> min. purchase Rp. 350.000</div>
          <div>
            <button
              className="bg-[#FFFFFF] px-[20px] py-[5px] rounded-[20px] text-[15px] font-[400] mt-[25px]"
              type="button"
            >
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="pr-[50px]">
          <img src="/images/getOff3.png" />
        </div>
      </div>

      {/* Our Products part */}

      <div className="w-[95%] mx-auto">
        <div className="text-center my-[50px] text-[48px] font-[600]">
          {" "}
          Our Products
        </div>

        <div className="flex justify-center items-center sm:flex flex-wrap">
          <div>
            <button
              className="text-[32px] font-[500] underline underline-offset-[10px] bg-[#F7F6F0] py-[10px] px-[40px]  mr-[75px] rounded-t-[10px]"
              type="button"
            >
              Top
            </button>
          </div>
          <div>
            <button
              className="text-[#505050] text-[32px] font-[500] mr-[75px]"
              type="button"
            >
              Bottom
            </button>
          </div>
          <div>
            <button
              className="text-[#505050] text-[32px] font-[500] mr-[75px]"
              type="button"
            >
              Dress
            </button>
          </div>
          <div>
            <button
              className="text-[#505050] text-[32px] font-[500] mr-[75px]"
              type="button"
            >
              Set
            </button>
          </div>
          <div>
            <button
              className="text-[#505050] text-[32px] font-[500] mr-[75px]"
              type="button"
            >
              Knit
            </button>
          </div>
          <div>
            <button
              className="text-[#505050] text-[32px] font-[500]"
              type="button"
            >
              Outer
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-between py-[30px] px-[30px] bg-[#F7F6F0] rounded-[10px]">
          <div className="flex flex-col items-center">
            <div>
              <img src="/images/ourProduct6.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Eto V Neck Yellow
            </div>
            <div className=" text-[14px] font-[400]">Rp.129.000</div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="/images/ourProduct5.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Macaroon Dry Half
            </div>
            <div className=" text-[14px] font-[400]">Rp.139.000</div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="/images/ourProduct4.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Wave Stripe Hally
            </div>
            <div className=" text-[14px] font-[400]">Rp.130.000</div>
          </div>

          <div className="flex flex-col items-center pt-[60px]">
            <div>
              <img src="/images/ourProduct3.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Eve Punching Floral
            </div>
            <div className=" text-[14px] font-[400]">Rp.229.000</div>
          </div>

          <div className="flex flex-col items-center pt-[60px]">
            <div>
              <img src="/images/ourProduct2.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Floral Waffle Tee
            </div>
            <div className=" text-[14px] font-[400]">Rp.119.000</div>
          </div>

          <div className="flex flex-col items-center pt-[60px]">
            <div>
              <img src="/images/ourProduct1.png" />
            </div>
            <div className="mt-[10px] text-[16px] font-[400]">
              Snap Pure Blouse
            </div>
            <div className=" text-[14px] font-[400]">Rp.225.000</div>
          </div>
        </div>
      </div>

      {/* Our featured Collections */}

      <div className="text-center text-[48px] font-[600] my-[50px]">
        Our Featured Collection
      </div>

      <div className="flex w-[90%] mx-auto">
        <div className="flex flex-col pr-[15px]">
          <div className="relative">
            <div className="absolute bottom-4 left-4 text-[16px] font-[400]">
              COLORFUL KNITWEAR<br></br> SERIES
            </div>
            <div className="absolute bottom-0 right-0">
              <img src="/images/arrow.png" />
            </div>
            <div>
              <img src="/images/featuredcollection5.png" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-4 left-4">
              TOP PANTS <br></br>SERIES
            </div>
            <div className="absolute bottom-0 right-0">
              <img src="/images/arrow.png" />
            </div>
            <div className="mt-[18px]">
              <img src="/images/featuredcollection4.png" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-4 left-4">
            JIWOO MADE SPECIAL <br></br>SERIES
          </div>
          <div className="absolute bottom-0 right-0">
            <img src="/images/arrow.png" />
          </div>
          <div>
            <img src="/images/featuredcollection3.png" />
          </div>
        </div>

        <div className="flex flex-col pl-[15px]">
          <div className="relative">
            <div className="absolute bottom-4 left-4">
              FRESHIDER TOP<br></br> SERIES
            </div>
            <div className="absolute bottom-0 right-0">
              <img src="/images/arrow.png" />
            </div>
            <div>
              <img src="/images/featuredcollection2.png" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute bottom-4 left-4">
              SWEET DRESSES <br></br> SERIES
            </div>
            <div className="absolute bottom-0 right-0">
              <img src="/images/arrow.png" />
            </div>
            <div className="mt-[18px]">
              <img src="/images/featuredcollection1.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-[48px] font-[600] my-[40px]">
        What They Said
      </div>

      <div className="flex w-[90%] mx-auto justify-between sm:flex sm:flex-col sm:items-center lg:flex lg:flex-row">
        <Card
          image="/images/cards3.png"
          title="Essence Long Denim"
          name="-Lisa-"
          discription="“I like this pants. Its fit and perfect for me. The material is so comfortable that it can be used anywhere. It is also suitable to be combined with all types of my clothes.”"
        />
        <Card
          style={{ width: "100%" }}
          image="/images/cards2.png"
          title="Andcable Knit Top"
          name="-Celine-"
          discription="“I like knitted materials. I bought this shirt because the design is very pretty and comfortable to wear casually. The material is also neat and good.”"
        />
        <Card
          image="/images/cards1.png"
          title="Candy Stripe Boxy"
          name="-Tiffany-"
          discription="“This shirt is very pretty and nice. The color is cute too. At first I bought it as a present for my friend but I also wanted it so we ended up going out wearing twin clothes haha.”"
        />
      </div>
    </div>
  );
};

export default CollectionCards;
