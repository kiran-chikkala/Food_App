import React, { useEffect, useState } from "react";
import { CardImage } from "../utlies/Image";
import RestauranCard, { withFoodType } from "./RestauranCard";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Shemmer from "./Shemmer";
const Body = () => {
  const [ListofResturant, setListofResturant] = useState([]);
  const [temp, settemp] = useState([]);
  const [scroll, setscroll] = useState(true);
  const [text, settext] = useState("");
  const [index, setindex] = useState(7);
  const RestauranCardtype = withFoodType(RestauranCard);
  useEffect(() => {
    FetchApi();
  }, [text]);
  const FetchApi = async () => {
    const data = await fetch(CardImage);
    const json = await data.json();

    setListofResturant(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    settemp(
      json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.slice(
        0,
        7
      ) ||
        json.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.slice(
          0,
          7
        )
    );
  };

  if (temp.length === 0) {
    return <Shemmer />;
  }
  const handleSearch = () => {
    settext("");
  };
  function Loading() {
    if (temp.length >= ListofResturant.length) {
      setscroll(!scroll);
      return;
    }

    setTimeout(async () => {
      if (temp.length > 0) {
        var response = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/update",
          {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
              "Content-Type": "application/json",
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
              lat: 17.385044,
              lng: 78.486671,
              nextOffset: "COVCELQ4KIDIg7HqyI/dGjCnEzgE",
              page_type: "DESKTOP_WEB_LISTING",
              seoParams: {
                apiName: "FoodHomePage",
                pageType: "FOOD_HOMEPAGE",
                seoUrl: "https://www.swiggy.com/",
              },

              widgetOffset: {
                NewListingView_Topical_Fullbleed: "",
                NewListingView_category_bar_chicletranking_TwoRows: "",
                NewListingView_category_bar_chicletranking_TwoRows_Rendition:
                  "",
                Restaurant_Group_WebView_SEO_PB_Theme: "",
                collectionV5RestaurantListWidget_SimRestoRelevance_food_seo:
                  "55",
                inlineFacetFilter: "",
                restaurantCountWidget: "",
              },
              _csrf: "jrsjULLhcipi-fitP_I0s32N1G7QK65zELk2eiQE",
            }), // body data type must match "Content-Type" header
          }
        );

        response = await response.json();

        settemp(temp.concat(ListofResturant.slice(index, index + 7)));
        setListofResturant(
          ListofResturant.concat(
            response.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle
              .restaurants
          )
        );

        setindex(index + 7);
      }
    }, 1000);
  }

  return (
    <div className=" ">
      <div className="flex items-center justify-center my-5 w-screen px-10">
        <input
          className="outline-none border border-gray-300 rounded-3xl p-2 w-5/6 md:w-2/6"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Search food items"
        />
        <button
          className="grid-cols-2 bg-pink-500 rounded-md px-2 py-1"
          onClick={handleSearch}
        >
          Submit
        </button>
      </div>
      <div className=" w-[100%] px-8 ml-4 py-5">
        <InfiniteScroll
          dataLength={temp.length} //This is important field to render the next data
          next={Loading}
          hasMore={scroll}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="  flex flex-wrap flex-row ">
            {temp
              .filter((item) => item.info.name.includes(text))
              .map((item) => (
                <Link key={item?.info.id} to={`/restaurant/${item?.info.id}`}>
                  {item?.info.badges.imageBadges ? (
                    <RestauranCardtype resData={item} />
                  ) : (
                    <RestauranCard resData={item} />
                  )}
                </Link>
              ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Body;
