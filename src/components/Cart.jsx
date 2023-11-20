import React from "react";
import ListMenu from "./ListMenu";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Redux/cartSlice";
// import store from "../Redux/store";

const Cart = () => {
  const dispatch = useDispatch();
  const cardItems = useSelector((store) => store.cart.items);
  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      <h1 className="text-center">cart</h1>
      <div className=" m-auto w-6/12 text-center">
        <button
          className=" bg-green-400 p-2 m-2 rounded-lg"
          onClick={handleClear}
        >
          Clear List
        </button>
        <ListMenu data={cardItems} />
      </div>
    </div>
  );
};

export default Cart;
