// src/components/Collection.tsx

import collection from "@/app/Data/collection";
import Image from "next/image";

function Collection() {
  return (
    <main className="container mx-auto pt-12">
      {/* Use map to iterate through the collection data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collection.map((item) => (
          <div key={item.id} className="bg-white rounded-lg p-4">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={500}
              className="w-[500px] h-[48] object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-lg text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>

      {/* Center the button */}
      <div className="flex justify-center mt-8">
        <button className="bg-gray-100 py-3 px-6 rounded-lg text-center hover:bg-gray-200 transition duration-300">
          View Collection
        </button>
      </div>
    </main>
  );
}

export default Collection;
