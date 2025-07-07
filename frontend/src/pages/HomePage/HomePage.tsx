import React from "react";
import Hero from "./../../components/unique/Hero/Hero";
import useScrollToTop from "../../hooks/useScrollToTop";
import useToGetPublicData from "../../hooks/useToGetPublicData";
import LoadingSpinner from "../../components/shared/LoadingSpinner/LoadingSpinner";
import Product from "../../components/unique/Product/Product";
import SectionHeading from "./../../components/shared/SectionHeading/SectionHeading";
import type { Product as ProductType } from "../../lib/types";

const HomePage: React.FC = () => {
  useScrollToTop();
  const { data: products, isLoading } = useToGetPublicData<ProductType[]>({
    queryKeyName: "products",
    url: `/products`,
  });

  if (isLoading) return <LoadingSpinner />

  return (
    <>
      <Hero />
      <div className="my-7 pb-10">
        <SectionHeading
          description="Explore our latest products"
          title="Latest Products"
        />
        <div className="grid xl:grid-cols-4 px-4 gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {products?.length &&
            products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
