import React, { useState } from 'react';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = async () => {
    setLoading(true);
    setError('');
    setOrderDetails(null); // Reset order details on new search

    try {
      const response = await fetch(`http://127.0.0.1:5000/trackorder?orderId=${orderId}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setOrderDetails(data);
    } catch (err) {
      setError(err.message || 'Failed to track order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <HeaderTwo style_2={true} />
      <section className="tp-track-order-area pt-125 pb-180">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="tp-track-order-wrapper pt-75">
                <div className="tp-section-title-wrapper-4 mb-50 text-center">
                  <span className="tp-section-title-pre-4">Track Order</span>
                  <h3 className="tp-section-title-4 fz-50">Enter Your Order ID</h3>
                </div>
                <div className="tp-track-order-content text-center">
                  <input
                    type="text"
                    className="tp-track-order-input"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Order ID"
                  />
                  <button className="tp-btn mt-20" onClick={handleTrackOrder} disabled={loading}>
                    {loading ? 'Tracking...' : 'Track Order'}
                  </button>
                  {error && <p className="tp-track-order-error mt-20">{error}</p>}
                  {orderDetails && (
                    <div className="tp-track-order-details mt-40">
                      <h4>Order Details</h4>
                      <p><strong>Order ID:</strong> {orderDetails.id}</p>
                      <p><strong>Status:</strong> {orderDetails.status}</p>
                      {/* <p><strong>Items:</strong> {orderDetails.items.join(', ')}</p> */}
                      <p><strong>Total Amount:</strong> RS.{orderDetails.total_amount}</p>
                      <p><strong>Created At:</strong> {new Date(orderDetails.created_at).toLocaleString()}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer primary_style={true} />
    </>
  );
};

export default TrackOrder;
