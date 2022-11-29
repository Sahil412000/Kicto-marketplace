import React from "react";
import nftimage from "../../../assets/Nftimage.svg";

const NftDetails = () => {
  return (
    <div className="h-full w-full flex flex-col space-y-4 justify-center text-white items-end pl-48">
      <div className="bg-secondary_bg h-max w-full py-6 px-10 rounded-lg space-y-6 ">
        <div className="flex justify-around">
          <div className="w-1/3 space-y-1.5 ">
            <p className="text-3xl italic">Runner</p>
            <p className="text-sm">#987654321</p>
            <div className="flex justify-between w-full">
              <p>
                Lv.0/<span className="opacity-50">30</span>
              </p>
              <p>8-20Km/h</p>
            </div>
          </div>

          <div className="flex space-x-1 w-2/3 justify-end">
            <div className="h-7 w-7 rounded-sm border border-white"></div>
            <div className="h-7 w-7 rounded-sm border border-white"></div>
            <div className="h-7 w-7 rounded-sm border border-white"></div>
            <div className="h-7 w-7 rounded-sm border border-white"></div>
            <div className="h-7 w-7 rounded-sm border border-white"></div>
          </div>
        </div>
        <div>
          <p className="text-xl">About Sneakers</p>
          <p className="opacity-50">
            Basic sneakers with average scores. Suitable for warming up or
            walking at 1-6 KM/HR.
          </p>
        </div>
        <div>
          <p className="text-xl">Characteristics</p>
          <div className="flex space-x-10">
            <ul className="flex flex-col space-y-1 w-1/3 mt-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Performance</p>
                <p className="opacity-50">18.8</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Fortune</p>
                <p className="opacity-50">12.6</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Joy</p>
                <p className="opacity-50">6.8</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Durabilty</p>
                <p className="opacity-50">6.8</p>
              </li>
            </ul>
            <div className="space-y-3">
              <div className="">
                <p className="text-md opacity-50">Condition</p>
                <p className="font-bold">100/100</p>
              </div>
              <div className="space-y-1">
                <p className="text-md opacity-50">Shoe Mints</p>
                <div className="space-x-1 flex">
                  <div className="h-1 w-4 bg-[#7b3fe4]"></div>
                  <div className="h-1 w-4 bg-[#7b3fe4]"></div>
                  <div className="h-1 w-4 bg-white"></div>
                  <div className="h-1 w-4 bg-white"></div>
                  <div className="h-1 w-4 bg-white"></div>
                  <div className="-mt-2.5 pl-1">
                    <p className="font-semibold text-sm">3/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary_bg h-max w-full py-6 px-10 rounded-lg space-y-6 ">
        <p className="text-3xl italic">Mints</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="border border-white px-6 py-3 rounded-lg">
            <p className="text-xl italic">Runner</p>
            <img src={nftimage} className="h-44 w-auto" />
            <p className="text-center">#987654321</p>
          </div>
          <div className="border border-white px-6 py-3 rounded-lg">
            <p className="text-xl italic">Runner</p>
            <img src={nftimage} className="h-44 w-auto" />
            <p className="text-center">#987654321</p>
          </div>
          <div className="border border-white px-6 py-3 rounded-lg">
            <p className="text-xl italic">Runner</p>
            <img src={nftimage} className="h-44 w-auto" />
            <p className="text-center">#987654321</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
