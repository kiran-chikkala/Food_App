import React, { useState, useEffect } from "react";

const Profile = () => {
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
    } catch (error) {}
  };

  return (
    <div className=" bg-gradient-to-b from-green-300 to-t from bg-yellow-100 w-screen  h-[90vh] flex items-center justify-center">
      <div className=" w-full md:w-2/6 h-full md:h-4/6 p-6 bg-white shadow-2xl ">
        <div className=" flex">
          <img
            className="  w-[210px] h-55 rounded-lg"
            src={profile.avatar_url}
            alt=""
          />
          <div className=" flex items-center mx-3 gap-4">
            <a href="https://www.linkedin.com/in/chikkala-kiran/">
              <img
                className=" w-16 h-[60px]"
                src="https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
                alt=""
              />
            </a>
            <a href="https://github.com/kiran-chikkala">
              <img
                className=" w-16 h-[60px]"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <h1 className=" font-bold text-4xl ">Kiran Chikkala</h1>
        <h1 className=" my-3"> React dev</h1>
        <div className=" my-2 ">
          <div className="  w-[60px]  md:w-[90px] h-[90px] flex mix-blend-multiply ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
              alt=""
            ></img>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq35wIe6UgRB_eZ-p84XKMippCgl0KobVGA"
              alt=""
            ></img>
            <img
              src="https://www.pngitem.com/pimgs/m/171-1718042_javascript-logo-png-transparent-png.png"
              alt=""
            ></img>
            <img
              src="https://icon-library.com/images/html-icon-png/html-icon-png-4.jpg"
              alt=""
            ></img>
            <img
              src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
