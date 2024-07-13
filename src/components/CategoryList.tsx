import Link from "next/link";
import Image from "next/image";

import { wixClientServer } from "@/lib/wixClientServer";

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const categories = await wixClient.collections.queryCollections().find();

  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        {categories.items.map((category) => (
          <Link
            key={category._id}
            href={`/list?category=${category.slug}`}
            className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
          >
            <div className="relative h-96 w-full bg-slate-100">
              <Image
                src={category.media?.mainMedia?.image?.url || "cat.png"}
                alt="Category"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>

            <h1 className="mt-8 text-xl font-light tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
