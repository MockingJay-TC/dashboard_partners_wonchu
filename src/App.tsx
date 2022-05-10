import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Sidebar from "./Layout/SideBar";
import Wallet from "./Views/Wallet";
import Vehicles from "./Views/Vehicles";
import Media from "./Views/Media";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Sidebar childComp={<Home />} />} />
          <Route
            path="/profile"
            element={<Sidebar childComp={<Profile />} />}
          />
          <Route path="/wallet" element={<Sidebar childComp={<Wallet />} />} />
          <Route
            path="/vehicle"
            element={<Sidebar childComp={<Vehicles />} />}
          />
          <Route path="/media" element={<Sidebar childComp={<Media />} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
