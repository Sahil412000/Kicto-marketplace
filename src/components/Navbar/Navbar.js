import React from "react";
import logo from "../../assets/Navlogo.svg";

const Navbar = () => {
  return (
    <div className="h-20 w-full px-8 bg-navbar_bg text-white">
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex space-x-2 items-center">
          <img src={logo} className="h-12 w-auto" />
          <p className="text-xl">Kickto</p>
        </div>
        <div className="flex space-x-3">
          <div className="border border-white px-4 py-2 rounded-lg">
            Polygon Testnet
          </div>
          <div className="btn btn-primary  px-4 py-2 rounded-lg">
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
