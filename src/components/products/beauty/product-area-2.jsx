import React, { useEffect, useRef, useState } from "react";
import ProductItem from "./product-item";
import ErrorMsg from "@/components/common/error-msg";
import { useGetProductTypeQuery } from "@/redux/features/productApi";
import { HomeThreePrdTwoLoader } from "@/components/loader";

// Tabs
const tabs = ["All Collection", "Trending", "beds", "chairs"];

const ProductAreaTwo = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeRef = useRef(null);
  const marker = useRef(null);
  const [categories, setCategories] = useState([]);

  // Function to get query parameter based on the active tab
  const getQueryParam = (tab) => {
    switch (tab) {
      case "Trending":
        return "trending=true";
      case "beds":
        return "category_id=3";
      case "chairs":
        return "category_id=2";
      default:
        return ""; // Default for "All Collection"
    }
  };

  // Fetch products based on the active tab using useGetProductTypeQuery
  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductTypeQuery({
    type: "furniture",
    query: getQueryParam(activeTab),
  });

  // Handle tab click to set activeTab and update UI accordingly
  const handleActive = (e, tab) => {
    setActiveTab(tab);
    if (e.target.classList.contains("active")) {
      marker.current.style.left = e.target.offsetLeft + "px";
      marker.current.style.width = e.target.offsetWidth + "px";
    }
  };

  // Effect to update marker position when activeTab changes
  useEffect(() => {
    if (activeTab && activeRef.current && activeRef.current.classList.contains("active")) {
      marker.current.style.left = activeRef.current.offsetLeft + "px";
      marker.current.style.width = activeRef.current.offsetWidth + "px";
    }
  }, [activeTab, products]);

  // Effect to fetch categories (if needed) on component mount
  useEffect(() => {
    fetch('/showCategory')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Determine content based on loading state, error, and products data
  let content = null;
  if (isLoading) {
    content = <HomeThreePrdTwoLoader loading={isLoading} />;
  } else if (isError) {
    content = <ErrorMsg msg="There was an error" />;
  } else if (products?.data?.length === 0) {
    content = <ErrorMsg msg="No Products found!" />;
  } else if (products?.data?.length > 0) {
    let product_items = products.data;

    // Apply specific filters based on activeTab
    switch (activeTab) {
      case "Trending":
        product_items = products.data.filter(p => p.status.toLowerCase().includes("trending"));
        break;
      case "beds":
        product_items = products.data.filter(p => p.category_id === 3);
        break;
      case "chairs":
        product_items = products.data.filter(p => p.category_id === 2);
        break;
      default:
        // For "All Collection", no additional filtering needed
        break;
    }

    content = (
      <>
        <div className="row align-items-end">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-section-title-wrapper-3 mb-45 text-center text-lg-start">
              <span className="tp-section-title-pre-3">
                Best Seller This Week’s
              </span>
              <h3 className="tp-section-title-3">Enjoy the best quality</h3>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-tab-2 tp-product-tab-3 tp-tab mb-50 text-center">
              <div className="tp-product-tab-inner-3 d-flex align-items-center justify-content-center justify-content-lg-end">
                <nav>
                  <div
                    className="nav nav-tabs justify-content-center tp-product-tab tp-tab-menu p-relative"
                    id="nav-tab"
                    role="tablist"
                  >
                    {tabs.map((tab, i) => (
                      <button
                        key={i}
                        ref={activeTab === tab ? activeRef : null}
                        onClick={(e) => handleActive(e, tab)}
                        className={`nav-link text-capitalize ${
                          activeTab === tab ? "active" : ""
                        }`}
                      >
                        {tab.split("-").join(" ")}
                        <span className="tp-product-tab-tooltip">
                          {product_items.length}
                        </span>
                      </button>
                    ))}
                    <span
                      ref={marker}
                      id="productTabMarker"
                      className="tp-tab-line d-none d-sm-inline-block"
                    ></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {product_items.map((prd) => (
            <div key={prd.id} className="col-lg-3 col-md-4 col-sm-6">
              <ProductItem product={prd} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <section className="tp-best-area pb-60 pt-130">
      <div className="container">{content}</div>
    </section>
  );
};

export default ProductAreaTwo;
