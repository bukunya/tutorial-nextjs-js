import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="w-full sm:w-8 h-[5vh] bg-red-500" />
      <div className="w-full md:w-32 h-[5vh] bg-green-500" />
      <div className="w-full lg:w-96 h-[5vh] bg-yellow-500" />
      <div className="w-full xl:w-2xl h-[5vh] bg-blue-500" />
    </div>
  );
};

export default page;
