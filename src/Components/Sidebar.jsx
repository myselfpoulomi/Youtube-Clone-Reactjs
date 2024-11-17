import React from "react";
import home from "../assets/home.png";
import game_icon from "../assets/game_icon.png";
import automobiles from "../assets/automobiles.png";
import sports from "../assets/sports.png";
import entertainment from "../assets/entertainment.png";
import tech from "../assets/tech.png";
import music from "../assets/music.png";
import blogs from "../assets/blogs.png";
import news from "../assets/news.png";
import jack from "../assets/jack.png";
import simon from "../assets/simon.png";
import tom from "../assets/tom.png";
import megan from "../assets/megan.png";
import cameron from "../assets/cameron.png";

function Sidebar({ sidebar }) {
  return (
    <div
      className={`bg-[#fff] w-[13%] h-[100vh] fixed top-0 pl-[2%] pt-[80px] ${
        sidebar ? " " : "small-sidebar"
      }`}
    >
      <div className="">
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={home} alt="" className="w-[20px] mr-[20px]" />
          <p className="">Home</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={game_icon} alt="" className="w-[20px] mr-[20px]" />
          <p>Gaming</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={automobiles} alt="" className="w-[20px] mr-[20px]" />
          <p>Automobiles</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={sports} alt="" className="w-[20px] mr-[20px]" />
          <p>Sports</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={entertainment} alt="" className="w-[20px] mr-[20px]" />
          <p>Entertainment</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={tech} alt="" className="w-[20px] mr-[20px]" />
          <p>Technology</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={music} alt="" className="w-[20px] mr-[20px]" /> <p>Music</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={blogs} alt="" className="w-[20px] mr-[20px]" /> <p>Blogs</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={news} alt="" className="w-[20px] mr-[20px]" /> <p>News</p>
        </div>
        <hr className=" text-slate-700  w-[85%]" />
      </div>
      <div className="">
        <h3 className="text-[15px] my-[20px] mx-0 text-[#5a5a5a]">
          Subscribed
        </h3>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={jack} alt="" className="w-[25px] rounded-[50%] mr-[20px]" />
          <p>PewDiePie</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img
            src={simon}
            alt=""
            className="w-[25px] rounded-[50%] mr-[20px]"
          />
          <p>MrBeast</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img src={tom} alt="" className="w-[25px] rounded-[50%] mr-[20px]" />
          <p>Justin Bieber</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img
            src={megan}
            alt=""
            className="w-[25px] rounded-[50%] mr-[20px]"
          />
          <p>5-Minute Crafts</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer">
          <img
            src={cameron}
            alt=""
            className="w-[25px] rounded-[50%] mr-[20px]"
          />
          <p>Nas daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
