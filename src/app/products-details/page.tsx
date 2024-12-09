import Branding from "@/components/Branding";
import Collection from "@/components/Collection";
import NewsLettter from "@/components/NewsLetter";
import Image from "next/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <main className="min-h-screen bg-white -mt-20 top-0 mx-auto">
      {/* Container for adjusting header height */}
      <div className="h-16 md:h-20 fixed top-0 left-0 w-full z-50">
        {/* Header content */}
      </div>

      {/* Desktop and Tablet Layout */}
      <div className="grid md:grid-cols-2 gap-8 p-4 pt-20 md:pt-24"> 
        {/* Added pt-20 to avoid overlap with fixed header */}

        {/* Left side (Image) on Desktop and Tablet */}
        <div className="flex mt-0 ml-0 justify-center items-center">
          <Image
            src="/productImage.png" // Replace with actual product image path
            alt="Product Image"
            width={800} // Adjust width to 50% of the screen
            height={600} // Min-height with some margin and padding
            className="object-contain"
          />
        </div>

        {/* Right side (Product Info) */}
        <div className="flex flex-col justify-center items-start">
          {/* Product Name */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">The Dandy Chair</h1>

          {/* Product Price */}
          <p className="mt-2 text-xl md:text-2xl text-gray-700">£250</p>

          {/* Product Description */}
          <div className="mt-4 text-sm md:text-base">
            <p className="text-gray-800">
              A timeless design, with premium materials features as one of our most popular and iconic pieces.
              The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions (Table Layout) */}
          <div className="mt-4 w-full text-sm md:text-base">
            <p className="font-semibold text-gray-800 mb-2">Dimensions</p>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="border p-2 text-left">Height</th>
                  <th className="border p-2 text-left">Width</th>
                  <th className="border p-2 text-left">Depth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">110cm</td>
                  <td className="border p-2">75cm</td>
                  <td className="border p-2">50cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quantity and Add to Cart Button - Desktop and Tablet */}
          <div className="flex md:flex-row flex-col justify-between mt-6 w-full space-y-4 md:space-y-0">
            {/* Quantity Selection */}
            <div className="flex items-center space-x-2">
              <p className="mr-4 text-sm md:text-lg text-gray-700">Quantity</p>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-300 flex items-center justify-center text-black gap-6 px-6 py-3">
                  <AiOutlineMinus /> 1 <AiOutlinePlus/>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="mt-4 md:mt-0">
              <button className="w-full md:w-auto px-6 py-3 bg-blue-950 text-white font-semibold  hover:bg-blue-700 transition duration-200 border border-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (Responsive Behavior) */}
      <div className="block md:hidden p-4 pt-20 md:pt-24">

        {/* Product Image (Full width on Mobile) */}
        <div className="w-full mb-4">
          <Image
            src="/product.png" // Replace with actual product image path
            alt="Product Image"
            width={600} // Full width on mobile
            height={400} // Adjust height for mobile
            className="object-cover"
          />
        </div>

        {/* Product Info (Centered) */}
        <div className="w-full text-center">
          <h1 className="text-xl font-semibold text-gray-900">The Dandy Chair</h1>
          <p className="mt-2 text-lg text-gray-700">£250</p>

          {/* Product Description */}
          <div className="mt-4 text-sm">
            <p className="text-gray-800">
              A timeless design, with premium materials features as one of our most popular and iconic pieces.
              The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>
            <ul className="mt-2 list-disc pl-5">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>
          </div>

          {/* Dimensions (Mobile Table) */}
          <div className="mt-4 w-full text-sm">
            <p className="font-semibold text-gray-800 mb-2">Dimensions</p>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="text-left">Height</th>
                  <th className="text-left">Width</th>
                  <th className="text-left">Depth</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>110cm</td>
                  <td>75cm</td>
                  <td>50cm</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Quantity Selection (Mobile) */}
          <div className="mt-6">
            <p className="text-lg text-gray-700 mb-2">Quantity</p>
            <div className="flex justify-center items-center space-x-2">
              <button className="bg-gray-300 text-lg px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                <AiOutlineMinus />
              </button>
              <span className="px-4 py-2 border-t border-b text-lg text-gray-700">1</span>
              <button className="bg-gray-300 text-lg px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200">
                <AiOutlinePlus />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 border border-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      
      <div> 
      <h1 className="-mb-7 text-4xl ml-12">You Might Also Like</h1>
      <Collection />
      </div>

      <div className="pt-10 pb-2">
        <Branding />
      </div>

      <div>
        <NewsLettter useBackgroundImage={false} textColor="text-black"/>
      </div>

    </main>
  );
};

export default ProductDetails;
