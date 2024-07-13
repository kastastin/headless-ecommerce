import { notFound } from "next/navigation";

import Add from "@/components/Add";
import { wixClientServer } from "@/lib/wixClientServer";
import ProductImages from "@/components/ProductImages";
import CustomProducts from "@/components/CustomProducts";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!res.items[0]) return notFound();

  const product = res.items[0];

  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* Image container */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages items={product.media?.items} />
      </div>

      {/* Text container */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">{product.name}</h1>

        <p className="text-gray-500">{product.description}</p>

        <div className="h-[2px] bg-gray-100" />

        {product.priceData?.price === product.priceData?.discountedPrice ? (
          <h2 className="text-xl text-gray-500 line-through">
            ${product.priceData?.price}
          </h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.priceData?.price}
            </h3>

            <h2 className="text-2xl font-medium">
              ${product.priceData?.discountedPrice}
            </h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {product.variants && product.productOptions && (
          <CustomProducts
            productId={product._id!}
            variants={product.variants}
            options={product.productOptions}
          />
        )}

        <Add />

        <div className="h-[2px] bg-gray-100" />

        {product.additionalInfoSections?.map((section: any) => (
          <div key={section.title} className="text-sm">
            <h4 className="mb-4 font-medium">{section.title}</h4>

            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
