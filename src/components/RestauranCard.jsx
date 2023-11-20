import React, { useContext } from "react";
import useOnlineStatus from "../utlies/useOnlineStatus";

const RestauranCard = (props) => {
  const { resData } = props;

  const { name, cloudinaryImageId, cuisines, areaName, costForTwo, avgRating } =
    resData?.info;
  let status = useOnlineStatus();
  if (status === false) return <h1>something went wrong</h1>;
  return (
    <div className=" m-2 p-8 w-[300px] h-[450px] shadow-xl rounded-lg">
      <img
        className=" w-60 h-48 rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600/" +
          cloudinaryImageId
        }
        alt="food-logo"
      />
      <div className=" font-bold mt-2 ">
        <h4 className="break-words">
          {name}
          <span className="bg-red-400  mx-4 px-1 rounded-sm float-right">
            {avgRating}⭐
          </span>
        </h4>{" "}
      </div>
      <h6 className=" text-sm break-words text-gray-600">
        {cuisines.join(",")}
      </h6>

      <h6 className="my-1">{areaName}</h6>

      <h6 className=" font-bold">{costForTwo}</h6>
    </div>
  );
};
export const withFoodType = (RestauranCard) => {
  return (props) => {
    return (
      <div>
        <span className=" bg-green-400  text-black px-1  rounded-sm">
          PureVeg{" "}
        </span>
        <RestauranCard {...props} />
      </div>
    );
  };
};

export default RestauranCard;
