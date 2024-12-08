import Image from "next/image";

function Hero() {
    return (
        <main>
            {/* Desktop and Tablet details: LARGE and MEDIUM Device */}

            {/* Background: Image */}
            <div className="relative h-[calc(100vh-80px)] w-full"> {/* Adjusts height to account for the header */}
                <Image
                    src={"/hero/Hero.png"} // Replace with your image path
                    alt="Hero Image"
                    layout="fill" // This makes the image fill the entire section
                    objectFit="cover" // Ensures the image covers the entire area
                    className="absolute inset-0 object-cover" // Applies full coverage with absolute positioning
                />
            </div>

            {/* Center-right Side */}
            <div className="absolute right-28 top-1/2 mt-16 transform -translate-y-1/2 w-[550px] h-[400px] bg-white shadow-lg flex flex-col justify-between items-start p-6">
                {/* Square Box containing a paragraph and then a button */}
                <p className="text-3xl ml-4 mt-4 text-black">
                    Luxury Homeware for people <br /> who love timeless design quality
                </p>
                <p className="text-sm -mt-8 ml-4 font-clash text-gray-400">
                    Shop the new Spring 2022 collection  today
                </p>
                <br />
                <button className="bg-gray-50 ml-4 mb-4 text-black py-3 px-6 rounded-lg hover:bg-gray-500 hover:text-white transition duration-300">
                    View Collection
                </button>
            </div>

        </main>
    );
}

export default Hero;

//  MOBILE:
// Center-right Side this moves to up
//  Image moves to down, and will not be background image on mobile.
// Button as View Collection will be between the upward content and downward image.
//  Background is white.
