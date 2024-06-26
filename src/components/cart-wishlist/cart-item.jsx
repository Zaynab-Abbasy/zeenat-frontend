import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";
// internal
import { Close, Minus, Plus } from "@/svg";
import { add_cart_product, quantityDecrement, remove_product } from "@/redux/features/cartSlice";

const CartItem = ({product}) => {
  const {id, img, title, price, orderQuantity = 0, quantity } = product || {};

  const dispatch = useDispatch();

    // handle add product
    const handleAddProduct = (prd) => {
      console.log("Adding product:", prd);
      console.log("Current orderQuantity:", prd.orderQuantity);
      console.log("Available quantity:", prd.quantity);
      dispatch(add_cart_product(prd))
    }
    // handle decrement product
    const handleDecrement = (prd) => {
      console.log("Decrementing product:", prd);
      console.log("Current orderQuantity:", prd.orderQuantity);
      dispatch(quantityDecrement(prd))
    }
  
    // handle remove product
    const handleRemovePrd = (prd) => {
      console.log("Removing product:", prd);
      dispatch(remove_product(prd))
    }

  return (
    <tr>
      {/* img */}
      <td className="tp-cart-img">
        <Link href={`/product-details/${id}`}>
          <Image src={img} alt="product img" width={70} height={100} />
        </Link>
      </td>
      {/* title */}
      <td className="tp-cart-title">
        <Link href={`/product-details/${id}`}>{title}</Link>
      </td>
      {/* price */}
      <td className="tp-cart-price">
        <span>RS.{(price * orderQuantity).toFixed(2)}</span>
      </td>
      {/* quantity */}
      <td className="tp-cart-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span onClick={()=> handleDecrement(product)} className="tp-cart-minus">
            <Minus />
          </span>
          <input className="tp-cart-input" type="text" value={orderQuantity} readOnly />
          <span onClick={()=> handleAddProduct(product)} className="tp-cart-plus">
            <Plus />
          </span>
        </div>
      </td>
      {/* action */}
      <td className="tp-cart-action">
        <button onClick={()=> handleRemovePrd({title,id:id})} className="tp-cart-action-btn">
          <Close />
          <span>{" "}Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;