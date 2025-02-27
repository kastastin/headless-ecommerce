import Image from "next/image";
import { Suspense } from "react";

import Filter from "@/components/Filter";
import Skeleton from "@/components/Skeleton";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";

const ALL_PRODUCTS_CATEGORY_ID = "00000000-000000-000000-000000000001";

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.collections.getCollectionBySlug(
    searchParams.category || "all-products",
  );

  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Campaign */}
      <div className="hidden h-64 justify-between bg-pink-50 px-4 sm:flex">
        <div className="flex w-2/3 flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>

          <button className="w-max rounded-3xl bg-red-400 px-5 py-3 text-sm text-white">
            Buy Now
          </button>
        </div>

        <div className="relative w-1/3">
          <Image src="/woman.png" alt="Woman" fill className="object-contain" />
        </div>
      </div>

      {/* Filter */}
      <Filter />

      {/* Products */}
      <h1 className="mt-12 text-xl font-semibold">
        {res?.collection?.name} For You!
      </h1>
      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={res.collection?._id || ALL_PRODUCTS_CATEGORY_ID}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default ListPage;
