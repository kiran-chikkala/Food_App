import React from "react";
import ListMenu from "./ListMenu";
const RestaruntMenuCateory = ({ data, show, setIndex }) => {
  function handleclick() {
    setIndex();
  }
  return (
    <div>
      <div
        className=" w-6/12 bg-gray-200 mx-auto my-4 shadow-lg   flex justify-between"
        onClick={handleclick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span> {true ? "⬇️" : "⬆️"}</span>
      </div>
      {show && <ListMenu data={data.itemCards} />}
    </div>
  );
};

export default RestaruntMenuCateory;
