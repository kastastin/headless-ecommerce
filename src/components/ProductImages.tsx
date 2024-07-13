"use client";

import { useState } from "react";
import Image from "next/image";

const ProductImages = ({ items }: { items: any }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={items[imageIndex].image?.url}
          alt="Product"
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>

      <div className="mt-4 flex justify-between gap-4">
        {items.map((item: any, i: number) => (
          <div
            key={item._id}
            className="relative mt-4 h-32 w-1/4 cursor-pointer gap-4"
            onClick={() => setImageIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt="Product"
              fill
              sizes="30vw"
              className="rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
