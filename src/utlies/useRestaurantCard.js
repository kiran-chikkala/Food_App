import { useEffect, useState } from "react";
import { CardImage } from "./Image";
import { useDispatch } from "react-redux";
import { addList } from "../Redux/cartSlice";
const useRestaurantCard = () => {
  const [ListofResturant, setListofResturant] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(CardImage);
    const json = await data.json();
    console.log(json);
    setListofResturant(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    dispatch(
      addList(
        json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
  };
  return ListofResturant;
};

export default useRestaurantCard;
