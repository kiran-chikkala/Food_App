import React from "react";
import { CDN_IMG } from "../utlies/Image";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const ListMenu = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="= w-6/12 m-auto ">
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className=" text-left  m-3 flex  p-1 flex-row justify-between border-b border-gray-300"
        >
          <div className=" flex flex-col mb-2 ">
            <span>{item.card.info.name}</span>
            <span>
              ₹
              {item.card?.info?.price / 100 ||
                item.card?.info?.defaultPrice / 100}
            </span>
          </div>
          <div>
            <span>
              {item.card?.info?.imageId ? (
                <div className="flex flex-col ">
                  <img
                    className=" w-20 shadow-lg  "
                    src={CDN_IMG + item.card?.info?.imageId}
                  />

                  <button
                    className="p-2  bg-slate-300 text-black rounded-sm"
                    onClick={() => handleClick(item)}
                  >
                    Add
                  </button>
                </div>
              ) : (
                <button className=" border-solid border-2 border-grey-900 p-2 rounded-lg">
                  Add Cart
                </button>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListMenu;
