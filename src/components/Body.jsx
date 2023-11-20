import React, { useState, useRef, useEffect } from "react";
import RestauranCard from "./RestauranCard";
import Shemmer from "./Shemmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlies/useOnlineStatus";
import { withFoodType } from "./RestauranCard";
import { useDispatch, useSelector } from "react-redux";
import useRestaurantCard from "../utlies/useRestaurantCard";

const Body = () => {
  const ListofResturant = useRestaurantCard();
  const [state, setState] = useState();
  const store = useSelector((store) => store?.cart?.hotels);
  const dispatch = useDispatch();
  const input = useRef("");
  const status = useOnlineStatus();
  const RestauranCardtype = withFoodType(RestauranCard);
  useEffect(() => {
    setState(ListofResturant);
  }, [ListofResturant]);
  const handleSearch = () => {
    const data = store.filter((item) =>
      item?.info?.name?.includes(input.current.value)
    );
    setState(data);
    input.current = "";
  };

  if (!status) {
    // Display a message to the user instead of using an alert
    console.log("Offline. Please check your internet connection.");
  }

  if (ListofResturant.length === 0) {
    return <Shemmer />;
  }

  return (
    <div className=" ">
      <div className="flex items-center justify-center my-5 w-screen">
        <input
          className="outline-none border border-gray-300 rounded-3xl p-2 w-2/6"
          type="text"
          ref={input}
          placeholder="Search food items"
        />
        <button
          className="grid-cols-2 bg-pink-500 rounded-md px-2 py-1"
          onClick={handleSearch}
        >
          Submit
        </button>
      </div>
      <div className="grid grid-cols-3 w-[100%] px-8 py-5">
        {state.map((item) => (
          <Link key={item?.info.id} to={`/restaurant/${item?.info.id}`}>
            {item?.info.badges.imageBadges ? (
              <RestauranCardtype resData={item} />
            ) : (
              <RestauranCard resData={item} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
