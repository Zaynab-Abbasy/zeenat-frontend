import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import ShopBreadcrumb from "@/components/breadcrumb/shop-breadcrumb";
import ShopArea from "@/components/shop/shop-area";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import ErrorMsg from "@/components/common/error-msg";
import Footer from "@/layout/footers/footer";
import ShopLoader from "@/components/loader/shop/shop-loader";

const ShopPage = ({ query }) => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery({
    category: query.category,
    color: query.color,
    subCategory: query.subCategory
  });
console.log("products",products)
  const [priceValue, setPriceValue] = useState([0, 0]);
  const [selectValue, setSelectValue] = useState("");
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    if (!isLoading && !isError && products?.data?.length > 0) {
      const maxPrice = products.data.reduce((max, product) => {
        return product.price > max ? product.price : max;
      }, 0);
      setPriceValue([0, maxPrice]);
    }
  }, [isLoading, isError, products]);

  const handleChanges = (val) => {
    setCurrPage(1);
    setPriceValue(val);
  };

  const selectHandleFilter = (e) => {
    setSelectValue(e.value);
  };

  const otherProps = {
    priceFilterValues: {
      priceValue,
      handleChanges,
    },
    selectHandleFilter,
    currPage,
    setCurrPage,
  };

  let content = null;

  if (isLoading) {
    content = <ShopLoader loading={isLoading} />;
  }
  if (!isLoading && isError) {
    content = <div className="pb-80 text-center"><ErrorMsg msg="There was an error" /></div>;
  }
  if (!isLoading && !isError && products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  }
  if (!isLoading && !isError && products?.data?.length > 0) {
    let product_items = products.data;

    if (selectValue) {
      if (selectValue === "Default Sorting") {
        product_items = products.data;
      } else if (selectValue === "Low to High") {
        product_items = products.data.slice().sort((a, b) => Number(a.price) - Number(b.price));
      } else if (selectValue === "High to Low") {
        product_items = products.data.slice().sort((a, b) => Number(b.price) - Number(a.price));
      } else if (selectValue === "New Added") {
        product_items = products.data.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (selectValue === "On Sale") {
        product_items = products.data.filter((p) => p.discount > 0);
      } else {
        product_items = products.data;
      }
    }

    product_items = product_items.filter((p) => p.price >= priceValue[0] && p.price <= priceValue[1]);

    if (query.category) {
      console.log('Category Filter:', query.category);
      product_items = product_items.filter((p) => p.category && p.category.toLowerCase() === query.category.toLowerCase());
      console.log('After category filter:', product_items);
    }

    if (query.subCategory) {
      console.log('Before subcategory filter:', product_items);
      product_items = product_items.filter((p) => p.subcategory_name && p.subcategory_name.toLowerCase() === query.subCategory.toLowerCase());
      console.log('After subcategory filter:', product_items);
    }

    if (query.color) {
      product_items = product_items.filter((product) => {
        console.log('Color Filter:', query.color);
        const imageUrls = JSON.parse(product.imageURLs);
        for (let imgData of imageUrls) {
          const color = imgData.color;
          if (color && color.name.toLowerCase() === query.color.toLowerCase()) {
            return true;
          }
        }
        return false;
      });
    }

    content = (
      <>
        <ShopArea all_products={products.data} products={product_items} otherProps={otherProps} />
      </>
    );
  }

  return (
    <Wrapper>
      <SEO pageTitle="Shop" />
      <HeaderTwo style_2={true} />
      <ShopBreadcrumb title="Shop Products" subtitle="Shop" />
      {content}
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ShopPage;

export const getServerSideProps = async (context) => {
  const { query } = context;
  console.log('Query:', query);

  return {
    props: {
      query,
    },
  };
};
