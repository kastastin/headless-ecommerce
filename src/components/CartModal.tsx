"use client";

import React, { useEffect } from "react";
import Image from "next/image";

import { useWixClient } from "@/hooks/useWixClient";

const CartModal = React.forwardRef<HTMLDivElement>((props, ref) => {
  const cartItems = true; // TEMPORARY

  const wixClient = useWixClient();

  useEffect(() => {
    const getCart = async () => {
      const res = await wixClient.currentCart.getCurrentCart();
      console.log(res);
    };

    getCart();
  }, [wixClient]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-custom"
    >
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>

          {/* List of items */}
          <div className="flex flex-col gap-8">
            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="Product"
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$49</div>
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="cursor-pointer text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/* Item */}
            <div className="flex gap-4">
              <Image
                src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
                alt="Product"
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex w-full flex-col justify-between">
                {/* Top */}
                <div>
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="rounded-sm bg-gray-50 p-1">$49</div>
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="cursor-pointer text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* Under list */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>

            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>

              <button className="rounded-md bg-black px-4 py-3 text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

CartModal.displayName = "CartModal";

export default CartModal;
