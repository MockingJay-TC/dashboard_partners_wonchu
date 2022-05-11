import React from "react";
import { RevChart } from "../components/RevChart";
import { FaCar } from "react-icons/fa";

const OverView = () => {
  return (
    <div className="md:w-[30%] xl:w-[20%] relative md:border-l border-dashed md:p-8 px-4 py-8">
      <div className="absolute inset-0 bg-grid h-full -z-10 bg-no-repeat bg-cover opacity-20"></div>
      <div className="absolute inset-0 bg-blur h-full -z-10 bg-no-repeat bg-cover opacity-40"></div>
      <h1 className="text-xl font-semibold text-gray-500">OverView</h1>
      <div className="my-8 space-y-8">
        {/* Total Cars */}
        <div className="flex items-center">
          <div className="p-3 border rounded-full shadow-md">
            <FaCar className="text-sunshine text-3xl" />
          </div>
          <div className="lg:ml-12 tracking-wider">
            <div className="text-2xl font-semibold text-gray-500">300</div>
            <div className="text-md text-gray-500">Cars</div>
          </div>
        </div>
        {/* Total rented */}
        <div className="flex items-center">
          <div className="p-3 border rounded-full shadow-md">
            <FaCar className="text-sunshine text-3xl" />
          </div>
          <div className="lg:ml-12 tracking-wider">
            <div className="text-2xl font-semibold text-gray-500">150</div>
            <div className="text-md text-gray-500">Rented</div>
          </div>
        </div>
        {/* Total In use */}
        <div className="flex items-center">
          <div className="p-3 border rounded-full shadow-md">
            <FaCar className="text-sunshine text-3xl" />
          </div>
          <div className="lg:ml-12 tracking-wider">
            <div className="text-2xl font-semibold text-gray-500">50</div>
            <div className="text-md text-gray-500">In-use</div>
          </div>
        </div>
      </div>
      <RevChart />
    </div>
  );
};

export default OverView;
