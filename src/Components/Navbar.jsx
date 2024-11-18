import React from "react";
import menu_icon from "../assets/menu.png";
import logo from "../assets/logo.png";
import search_icon from "../assets/search.png";
import upload_icon from "../assets/upload.png";
import more_icon from "../assets/more.png";
import notification_icon from "../assets/notification.png";
import profile_icon from "../assets/jack.png";
import { Link } from "react-router-dom";

function Navbar({ setSidebar }) {
  return (
    <nav 
      className="flex items-center md:py-[10px] md:px-[2%] justify-between shadow-md py-[20px] px-[6%] gap-0 
   bg-[#fff] sticky top-0 z-10"
    >
      <div className="flex items-center">
        <img
          src={menu_icon}
          alt=""
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          className="md:w-[22px] mr-[25px] w-[20px] pointer-events-none md:pointer-events-auto"
        />
        <Link to="/">
          <img src={logo} alt="" className="md:w-[130px] w-[110px]" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="md:flex items-center border border-[#ccc] mr-[15px] py-[8px] px-[12px] rounded-[25px] hidden">
          <input
            type="text"
            placeholder="Search"
            className="md:w-[500px] w-[200px] border-0 outline-0 bg-transparent"
          />
          <img src={search_icon} alt="" className="md:w-[15px] mr-[5px]" />
        </div>
      </div>
      <div className="flex items-center ml-5 ">
      <img src={search_icon} alt="" className="md:hidden w-[17px]  mr-[25px] text-gray-800" />
        <img src={upload_icon} alt="" className="w-[20px] md:w-[25px] mr-[25px] hidden md:block " />
        <img src={more_icon} alt="" className="w-[20px] mr-[25px] md:w-[25px]  hidden md:block" />
        <img src={notification_icon} alt="" className="w-[20px] mr-[25px] md:w-[25px] " />
        <img src={profile_icon} alt="" className="w-[35px]  rounded-[25px] md:w-[25px]" />
      </div>
    </nav>
  );
}

export default Navbar;
