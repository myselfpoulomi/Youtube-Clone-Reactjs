import React from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";

function PlayVideo() {
  return (
    <div className="basis-[69%]">
      <video src={video1} controls autoPlay muted className="w-[100%] rounded-[7px]"></video>
      <h3 className="mt-[10px] font-semibold text-[22px] ">
        Best YouTube Channel to Learn Web Development
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-[10px] text-[14px] text-[#5a5a5a]">
        <p>1525 Views &bull; 2 days ago </p>
        <div className="flex">
          <span className="inline-flex items-center ml-[15px]">
            <img src={like} alt="" className="w-[20px] mr-[8px]" />
            125
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={dislike} alt="" className="w-[20px] mr-[8px]" />2
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={share} alt="" className="w-[20px] mr-[8px]" />
            Share
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={save} alt="" className="w-[20px] mr-[8px]" />
            Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#ccc] my-[10px] mx-0"/>
      <div className="flex items-center mt-[20px] ">
        <img src={jack} alt="" className="w-[40px] rounded-[50%] mr-[15px]" />
        <div className="flex-1 leading-[18px]">
          <p className="text-[#000] font-bold text-[18px]">Poulomi</p>
          <span className="text-[13px] text-[#5a5a5a]">1M Subscribers</span>
        </div>
        <button className="bg-red-500 text-[#fff] py-[8px] px-[30px] border-0 outline-0 rounded-[4px] cursor-pointer">Subscribe</button>
      </div>
      <div className="pl-[55px] my-[15px] mx-0">
        <p className="text-[14px] mb-[5px] text-[#5a5a5a]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam.
        </p>
        <p className="text-[14px] mb-[5px] text-[#5a5a5a]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
          provident.
        </p>
        <hr />
        <h4 className="text-[14px] text-[#5a5a5a] mt-[15px]">130 Comments</h4>
        <div className="flex items-start my-[20px] mx-0">
          <img src={user_profile} alt="" className="w-[35px] rounded-[50%] mr-[15px]" />
          <div>
            <h3 className="text-[14px] mb-[2px] font-semibold">
              Jack Nicholson <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              libero non officiis!
            </p>
            <div className="flex items-center my-[8px] mx-0 text-[14px] ">
              <img src={like} alt="" className="rounded-0 w-[20px] mr-[5px]"/> <span className="mr-[20px] text-[#5a5a5a]">224</span>
              <img src={dislike} alt="" className="rounded-0 w-[20px] mr-[5px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-[20px] mx-0">
          <img src={user_profile} alt="" className="w-[35px] rounded-[50%] mr-[15px]" />
          <div>
            <h3 className="text-[14px] mb-[2px] font-semibold">
              Jack Nicholson <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              libero non officiis!
            </p>
            <div className="flex items-center my-[8px] mx-0 text-[14px] ">
              <img src={like} alt="" className="rounded-0 w-[20px] mr-[5px]"/> <span className="mr-[20px] text-[#5a5a5a]">224</span>
              <img src={dislike} alt="" className="rounded-0 w-[20px] mr-[5px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-[20px] mx-0">
          <img src={user_profile} alt="" className="w-[35px] rounded-[50%] mr-[15px]" />
          <div>
            <h3 className="text-[14px] mb-[2px] font-semibold">
              Jack Nicholson <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              libero non officiis!
            </p>
            <div className="flex items-center my-[8px] mx-0 text-[14px] ">
              <img src={like} alt="" className="rounded-0 w-[20px] mr-[5px]"/> <span className="mr-[20px] text-[#5a5a5a]">224</span>
              <img src={dislike} alt="" className="rounded-0 w-[20px] mr-[5px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-[20px] mx-0">
          <img src={user_profile} alt="" className="w-[35px] rounded-[50%] mr-[15px]" />
          <div>
            <h3 className="text-[14px] mb-[2px] font-semibold">
              Jack Nicholson <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              libero non officiis!
            </p>
            <div className="flex items-center my-[8px] mx-0 text-[14px] ">
              <img src={like} alt="" className="rounded-0 w-[20px] mr-[5px]"/> <span className="mr-[20px] text-[#5a5a5a]">224</span>
              <img src={dislike} alt="" className="rounded-0 w-[20px] mr-[5px]" />
            </div>
          </div>
        </div>
        <div className="flex items-start my-[20px] mx-0">
          <img src={user_profile} alt="" className="w-[35px] rounded-[50%] mr-[15px]" />
          <div>
            <h3 className="text-[14px] mb-[2px] font-semibold">
              Jack Nicholson <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem est
              libero non officiis!
            </p>
            <div className="flex items-center my-[8px] mx-0 text-[14px] ">
              <img src={like} alt="" className="rounded-0 w-[20px] mr-[5px]"/> <span className="mr-[20px] text-[#5a5a5a]">224</span>
              <img src={dislike} alt="" className="rounded-0 w-[20px] mr-[5px]" />
            </div>
          </div>
        </div>
        
       
       
      </div>
    </div>
  );
}

export default PlayVideo;
