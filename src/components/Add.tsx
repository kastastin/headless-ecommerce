"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const stock = 12; // TEMPORARY

  const handleQuantity = (type: "-" | "+") => {
    if (type === "-" && quantity > 1) setQuantity((prev) => prev - 1);
    if (type === "+" && quantity < stock) setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose quantity</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("-")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("+")}
            >
              +
            </button>
          </div>

          <div className="text-xs">
            Only <span className="text-orange-500">12 items</span> left!
            <br /> Don&apos;t miss it
          </div>
        </div>

        <button className="w-36 rounded-3xl p-2 text-sm text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
