import React from "react";
import exchange from "../../assets/Exchange.svg";

import NftItemCard from "./SingleNftContent/NftItemCard";

const NftSection = () => {
  return (
    <div className="h-full w-full text-white">
      <div className="h-max w-full flex justify-end space-x-2 mb-4">
        <div className=" btn btn-primary btn-sm px-3 py-1 rounded-lg">Buy</div>
        <div className="border  btn btn-sm btn-secondary px-3 py-1 rounded-lg">
          My Listing
        </div>
        <div className="border btn btn-sm btn-secondary   px-3 py-1 rounded-lg flex items-center">
          <img src={exchange} className="h-3 w-auto " />
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-4 ml-12 ">
        <NftItemCard />
        <NftItemCard />
        <NftItemCard />
        <NftItemCard />
        <NftItemCard />
        <NftItemCard />
      </div>
    </div>
  );
};

export default NftSection;
