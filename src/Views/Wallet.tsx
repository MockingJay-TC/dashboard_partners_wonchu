import React from "react";
import { MdFingerprint } from "react-icons/md";
import { BiTransfer, BiDollar } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import Settlements from "../components/Settlements";

const Wallet = () => {
  return (
    <div className="my-8">
      <div className="row">
        <div className="col-8 col-md-12">
          <div className="row gap-6">
            <div className="col-5 col-md-5 col-sm-12 rounded-3xl shadow-xl py-4 px-6 ml-0 bg-gradient-to-r from-sunshine to-corn">
              <div className="flex items-center text-2xl gap-3 justify-between my-4">
                <h2 className="text-white tracking-wider">Jefferson</h2>
                <GiMoneyStack className="text-white text-4xl" />
              </div>
              {/* email */}
              <div className="flex items-center text-2xl gap-3 justify-between my-4">
                <MdFingerprint className="text-white text-5xl" />
                <h2 className="text-white text-3xl font-semibold">$100,302</h2>
              </div>
              {/* amount and send */}
              <div className="text-xl text-white/50 flex items-center gap-4">
                <span>5384</span>
                <span>6292</span>
                <span>8893</span>
                <span>0465</span>
              </div>
              <div className="my-3 text-sm text-white/50 ">09/23</div>
            </div>

            {/* Transfer History */}
            <div className="my-8 pb-4 rounded-2xl bg-white shadow-md">
              <h1 className="p-4 text-lg font-semibold text-gray-500 ">
                Transfer History
              </h1>
              <Settlements />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
