import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose, IoMdCar } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { MdSettings, MdPermMedia } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Home = () => {
  const [sidebar, setSidebar] = useState(false);
  const percentage = 66;
  return (
    <div className="w-screen h-screen py-5 md:py-0 px-8 md:px-0 relative md:flex">
      <div
        className={`md:relative absolute h-fit md:h-full md:left-0 w-4/5 md:w-[20%] top-0 ${
          sidebar
            ? "left-0 transition duration-3000"
            : "-left-full transition duration-500"
        } z-50  backdrop-blur-2xl py-12 shadow-lg md:shadow-none rounded-xl`}
      >
        <div className="absolute inset-0 bg-grid h-full -z-10 bg-no-repeat bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-blur h-full -z-10 bg-no-repeat bg-cover opacity-30"></div>

        <nav className="flex flex-col md:items-center">
          <div className="flex justify-between items-center px-8 md:px-0">
            <h1 className="md:text-3xl text-2xl font-semibold text-shadow-sm">
              Imperial Shuttle
            </h1>
            <div className="rounded-lg p-1 bg-sunshine hover:shadow-md transition duration-300 md:hidden">
              <IoMdClose
                className="text-2xl font-bold cursor-pointer hover:scale-125 text-white  transition duration-300"
                onClick={() => setSidebar(false)}
              />
            </div>
          </div>
          <div className="my-20 md:my-28 space-y-10 md:w-full pl-12">
            <li
              className="nav-item w-full border-r-4"
              onClick={() => setSidebar(false)}
            >
              <Link to="/" className="nav-link">
                <HiHome className="nav-icon !text-sunshine" />
                <h3 className="nav-text tracking-wider font-semibold">Home</h3>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSidebar(false)}>
              <Link to="/" className="nav-link">
                <MdSettings className="nav-icon" />
                <h3 className="nav-text">Profile</h3>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSidebar(false)}>
              <Link to="/" className="nav-link">
                <IoMdCar className="nav-icon" />
                <h3 className="nav-text">Vehicle</h3>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSidebar(false)}>
              <Link to="/" className="nav-link">
                <MdPermMedia className="nav-icon" />
                <h3 className="nav-text">Media</h3>
              </Link>
            </li>
            <li className="nav-item" onClick={() => setSidebar(false)}>
              <Link to="/" className="nav-link">
                <FaWallet className="nav-icon" />
                <h3 className="nav-text">Wallet</h3>
              </Link>
            </li>
          </div>
          <div
            className="flex items-center gap-8 mt-20 pl-16 w-full hover:text-sunshine group cursor-pointer hover:scale-105"
            onClick={() => console.log("logout")}
          >
            <BiLogOut className="hover-goup:text-sunshine text-3xl" />
            <h3 className="nav-text">Logout</h3>
          </div>
        </nav>
      </div>
      <div className="md:py-4 md:px-14 md:w-[60%]">
        <header className="flex justify-between items-center">
          <AiOutlineBars
            className="text-4xl font-semibold cursor-pointer md:hidden"
            onClick={() => setSidebar(true)}
          />
          <div className="flex shadow rounded-full pr-4 gap-3 items-center">
            <img
              src="assets/profile.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl font-semibold">Jefferson</h1>
          </div>
        </header>
        <main className="my-8 space-y-8 md:space-y-0 md:grid grid-cols-4 gap-4">
          <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
            <div className="flex flex-col justify-between items-between">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
                <p>Total sales today</p>
              </div>
              <div className="text-xl font-bold">$1.000</div>
            </div>

            <CircularProgressbar
              className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                textColor: "#4d4d4d",
                trailColor: "white",
                pathColor: "#ec3323",
              })}
            />
          </div>

          <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
            <div className="flex flex-col justify-between items-between">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
                <p>Total sales today</p>
              </div>
              <div className="text-xl font-bold">$1.000</div>
            </div>

            <CircularProgressbar
              className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                textColor: "#4d4d4d",
                trailColor: "white",
                pathColor: "#008aff",
              })}
            />
          </div>

          <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
            <div className="flex flex-col justify-between items-between">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
                <p>Total sales today</p>
              </div>
              <div className="text-xl font-bold">$1.000</div>
            </div>

            <CircularProgressbar
              className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                textColor: "#4d4d4d",
                trailColor: "white",
                pathColor: "#ec3323",
              })}
            />
          </div>

          <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
            <div className="flex flex-col justify-between items-between">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
                <p>Total sales today</p>
              </div>
              <div className="text-xl font-bold">$1.000</div>
            </div>

            <CircularProgressbar
              className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                textColor: "#4d4d4d",
                trailColor: "white",
                pathColor: "#008aff",
              })}
            />
          </div>
        </main>
      </div>
      <div className="border-4 md:w-[20%]">Hola chica</div>
    </div>
  );
};

export default Home;
