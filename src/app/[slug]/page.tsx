import Add from "@/components/Add";
import ProductImages from "@/components/ProductImages";
import CustomProducts from "@/components/CustomProducts";

const SinglePage = () => {
  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* Image container */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages />
      </div>

      {/* Text container */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <h1 className="text-4xl font-medium">Product Name</h1>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
          maxime itaque, nobis rerum repellat exercitationem! Nihil reiciendis
          deleniti alias cupiditate minus aspernatur dolore eaque adipisci,
          voluptate sint est, animi sapiente.
        </p>

        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="text-2xl font-medium">$49</h2>
        </div>

        <div className="h-[2px] bg-gray-100" />

        <CustomProducts />
        <Add />

        <div className="h-[2px] bg-gray-100" />

        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, reprehenderit culpa! Magni beatae temporibus et placeat
            nulla fugit distinctio reprehenderit sequi, iusto optio aspernatur
            mollitia quis eaque incidunt accusamus non!
          </p>
        </div>

        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, reprehenderit culpa! Magni beatae temporibus et placeat
            nulla fugit distinctio reprehenderit sequi, iusto optio aspernatur
            mollitia quis eaque incidunt accusamus non!
          </p>
        </div>

        <div className="text-sm">
          <h4 className="mb-4 font-medium">Title</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, reprehenderit culpa! Magni beatae temporibus et placeat
            nulla fugit distinctio reprehenderit sequi, iusto optio aspernatur
            mollitia quis eaque incidunt accusamus non!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
