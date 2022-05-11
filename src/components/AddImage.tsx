import React from "react";
import { BsUpload } from "react-icons/bs";

const AddImage = () => {
  return (
    <div className="move w-full h-72 rounded-md shadow-lg border-dashed border-2 border-sunshine flex items-center justify-center text-sunshine text-2xl group bg-white ">
      <div className="relative w-full text-center">
        <BsUpload className="mx-auto text-5xl my-4" />
        <button className="tracking-widest uppercase text-xl font-semibold relative cursor-pointer py-3 px-5 z-10 bg-[#f7fafb] rounded-xl shadow-md mx-4">
          <input
            className="absolute z-20 opacity-0 w-full h-full text-xl top-0 left-0 cursor-pointer"
            type="file"
          />
          Upload file
        </button>
        <p className="my-3 text-sm">jpg, png</p>
      </div>
    </div>
  );
};

export default AddImage;
