import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
// internal
import ErrorMsg from "@/components/common/error-msg";
import { useGetAllProductsQuery } from "@/redux/features/productApi";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";
import ShopColorLoader from "@/components/loader/shop/color-filter-loader";

const ColorFilter = ({ setCurrPage, shop_right = false }) => {
  const { data: products, isError, isLoading } = useGetAllProductsQuery({});
  const router = useRouter();
  const dispatch = useDispatch();

  // State to store unique colors
  const [uniqueColors, setUniqueColors] = useState([]);

  // Fetch all colors from products on component mount or when products change
  useEffect(() => {
    if (!isLoading && !isError && products?.data?.length > 0) {
      const product_items = products.data;
      let allColors = new Set();

      product_items.forEach((product) => {
        if (product.imageURLs) {
          const imageUrlsArray = JSON.parse(product.imageURLs);
          imageUrlsArray.forEach((item) => {
            if (item.color && item.color.name && item.color.clrCode) {
              const colorNameFormatted = item.color.name.toLowerCase().replace("&", "").split(" ").join("-");
              const colorCode = item.color.clrCode;
              allColors.add(`${colorNameFormatted}:${colorCode}`);
            }
          });
        }
      });

      setUniqueColors(Array.from(allColors).map(color => {
        const [name, clrCode] = color.split(":");
        return { name, clrCode };
      }));
    }
  }, [isLoading, isError, products]);

  // Handle color selection
  const handleColor = (color) => {
    setCurrPage(1);
    router.push(
      `/${shop_right ? "shop-right-sidebar" : "shop"}?color=${color
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
    );
    dispatch(handleFilterSidebarClose());
  };

  // Render color filter checkboxes
  let content = null;
  if (isLoading) {
    content = <ShopColorLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  } else if (products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else {
    content = uniqueColors.map((color, index) => (
      <li key={index}>
        <div className="tp-shop-widget-checkbox-circle">
          <input
            type="checkbox"
            id={color.name}
            checked={router.query.color === color.name ? "checked" : false}
            readOnly
          />
          <label onClick={() => handleColor(color.name)} htmlFor={color.name}>
            {color.name}
          </label>
          <span
            style={{ backgroundColor: `${color.clrCode}` }}
            className="tp-shop-widget-checkbox-circle-self"
          ></span>
        </div>
      </li>
    ));
  }

  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Filter by Color</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox-circle-list">
          <ul>{content}</ul>
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
