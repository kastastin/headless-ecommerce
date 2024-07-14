import Link from "next/link";
import Image from "next/image";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

import { wixClientServer } from "@/lib/wixClientServer";

interface ProductListProps {
  limit?: number;
  categoryId: string;
  searchParams?: any;
}

const DEFAULT_PRODUCTS_LIMIT = 20;

const ProductList = async ({
  limit,
  categoryId,
  searchParams,
}: ProductListProps) => {
  const wixClient = await wixClientServer();

  let res;

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"],
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || DEFAULT_PRODUCTS_LIMIT);

  // Added value="default" for Sort By option in Filter.tsx
  if (searchParams?.sort && !searchParams?.sort.includes("default")) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") res = await productQuery.ascending(sortBy).find();
    if (sortType === "desc") res = await productQuery.descending(sortBy).find();
  } else {
    res = await productQuery.find();
  }

  return (
    <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-16">
      {res?.items.map((product: products.Product) => (
        <Link
          key={product._id}
          href={`/${product.slug}`}
          className="relative flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative h-80 w-full">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt="Product"
              fill
              sizes="25vw"
              className="absolute z-10 rounded-md object-cover transition-opacity duration-500 ease-in-out hover:opacity-0"
            />

            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt="Product"
                fill
                sizes="25vw"
                className="absolute rounded-md object-cover"
              />
            )}
          </div>

          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.priceData?.price}</span>
          </div>

          {product.additionalInfoSections && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === "shortDescription",
                  )?.description || "No description",
                ),
              }}
            />
          )}

          <button className="w-max rounded-2xl px-4 py-2 text-xs text-red-400 ring-1 ring-red-400 hover:bg-red-400 hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
