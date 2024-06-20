import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@/utils/localstorage";
import { notifyError, notifySuccess } from "@/utils/toast";

const initialState = {
  cart_products: [],
  orderQuantity: 1,
  cartMiniOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
      console.log("Payload received:", payload);
      console.log("Current cart products:", state.cart_products);
      console.log("Current orderQuantity:", state.orderQuantity);

      const isExist = state.cart_products.some((i) => i.id === payload.id);
      if (!isExist) {
        const newItem = {
          ...payload,
          orderQuantity: state.orderQuantity,
        };
        state.cart_products.push(newItem);
        console.log(`New item added to cart:`, newItem);
        notifySuccess(`${state.orderQuantity} ${payload.title} added to cart`);
      } else {
        state.cart_products = state.cart_products.map((item) => {
          if (item.id === payload.id) {
            console.log(`Updating existing item in cart. Current orderQuantity: ${item.orderQuantity}, Adding: ${state.orderQuantity}, Available: ${payload.quantity}`);
            if (payload.quantity >= item.orderQuantity + state.orderQuantity) {
              item.orderQuantity += state.orderQuantity;
              console.log(`Item updated. New orderQuantity: ${item.orderQuantity}`);
              notifySuccess(`${state.orderQuantity} ${item.title} added to cart`);
            } else {
              console.log(`Not enough quantity available. Required: ${item.orderQuantity + state.orderQuantity}, Available: ${payload.quantity}`);
              notifyError("No more quantity available for this product!");
            }
          }
          return item;
        });
      }
      console.log("Updated cart products:", state.cart_products);
      setLocalStorage("cart_products", state.cart_products);
    },
    increment: (state) => {
      state.orderQuantity = state.orderQuantity + 1;
      console.log("Incremented orderQuantity:", state.orderQuantity);
    },
    decrement: (state) => {
      state.orderQuantity = state.orderQuantity > 1 ? state.orderQuantity - 1 : 1;
      console.log("Decremented orderQuantity:", state.orderQuantity);
    },
    quantityDecrement: (state, { payload }) => {
      state.cart_products = state.cart_products.map((item) => {
        if (item.id === payload.id) {
          if (item.orderQuantity > 1) {
            item.orderQuantity -= 1;
            console.log(`Decremented item quantity. Product: ${item.title}, New quantity: ${item.orderQuantity}`);
          }
        }
        return item;
      });
      setLocalStorage("cart_products", state.cart_products);
    },
    remove_product: (state, { payload }) => {
      state.cart_products = state.cart_products.filter(
        (item) => item.id !== payload.id
      );
      console.log(`Removed product from cart. Product ID: ${payload.id}`);
      setLocalStorage("cart_products", state.cart_products);
      notifyError(`${payload.title} Remove from cart`);
    },
    get_cart_products: (state) => {
      state.cart_products = getLocalStorage("cart_products");
      console.log("Retrieved cart products from localStorage:", state.cart_products);
    },
    initialOrderQuantity: (state) => {
      state.orderQuantity = 1;
      console.log("Reset orderQuantity to 1");
    },
    clearCart: (state) => {
      const isClearCart = window.confirm('Are you sure you want to remove all items ?');
      if (isClearCart) {
        state.cart_products = [];
        console.log("Cleared all items from cart");
      }
      setLocalStorage("cart_products", state.cart_products);
    },
    openCartMini: (state) => {
      state.cartMiniOpen = true;
      console.log("Opened cart mini");
    },
    closeCartMini: (state) => {
      state.cartMiniOpen = false;
      console.log("Closed cart mini");
    },
  },
});

export const {
  add_cart_product,
  increment,
  decrement,
  get_cart_products,
  remove_product,
  quantityDecrement,
  initialOrderQuantity,
  clearCart,
  closeCartMini,
  openCartMini,
} = cartSlice.actions;

export default cartSlice.reducer;