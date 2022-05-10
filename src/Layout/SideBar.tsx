import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";
import { IoMdClose, IoMdCar } from "react-icons/io";
import { HiHome } from "react-icons/hi";
import { MdSettings, MdPermMedia } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RevChart } from "../components/RevChart";

const Home = ({ childComp }: { childComp: JSX.Element }) => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [active, location.pathname]);

  console.log(active);

  return (
    <div className="w-screen h-screen py-5 md:py-0 px-8 md:px-0 relative md:flex">
      <div
        className={`md:relative absolute md:left-0 w-4/5 md:w-[20%] top-0 h-full ${
          sidebar
            ? "left-0 transition duration-3000"
            : "-left-full transition duration-500"
        } z-50  backdrop-blur-2xl py-12 shadow-lg md:shadow-none rounded-xl`}
      >
        <div className="absolute inset-0 bg-grid h-full -z-10 bg-no-repeat bg-cover opacity-40"></div>
        <div className="absolute inset-0 bg-blur h-full -z-10 bg-no-repeat bg-cover opacity-60"></div>

        <nav className="flex flex-col md:items-center justify-between h-full">
          <div className="w-full flex flex-col md:items-center gap-10">
            <div className="flex justify-between items-center px-8 md:px-0">
              <h1 className="md:text-3xl text-2xl font-semibold text-shadow-sm text-gray-600">
                Imperial Shuttle
              </h1>
              <div className="rounded-lg p-1 bg-sunshine hover:shadow-md transition duration-300 md:hidden">
                <IoMdClose
                  className="text-2xl font-bold cursor-pointer hover:scale-125 text-white  transition duration-300"
                  onClick={() => setSidebar(false)}
                />
              </div>
            </div>
            <div className="md:my-16 space-y-4 md:w-full pl-12">
              <li
                className={`${
                  active === "/" ? "nav-item w-full border-r-4" : "nav-item"
                }`}
                onClick={() => setSidebar(false)}
              >
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => setSidebar(false)}
                >
                  <HiHome
                    className={` ${
                      active === "/" ? "!text-sunshine nav-icon" : "nav-icon"
                    }`}
                  />
                  <h3
                    className={` ${
                      active === "/"
                        ? "tracking-wider font-semibold !text-sunshine nav-text"
                        : "nav-text"
                    }`}
                  >
                    Home
                  </h3>
                </Link>
              </li>
              {/* Profile */}
              <li
                className={`${
                  active === "/profile"
                    ? "nav-item w-full border-r-4"
                    : "nav-item"
                }`}
                onClick={() => setSidebar(false)}
              >
                <Link
                  to="/profile"
                  className="nav-link"
                  onClick={() => setSidebar(false)}
                >
                  <MdSettings
                    className={` ${
                      active === "/profile" ? "!text-sunshine nav-icon" : "nav-icon"
                    }`}
                  />
                  <h3
                    className={` ${
                      active === "/profile"
                        ? "tracking-wider font-semibold !text-sunshine nav-text"
                        : "nav-text"
                    }`}
                  >
                    Profile
                  </h3>
                </Link>
              </li>
              {/* Vehicle */}
              <li
                className={`${
                  active === "/vehicle"
                    ? "nav-item w-full border-r-4"
                    : "nav-item"
                }`}
                onClick={() => setSidebar(false)}
              >
                <Link
                  to="/vehicle"
                  className="nav-link"
                  onClick={() => setSidebar(false)}
                >
                  <IoMdCar
                    className={` ${
                      active === "/vehicle"
                        ? "!text-sunshine nav-icon"
                        : "nav-icon"
                    }`}
                  />
                  <h3
                    className={` ${
                      active === "/vehicle"
                        ? "tracking-wider font-semibold !text-sunshine nav-text"
                        : "nav-text"
                    }`}
                  >
                    Vehicle
                  </h3>
                </Link>
              </li>
              {/* Media */}
              <li
                className={`${
                  active === "/media"
                    ? "nav-item w-full border-r-4"
                    : "nav-item"
                }`}
                onClick={() => setSidebar(false)}
              >
                <Link
                  to="/media"
                  className="nav-link"
                  onClick={() => setSidebar(false)}
                >
                  <MdPermMedia
                    className={` ${
                      active === "/media"
                        ? "!text-sunshine nav-icon"
                        : "nav-icon"
                    }`}
                  />
                  <h3
                    className={` ${
                      active === "/media"
                        ? "tracking-wider font-semibold !text-sunshine nav-text"
                        : "nav-text"
                    }`}
                  >
                    Media
                  </h3>
                </Link>
              </li>
              {/* Wallet */}
              <li
                className={`${
                  active === "/wallet"
                    ? "nav-item w-full border-r-4"
                    : "nav-item"
                }`}
                onClick={() => setSidebar(false)}
              >
                <Link
                  to="/wallet"
                  className="nav-link"
                  onClick={() => setSidebar(false)}
                >
                  <FaWallet
                    className={` ${
                      active === "/wallet"
                        ? "!text-sunshine nav-icon"
                        : "nav-icon"
                    }`}
                  />
                  <h3
                    className={` ${
                      active === "/wallet"
                        ? "tracking-wider font-semibold !text-sunshine nav-text"
                        : "nav-text"
                    }`}
                  >
                    Wallet
                  </h3>
                </Link>
              </li>
            </div>
          </div>
          <div
            className="flex items-center gap-8  pl-16 w-full hover:text-sunshine group cursor-pointer hover:scale-105"
            onClick={() => console.log("logout")}
          >
            <BiLogOut className="text-gray-500 group-hover:text-sunshine text-2xl" />
            <h3 className="nav-text group-hover:text-sunshine">Logout</h3>
          </div>
        </nav>
      </div>
      <div className="md:py-4 md:px-14 md:w-[60%] relative">
        <div className="absolute inset-0 bg-grid h-full -z-10 bg-no-repeat bg-cover opacity-10"></div>

        <header className="flex justify-between items-center">
          <AiOutlineBars
            className="text-4xl font-semibold cursor-pointer md:hidden text-gray-500"
            onClick={() => setSidebar(true)}
          />
          <div className="flex shadow rounded-full pr-4 gap-3 items-center">
            <img
              src="assets/profile.jpg"
              alt=""
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-md font-semibold">Jefferson</h1>
          </div>
        </header>
        {/* Body */}
        {childComp}
      </div>
      <div className="md:w-[20%] relative md:border-l border-dashed md:p-8 px-4 py-8">
        <div className="absolute inset-0 bg-grid h-full -z-10 bg-no-repeat bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-blur h-full -z-10 bg-no-repeat bg-cover opacity-40"></div>
        <h1>Hello World</h1>
        <RevChart />
      </div>
    </div>
  );
};

export default Home;
