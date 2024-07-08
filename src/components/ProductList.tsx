import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      <Link
        href="/test"
        className="relative flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          />

          <Image
            src="https://images.unsplash.com/photo-1719917226565-d66c05937ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">Desctiption</div>

        <button className="w-max rounded-2xl px-4 py-2 text-xs text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="relative flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          />

          <Image
            src="https://images.unsplash.com/photo-1719917226565-d66c05937ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">Desctiption</div>

        <button className="w-max rounded-2xl px-4 py-2 text-xs text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="relative flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          />

          <Image
            src="https://images.unsplash.com/photo-1719917226565-d66c05937ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">Desctiption</div>

        <button className="w-max rounded-2xl px-4 py-2 text-xs text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/test"
        className="relative flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative h-80 w-full">
          <Image
            src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
          />

          <Image
            src="https://images.unsplash.com/photo-1719917226565-d66c05937ba2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt="Product"
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>

        <div className="text-sm text-gray-500">Desctiption</div>

        <button className="w-max rounded-2xl px-4 py-2 text-xs text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white">
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
