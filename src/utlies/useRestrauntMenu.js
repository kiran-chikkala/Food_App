import { useEffect, useState } from "react";
import { Imange } from "./Image";

const useRestrauntMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  console.log(menu);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const data = await fetch(Imange + resId);
    const json = await data.json();

    setMenu(json.data);
  };
  return menu;
};

export default useRestrauntMenu;
