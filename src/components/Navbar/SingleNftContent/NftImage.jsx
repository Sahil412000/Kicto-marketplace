import React from "react";
import nftimage from "../../../assets/Nftimage.svg";
import { ChevronLeft } from "tabler-icons-react";
import { Link } from "react-router-dom";

const NftImage = () => {
  return (
    <div className="h-full w-full flex flex-col   items-center ">
      <div className="w-full">
        <Link to="/marketplace">
          <ChevronLeft
            color="#7b3fe4"
            size={26}
            className="rounded-full border border-[#7b3fe4] h-10 w-10 p-2"
          />
        </Link>
      </div>
      <div className="ml-20 flex flex-col justify-center items-center">
        <img src={nftimage} alt="Nft Image" className="h-72 w-auto" />
        <div className="btn btn-primary  normal-case rounded-full w-56">
          Buy for 1.08 SOL
        </div>
      </div>
    </div>
  );
};

export default NftImage;
