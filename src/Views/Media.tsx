import React from "react";
import AddImage from "../components/AddImage";

const Media = () => {
  return (
    <div className=" flex flex-col xl:grid grid-cols-3 gap-6 py-8">
      <div>
        <AddImage />
        <button className="my-3 text-center w-full py-2 rounded-2xl bg-sunshine text-white hover:shadow-lg">
          Save
        </button>
      </div>
    </div>
  );
};

export default Media;
