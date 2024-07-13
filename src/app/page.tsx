import { Suspense } from "react";

import Slider from "@/components/Slider";
import Skeleton from "@/components/Skeleton";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";

const HomePage = () => (
  <div>
    <Slider />

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">Featured Products</h1>

      <Suspense fallback={<Skeleton />}>
        <ProductList
          categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
          limit={4}
        />
      </Suspense>
    </div>

    <div className="mt-24">
      <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        Categories
      </h1>
      
      <Suspense fallback={<Skeleton />}>
        <CategoryList />
      </Suspense>
    </div>

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <h1 className="text-2xl">New Products</h1>
      {/* <ProductList /> */}
    </div>
  </div>
);

export default HomePage;
