import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>

        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>

        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>

        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>

        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>

        <Link
          href="/list?cat=test"
          className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
          <div className="relative h-96 w-full bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1719861032503-225fac307c59?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
              alt="Category"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>

          <h1 className="mt-8 text-xl font-light tracking-wide">
            Category Name
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
