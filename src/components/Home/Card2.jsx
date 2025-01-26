import React from "react";

function Card2() {
  const reviews = [
    {
      reviewer: "John Doe",
      rating: 5,
      reviewText: "Wowcarz made my trip seamless and enjoyable. Highly recommend!",
    },
    {
        reviewer: "John Doe",
        rating: 5,
        reviewText: "Wowcarz made my trip seamless and enjoyable. Highly recommend!",
      },
      {
        reviewer: "John Doe",
        rating: 5,
        reviewText: "Wowcarz made my trip seamless and enjoyable. Highly recommend!",
      },
    {
      reviewer: "Jane Smith",
      rating: 4,
      reviewText: "Great experience, though the car could have been cleaner.",
    },
    {
      reviewer: "Michael Johnson",
      rating: 5,
      reviewText: "The best car rental service I've used! Will definitely use again.",
    },
    {
      reviewer: "Emily Davis",
      rating: 3,
      reviewText: "Good service, but the delivery was a bit delayed.",
    },
    {
      reviewer: "James Wilson",
      rating: 4,
      reviewText: "Affordable and convenient service. Loved the app experience.",
    },
    {
      reviewer: "Sarah Brown",
      rating: 5,
      reviewText: "Excellent! The customer service was exceptional.",
    },
  ];

  return (
    <div className="py-12 px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4">Customer Reviews</h1>
        <p className=" text-lg">
          See what our customers have to say about their experience with Wowcarz.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-between bg-white rounded-2xl shadow-lg p-6 w-72 sm:w-80 hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-bold text-gray-800">{review.reviewer}</h2>
              <div className="text-yellow-500 mt-2">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </div>
            </div>
            <p className="text-gray-600 text-center">{review.reviewText}</p>
            <button className="mt-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card2;
