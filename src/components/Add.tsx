"use client";

import { useState } from "react";

import { useWixClient } from "@/hooks/useWixClient";

interface AddProps {
  productId: string;
  variantId: string;
  stockNumber: number;
}

const Add = ({ productId, variantId, stockNumber }: AddProps) => {
  const wixClient = useWixClient();

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "d" | "a") => {
    if (type === "d" && quantity > 1) setQuantity((prev) => prev - 1);
    if (type === "a" && quantity < stockNumber) setQuantity((prev) => prev + 1);
  };

  const addItem = async () => {
    const res = await wixClient.currentCart.addToCurrentCart({
      lineItems: [
        {
          catalogReference: {
            appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
            catalogItemId: productId,
            ...(variantId && { options: { variantId } }),
          },
          quantity,
        },
      ],
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose quantity</h4>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("a")}
            >
              +
            </button>
          </div>

          {stockNumber < 1 ? (
            <div className="text-xs">Product is out of stock</div>
          ) : (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> Don&apos;t miss it
            </div>
          )}
        </div>

        <button
          className="w-36 rounded-3xl p-2 text-sm text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-0"
          onClick={addItem}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
