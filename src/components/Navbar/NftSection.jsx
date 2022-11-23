import React from "react";
import exchange from "../../assets/Exchange.svg";
import nftimage from "../../assets/Nftimage.svg";
import ellipse1 from "../../assets/ellipse1.svg";
import ellipse2 from "../../assets/ellipse2.svg";

const NftSection = () => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-max w-full flex justify-end space-x-2 mb-4">
        <div className=" btn btn-primary btn-sm px-3 py-1 rounded-lg">Buy</div>
        <div className="border border-white btn-sm px-3 py-1 rounded-lg">
          My Listing
        </div>
        <div className="border border-white px-3 py-1 rounded-lg flex items-center">
          <img src={exchange} className="h-3 w-auto" />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 ml-12 ">
        <div className="h-max w-72 p-6 border border-white/30 rounded-lg backdrop-blur-lg ">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm  w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
        <div className="h-max w-72 p-6 border border-white bg-white/30 rounded-lg backdrop-blur-lg ">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm  w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
        <div className="h-max w-72 p-6 border border-white rounded-lg backdrop-blur-lg ">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm  w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
        <div className="h-max w-72 p-6 border border-white rounded-lg backdrop-blur-lg ">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
        <div className="h-max w-72 p-6 border border-white rounded-lg">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
        <div className="h-max w-72 p-6 border border-white rounded-lg">
          <div className="w-full flex justify-between">
            <div className="">
              <p className="text-2xl italic">Runner</p>
              <p className="text-sm">Lv.0/30</p>
            </div>
            <div className="flex space-x-1 ">
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
              <div className="h-4 w-4 rounded-sm border border-white"></div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full items-center">
            <div>
              <img src={ellipse2} />
            </div>
            <div>
              <img src={ellipse1} className="-mt-40" />
            </div>

            <div>
              <img src={nftimage} className="-mt-36" />
            </div>
            <p className="-mt-10 text-lg">#987654321</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="font-bold">8-20 Km/h</p>
            <div className="border border-white w-16 text-center py-1.5 font-semibold text-sm rounded-lg">
              Base
            </div>
          </div>
          <div className="mt-6">
            <ul className="flex flex-col space-y-1">
              <li className="flex justify-between  border-b border-white">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
              <li className="flex justify-between border-b border-white ">
                <p className="italic">Mint: 2</p>
                <p className="opacity-50">L9</p>
              </li>
            </ul>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <p className="">100/100</p>
            <p className=" opacity-50 italic">0/7</p>
          </div>
          <div className="flex justify-between mt-4 items-center">
            <p className="">1.08 Sol</p>
            <div className="btn btn-primary btn-sm w-20 text-center py-1.5 rounded-full">
              Buy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftSection;
