import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AboutUS = () => {
  const [profile, setprofile] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/kiran-chikkala"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const userData = await response.json();
      setprofile(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="  flex md:flex-row  flex-col items-center">
        <img
          className=" w-[620px] rounded-full"
          src="https://hungerendsherebyshantanu.netlify.app/thal.9318d109.jpg"
          alt=""
        />
        <div className="  mx-2 md:mx-20 flex flex-col">
          <div className="  bg-blue-200  ">
            <p className=" font-bold text-blue-900 px-4 py-4 w-full md:w-4/6">
              "Simplicity with a side of laughter! Our food is so good, it told
              a joke. Simple ingredients, serious flavor, hilarious
              satisfaction!"
            </p>
          </div>
          <div className=" flex flex-col  font-semibold">
            <a href="https://www.linkedin.com/in/chikkala-kiran/">
              {" "}
              <h1 className=" "> Created By : Kiran Chikkala</h1>
            </a>
            <Link to="/profile">🥷:My-Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUS;
