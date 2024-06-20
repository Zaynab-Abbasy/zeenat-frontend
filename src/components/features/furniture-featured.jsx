import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FurnitureFeatured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/products/featured')
      .then(response => response.json())
      .then(data => setProducts(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const truncateDescription = (description) => {
    // Trim description to two lines
    const maxLength = 120; // Adjust as needed
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  const toggleDescription = (item) => {
    const index = products.findIndex(product => product.id === item.id);
    const updatedProducts = [...products];
    updatedProducts[index].showFullDescription = !updatedProducts[index].showFullDescription;
    setProducts(updatedProducts);
  };

  return (
    <>
      <section className="tp-featured-product-area pt-70 pb-150">
        <div className="container">
          <div className="row gx-0">
            {products.map(item => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="tp-featured-item-3 text-center">
                  <div className="tp-featured-thumb-3 d-flex align-items-end justify-content-center">
                    <Image src={item.img} alt="featured image" width={300} height={300} />
                  </div>
                  <div className="tp-featured-content-3">
                    <h3 className="tp-featured-title-3">
                      <Link href="/shop">{item.title}</Link>
                    </h3>
                    <p>
                      {item.showFullDescription
                        ? item.description
                        : truncateDescription(item.description)}
                      {item.description.length > 120 && (
                        <button
                          className="toggle-description-btn"
                          onClick={() => toggleDescription(item)}
                        >
                          {item.showFullDescription ? 'See less' : 'See more'}
                        </button>
                      )}
                    </p>
                    <div className="tp-featured-price-3">
                      <span>Save RS.{item.discount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FurnitureFeatured;
