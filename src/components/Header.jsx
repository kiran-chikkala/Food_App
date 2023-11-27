import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setBtn] = useState("login");

  const Cartitems = useSelector((store) => store.cart.items);

  return (
    <div className=" w-full flex-wrap flex justify-between  bg-pink-100  shadow-lg  sticky top-0 overflow-hidden">
      <div>
        <img
          className=" w-[50px]  md:w-[100px]  mix-blend-multiply"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8cea7HIGPg1gJKlRjZuFl0ZWttAJLu5M9A"
          alt="food"
        />
      </div>
      <div className=" flex">
        <div className=" flex items-center list-none ">
          <li className=" mx-1 md:mx-2 px-1 md:px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="  mx-1 md:mx-2 px-1 md:px-2">
            <Link to="/about">About Us</Link>
          </li>

          <li className="  mx-1 md:mx-2 px-1 md:px-2 ">
            <Link to="/cart">
              Cart
              <CiShoppingCart size={20} className=" inline-block" />
            </Link>
          </li>
          <button className="mx-2 px-2" onClick={() => setBtn(!btn)}>
            {btn ? "login" : "logout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
