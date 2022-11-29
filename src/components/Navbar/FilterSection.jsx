import React from "react";

const FilterSection = () => {
  return (
    <div className="h-full w-full text-white  ">
      <h1 className="font-semibold text-2xl mb-5">Marketplace</h1>
      <div className="h-max w-72 border  p-5 rounded-lg bg-secondary_bg">
        <div className="flex w-full justify-between">
          <div className="border btn btn-secondary btn-sm  text-center flex items-center justify-center rounded-lg">
            Boxes
          </div>
          <div className="btn btn-primary btn-sm   w-24 text-center py-1.5 rounded-lg">
            Sneakers
          </div>
        </div>
        <div className="w-full mt-5">
          <p className="font-semibold text-md">RARITY</p>
          <ul className="flex flex-col space-y-1 text-sm">
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Common</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Uncommon</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Rare</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Epic</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Legandary</p>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <p className="font-semibold text-md">PRICE</p>
          <div className="flex w-full justify-between">
            <div className="bg-transparent_bg w-24 text-center py-1 rounded-sm">
              From <span className="ml-1 text-transparent_bg">0 BNB</span>
            </div>
            <div className="bg-transparent_bg w-24 text-center py-1 rounded-sm">
              From <span className="ml-1 text-transparent_bg">0 BNB</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-3">
          <p className="font-semibold text-md">SNEAKER TYPE</p>
          <ul className="flex flex-col space-y-1 text-sm">
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Common</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Uncommon</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Rare</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Epic</p>
            </li>
            <li className="flex space-x-1">
              <input type="checkbox" className="" />
              <p>Legandary</p>
            </li>
          </ul>
        </div>
        <div className="w-full mt-3">
          <ul className="flex flex-col space-y-1 text-sm">
            <li className="flex space-x-1">
              <p>Level</p>
            </li>
            <li className="flex space-x-1">
              <p>Shoe Mint</p>
            </li>
            <li className="flex space-x-1">
              <p>Attributes</p>
            </li>
            <li className="flex space-x-1">
              <p>Genesis</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
