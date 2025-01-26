import React from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

function Home() {
  return (
    <>
    <div className="relative h-[700px] w-full">
  <img
    src="https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg"
    className="h-full w-full object-cover"
    alt="Car Image"
  />
  
  <h1 className="text-white text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    Rent A Car That Suits Your Purpose
  </h1>
  
  
  <div className="absolute bottom-10 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 text-center">
    <p className="text-white text-xl mb-4">Choose your Role</p>
    <div className="flex justify-center gap-6">
      <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
        Provider
      </button>
      <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-700 transition duration-300">
        Consumer
      </button>
    </div>
  </div>
</div>



    <div className="py-5">
        <Card1 />
    </div>
    <div className="py-5">
        <Card2 />
    </div>  
    <div className="py-5">
        <Card3 />
    </div>
    </>
  );
}

export default Home;
