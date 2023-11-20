import React, { useState } from "react";
import Shemmer from "./Shemmer";
import useRestrauntMenu from "../utlies/useRestrauntMenu";
import { useParams } from "react-router-dom";
import RestaruntMenuCateory from "./RestaruntMenuCateory";
const RestaurantMenu = () => {
  const [index, setIndex] = useState(0);
  const { resId } = useParams();
  const menu = useRestrauntMenu(resId);

  if (menu === null) {
    return <Shemmer />;
  }
  const { name, cuisines } = menu?.cards[0]?.card?.card?.info;
  const length =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (C) =>
        C.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" text-center">
      <h1 className=" text-lg">{name}</h1>
      <p>{cuisines.join(",")}</p>
      <div>
        {length.map((categories, i) => (
          <RestaruntMenuCateory
            key={categories.card.card.title}
            data={categories.card.card}
            show={i === index ? true : false}
            setIndex={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
