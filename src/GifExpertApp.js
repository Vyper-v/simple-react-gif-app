import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifLayout from "./components/GifLayout";

function GifExpertApp({ defaultCategories = [] }) {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div>
      <div className=" container mx-auto divide-y divide-neutral-500 divide-dashed">
        <h2 className="text-4xl mb-8 leading-normal">GifExpertApp</h2>
        <div className="flex justify-between px-2 py-4">
          <AddCategory setCategories={setCategories} />
        </div>
      </div>
      <div className="container mx-auto space-y-2">
        {categories.map((category) => {
          return (
            <div key={category}>
              <a
                href={`#${category}`}
                className="text-2xl m-2 inline-block text-lime-700 hover:text-lime-600"
              >
                # {category}
              </a>
              <GifLayout id={category} category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GifExpertApp;
