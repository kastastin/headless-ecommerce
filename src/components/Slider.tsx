"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full w-max transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex h-full w-screen flex-col gap-16 xl:flex-row ${slide.bg}`}
          >
            {/* Text container */}
            <div className="flex h-1/2 flex-col items-center justify-center gap-8 text-center xl:h-full xl:w-1/2 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>

              <h1 className="text-5xl font-semibold lg:text-6xl 2xl:text-8xl">
                {slide.title}
              </h1>

              <Link href={slide.url}>
                <button className="rounded-md bg-black px-4 py-3 text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>

            {/* Image container */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 m-auto flex gap-4">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`flex size-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-gray-600 ${currentSlide === i ? "scale-150" : ""}`}
            onClick={() => setCurrentSlide(i)}
          >
            {currentSlide === i && (
              <div className="size-[6px] rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
