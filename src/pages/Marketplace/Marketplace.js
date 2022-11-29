import React from "react";
import FilterSection from "../../components/Navbar/FilterSection";
import NftSection from "../../components/Navbar/NftSection";

const Marketplace = () => {
  return (
    <div className="h-max w-full pt-3">
      <div className="h-full w-full px-20 flex">
        <div className="w-1/4">
          <FilterSection />
        </div>
        <div className="w-3/4">
          <NftSection />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
