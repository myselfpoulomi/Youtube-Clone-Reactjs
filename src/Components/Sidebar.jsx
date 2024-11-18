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

function Sidebar({ sidebar , category, setCatagory }) {
  return (
    <div
      className={`md:block bg-[#fff]  h-[100vh] fixed top-0 pl-[2%] pt-[80px] flex flex-col items-center  ${
        sidebar ? " " : "small-sidebar"
      }`}
    >
      <div className="">
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===0?"active":""}`}
        onClick={()=>{
          setCatagory(0)
        }}
        >
          <img src={home} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Home</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===20?"active":""}`}
        onClick={()=>{
          setCatagory(20)
        }}
        >
          <img src={game_icon} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Gaming</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===2?"active":""}`}
        onClick={()=>{
          setCatagory(2)
        }}
        >
          <img src={automobiles} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Automobiles</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===17?"active":""}`}
        onClick={()=>{
          setCatagory(17)
        }}
        >
          <img src={sports} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Sports</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===24?"active":""}`}
        onClick={()=>{
          setCatagory(24)
        }}>
          <img src={entertainment} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Entertainment</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===28?"active":""}`}
        onClick={()=>{
          setCatagory(28)
        }}>
          <img src={tech} alt="" className="w-[20px] mr-[20px]" />
          <p className="hidden md:block">Technology</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===10?"active":""}`}
        onClick={()=>{
          setCatagory(10)
        }}
        >
          <img src={music} alt="" className="w-[20px] mr-[20px]" /> <p className="hidden md:block">Music</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===22?"active":""}`} onClick={()=>{
            setCatagory(22)
          }}>
          <img src={blogs} alt="" className="w-[20px] mr-[20px]" 
          
          /> <p className="hidden md:block">Blogs</p>
        </div>
        <div className={`flex items-center mb-[20px] w-fit flex-wrap cursor-pointer ${category===25?"active":""}`}
        onClick={()=>{
          setCatagory(25)
        }}>
          <img src={news} alt="" className="w-[20px] mr-[20px]" /> <p className="hidden md:block">News</p>
        </div>
        <hr className=" text-slate-700  w-[85%]" />
      </div>
      <div className="Subscribed">
        <h3 className="text-[15px] my-[20px] mx-0 text-[#5a5a5a]  hidden md:block">
          Subscribed
        </h3>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer utuber">
          <img
            src={jack}
            alt=""
            className="w-[30px] rounded-[50%] mr-[20px]"
          />
          <p  className="hidden md:block">PewDiePie</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer utuber">
          <img
            src={simon}
            alt=""
            className="w-[30px] rounded-[50%] mr-[20px]"
          />
          <p  className="hidden md:block">MrBeast</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer utuber">
          <img src={tom} alt="" className="w-[30px] rounded-[50%] mr-[20px] " />
          <p  className="hidden md:block">Justin Bieber</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer utuber">
          <img
            src={megan}
            alt=""
            className="w-[30px] rounded-[50%] mr-[20px]"
          />
          <p  className="hidden md:block">5-Minute Crafts</p>
        </div>
        <div className="flex items-center mb-[20px] w-fit flex-wrap cursor-pointer utuber">
          <img
            src={cameron}
            alt=""
            className="w-[30px] rounded-[50%] mr-[20px] "
          />
          <p  className="hidden md:block">Nas daily</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
