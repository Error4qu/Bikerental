import React from "react";

function Card3() {
  const cars = Array.from({ length: 10 }, (_, index) => ({
    model: `Car Model ${index + 1}`,
    price: `$${(Math.random() * 100 + 20).toFixed(2)} per day`,
    specifications: [
      "Air Conditioning",
      "Automatic Transmission",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "Leather Seats",
    ],
    imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg", // Placeholder car image
  }));

  return (
    <div className="py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold  mb-4">Cars for Rent</h1>
        <p className=" text-lg">
          Choose from our range of cars for a perfect ride.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-48 mb-4 flex items-center justify-center bg-gray-200 rounded-xl">
              <img
                src={car.imgSrc}
                alt={car.model}
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{car.model}</h2>
            <p className="text-lg text-gray-600 mt-2">{car.price}</p>
            <ul className="text-sm text-gray-500 mt-4 space-y-2">
              {car.specifications.map((spec, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">✔</span>{spec}
                </li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card3;
