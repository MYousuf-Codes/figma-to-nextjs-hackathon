"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

function NewsLettter() {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <main className="relative">
      {/* Background Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <Image
          src={"/newsletter.png"}
          alt="Email Newsletter Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Join the club and get the benefits
          </h1>
          <p className="mb-6 text-sm sm:text-base max-w-xs sm:max-w-md lg:max-w-lg">
            Sign up for our newsletter and receive exclusive offers on <br />
            new ranges, sales, pop-up stores, and more.
          </p>

          {/* List Items */}
          <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base mb-6">
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" />
              Exclusive offers
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" />
              Free events
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-white mr-2" />
              Large discounts
            </li>
          </ul>

          {/* Email Input and Submit Button */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-sm sm:max-w-lg"
          >
            <input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 px-4 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-950 text-white py-2 px-6 sm:px-12 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Sign up
            </button>
          </form>

          {/* Alert Message */}
          {showAlert && (
            <div className="absolute bottom-4 bg-green-500 text-white py-2 px-4 rounded-md">
              <span>Thanks for subscribing! 🎉</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default NewsLettter;
