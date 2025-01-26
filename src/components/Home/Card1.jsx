import React from "react";

function Card1() {
  const cards = [
    {
      title: "Book",
      description: "Search and book a car on our site.",
      imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg",
    },
    {
      title: "Upload Documents",
      description: "Upload your documents and pay a small security deposit.",
      imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg",
    },
    {
      title: "Get Vehicle",
      description: "Take our vehicle from our hub or get it at your doorstep.",
      imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg",
    },
    {
      title: "Enjoy Trips",
      description: "Enjoy your ride with Wowcarz.",
      imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg",
    },
    {
      title: "Return",
      description:
        "Return the car to the same location and fill the end checklist to end your trip.",
      imgSrc: "https://i.pinimg.com/736x/2e/14/d9/2e14d9454e07214edc86c1b11174f3ba.jpg",
    },
  ];

  return (
    <div className="py-12 w-full">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold  mb-4">How It Works</h1>
        <p className=" text-lg">
          Follow these simple steps to book and enjoy your ride with Wowcarz.
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-10 py-5">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg p-6 w-60 sm:w-60 hover:scale-105 transition-transform duration-300 z-0"
          >
            <div className="absolute -top-10 flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-md">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="h-12 w-12 object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-4">{card.title}</h2>
            <p className="text-gray-600 text-center">{card.description}</p>
            <button className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card1;
