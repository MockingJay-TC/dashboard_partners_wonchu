import { GiGearStickPattern, GiCarDoor } from "react-icons/gi";
import { IoMdPeople, IoMdBluetooth } from "react-icons/io";
import { FaFan, FaGasPump } from "react-icons/fa";
import { Link } from "react-router-dom";
import Review from "./Review";

const CarCard = () => {
  return (
    //   Car Card
    <Link to={`/`} className="relative group">
      {/* <div className="hidden absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-[#ec3323] z-50 py-2 px-4 bg-white rounded-md shadow-xl group-hover:block transition ease-in-out duration-300 delay-150">
        Rent Now
      </div> */}
      <div className="relative cursor-pointer group-hover:shadow-xl hover:scale-105 transition ease-in-out duration-300 delay-150">
        <div className="rounded-xl shadow-md p-8 bg-white h-fit ">
          {/* name */}
          <div className="flex justify-between">
            <h2 className="font-bold">Toyota Camry</h2>
            <Review />
          </div>

          <p className="text-[#88939e] text-left">Spider</p>
          {/* image */}
          <img src="assets/images/1.png" className="my-4 px-6" alt="Car" />
          {/* settings */}
          <div className="grid grid-cols-3 justify-between">
            {/* Passengers */}
            <div className="flex items-center gap-2">
              <IoMdPeople className="text-[#ec3323]" />
              <p>4</p>
            </div>
            {/* ac */}
            <div className="flex items-center gap-2">
              <FaFan className="text-[#ec3323]" />
              <p className="text-md">True</p>
            </div>
            {/* Transmission */}
            <div className="flex items-center gap-2">
              <GiGearStickPattern className="text-[#ec3323]" />
              <p>Automatic</p>
            </div>
            {/* fuel */}
            <div className="flex items-center gap-2">
              <FaGasPump className="text-[#ec3323]" />
              <p>Gas</p>
            </div>
            {/* doors */}
            <div className="flex items-center gap-2">
              <GiCarDoor className="text-[#ec3323]" />
              <p>3</p>
            </div>
            {/* Bluetooth */}
            <div className="flex items-center gap-2">
              <IoMdBluetooth className="text-[#ec3323]" />
              <p>False</p>
            </div>
            {/* Rate */}
          </div>
          <div className="mt-4 py-1.5 bg-[#ec3323] text-white rounded text-center w-[100px]">
            <div className="font-semibold text-md tracking-wide">
              GH₵ 500/d
              {/* <span>/d</span> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
