import React from "react";
import NftDetails from "../../components/Navbar/SingleNftContent/NftDetails";
import NftImage from "../../components/Navbar/SingleNftContent/NftImage";

const NftItem = () => {
  return (
    <div className="h-max w-full pt-3">
      <div className="h-full w-full px-20 flex">
        <div className="w-1/3">
          <NftImage />
        </div>
        <div className="w-2/3">
          <NftDetails />
        </div>
      </div>
    </div>
  );
};

export default NftItem;
