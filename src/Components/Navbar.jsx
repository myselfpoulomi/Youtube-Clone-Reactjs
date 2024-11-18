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
      className="flex items-center py-[10px] px-[2%] justify-between shadow-md
bg-[#fff] sticky top-0 z-10"
    >
      <div className="flex items-center">
        <img
          src={menu_icon}
          alt=""
          onClick={() => {
            setSidebar((prev) => (prev === false ? true : false));
          }}
          className="w-[22px] mr-[25px]"
        />
        <Link to='/'>
        <img src={logo} alt="" className="w-[130px]" />
        </Link>
        
      </div>
      <div className="flex items-center">
        <div className="flex items-center border border-[#ccc] mr-[15px] py-[8px] px-[12px] rounded-[25px]  ">
          <input
            type="text"
            placeholder="Search"
            className="w-[500px] border-0 outline-0 bg-transparent"
          />
          <img src={search_icon} alt="" className="w-[15px]" />
        </div>
      </div>
      <div className="flex items-center">
        <img src={upload_icon} alt="" className="w-[25px] mr-[25px] " />
        <img src={more_icon} alt="" className="w-[25px] mr-[25px] " />
        <img src={notification_icon} alt="" className="w-[25px] mr-[25px] " />
        <img src={profile_icon} alt="" className="w-[35px]  rounded-[25px]" />
      </div>
    </nav>
  );
}

export default Navbar;
