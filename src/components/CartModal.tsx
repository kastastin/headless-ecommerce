"use client";

import React from "react";
import Image from "next/image";
import { media as wixMedia } from "@wix/sdk";

import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const CartModal = React.forwardRef<HTMLDivElement>((props, ref) => {
  const wixClient = useWixClient();
  const { cart, isLoading, removeItem } = useCartStore();

  return (
    <div
      ref={ref}
      className="absolute right-0 top-12 z-20 flex w-max flex-col gap-6 rounded-md bg-white p-4 shadow-custom"
    >
      {!cart.lineItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>

          {/* List of items */}
          <div className="flex flex-col gap-8">
            {cart.lineItems.map((item) => (
              <div key={item._id} className="flex gap-4">
                {item.image && (
                  <Image
                    src={wixMedia.getScaledToFillImageUrl(
                      item.image,
                      72,
                      96,
                      {},
                    )}
                    alt="Product"
                    width={72}
                    height={96}
                    className="rounded-md object-cover"
                  />
                )}

                <div className="flex w-full flex-col justify-between">
                  {/* Top */}
                  <div>
                    {/* Title */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">
                        {item.productName?.original}
                      </h3>

                      <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
                        {item.quantity && item.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {item.quantity} x{" "}
                          </div>
                        )}
                        ${item.price?.amount}
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-sm text-gray-500">
                      {item.availability?.status}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. {item.quantity}</span>
                    <span
                      className="text-blue-500"
                      style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                      onClick={() => removeItem(wixClient, item._id!)}
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Under list */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>${cart.subtotal?.amount!}</span>
            </div>

            <p className="mb-4 mt-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300">
                View Cart
              </button>

              <button
                className="rounded-md bg-black px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isLoading}
              >
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
