import React from "react";
import CarCard from "../components/CarCard";

const Vehicles = () => {
  return (
    <div className="my-8 backdrop-blur-lg ">
      {/* banner */}
      <div className="py-5 lg:py-10 px-8 lg:px-12 rounded-3xl drop-shadow-lg bg-white">
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between">
          <div className="">
            <h2 className="text-gray-500 lg:text-xl">Ready to dive in?</h2>
            <p className="text-sunshine lg:text-2xl">
              Start By adding Vehicles.
            </p>
          </div>
          <div className="py-2 lg:py-4 px-4 lg:px-6 bg-sunshine text-white rounded-md cursor-pointer hover:shadow-md">
            Add a Vehicle
          </div>
        </div>
      </div>

      {/* body */}
      <div className="my-12">
        <div className="flex items-center justify-between px-2 py-4 text-gray-500">
          <h1>All Cars</h1>
          <p> sort by price</p>
        </div>
        <hr />
        <div className="my-8 flex flex-col md:grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
