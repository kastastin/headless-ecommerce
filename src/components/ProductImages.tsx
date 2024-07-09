"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1720299967200-9d6beef0260b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1718016675738-7772815af223?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1720170717116-3b3180ed20c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1671512497536-e20cc1084ea7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjl8fHxlbnwwfHx8fHw%3D",
  },
];

const ProductImages = () => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <div className="relative h-[500px]">
        <Image
          src={images[imageIndex].url}
          alt="Product"
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>

      <div className="mt-4 flex justify-between gap-4">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="relative mt-4 h-32 w-1/4 gap-4"
            onClick={() => setImageIndex(i)}
          >
            <Image
              src={image.url}
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
