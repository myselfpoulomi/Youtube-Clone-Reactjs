import React, { useEffect, useState } from "react";
import video1 from "../assets/video.mp4";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import share from "../assets/share.png";
import save from "../assets/save.png";
import jack from "../assets/jack.png";
import user_profile from "../assets/user_profile.jpg";
import { API_KEY, value_convertor } from "../Data";
import moment from "moment";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function PlayVideo({  categoryId }) {
  const {videoId} = useParams ();
  const [apiData, setApiData] = useState(null);
  const [channeldata, setChannelData] = useState(null);
  const [CommentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    const channeldata_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} `;

    await fetch(channeldata_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));

    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

    await fetch(comment_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="md:basis-[69%] w-[100vw] basis-[94%]" >
     
      <div className="w-[100%] flex flex-col justify-center pl-3 h-[300px] pr-0 md:h-[650px]"> 
    
      <iframe
       className="w-[100%] h-[100%] rounded-[7px]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title=""
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

<h3 className="mt-[10px] font-semibold md:text-[22px] text-[18px] ">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>
   
    </div>
     
      <div className="flex  items-center justify-between md:flex-wrap mt-[10px] md:text-[14px] text-[12px] text-[#5a5a5a] ml-3  flex-row ">
        <p >
          {apiData ? value_convertor(apiData.statistics.viewCount) : "16K"}{" "}
          Views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex">
          <span className="inline-flex items-center ml-[15px]">
            <img src={like} alt="" className="md:w-[20px] mr-[8px] w-[15px]" />
            {apiData ? value_convertor(apiData.statistics.likeCount) : 155}
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={dislike} alt="" className="md:w-[20px] mr-[8px] w-[15px]" />
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={share} alt="" className="md:w-[20px] mr-[8px] w-[15px]" />
            Share
          </span>
          <span className="inline-flex items-center ml-[15px]">
            <img src={save} alt=""  className="md:w-[20px] mr-[8px] w-[15px]" />
            Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#ccc] my-[10px] mx-0 md:my-[20px] " />
      <div className="flex items-center mt-[20px] ml-3  ">
        <img
          src={channeldata ? channeldata.snippet.thumbnails.default.url : ""}
          alt=""
          className="md:w-[40px] w-[30px] rounded-[50%] mr-[15px]"
        />
        <div className="flex-1 leading-[18px]">
          <p className="text-[#000] font-bold md:text-[18px] text-[15px]">
            {apiData ? apiData.snippet.channelTitle : ""}
          </p>
          <span className="md:text-[13px] text-[12px] text-[#5a5a5a]">
            {channeldata
              ? value_convertor(channeldata.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-red-500 text-[#fff] md:py-[8px] md:px-[30px] border-0 outline-0 rounded-[4px] cursor-pointer px-[20px] py-[5px]">
          Subscribe
        </button>
      </div>
      <div className="pl-[55px] my-[15px] mx-0 md:text-[14px] text-[12px]">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 300)
            : "Description Here"}
        </p>
        <hr className="border-0 h-[1px] bg-[#ccc] my-[10px] mx-0 md:my-[20px] " />
        <h4 className="text-[14px] text-[#5a5a5a] mt-[15px]">
          {apiData ? value_convertor(apiData.statistics.commentCount) : 102}{" "}
          Comments
        </h4>
        {CommentData.map((item, index) => {
          return(<div key={index} className="flex items-start my-[20px] mx-0 md:mr-0 mr-3">
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt=""
              className="w-[35px] rounded-[50%] mr-[15px]"
            />
            <div>
              <h3 className="text-[14px] mb-[2px] font-semibold">
                {item.snippet.topLevelComment.snippet.authorDisplayName}
                <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">
                  1 day ago
                </span>
              </h3>
              <p>
                {item.snippet.topLevelComment.snippet.textDisplay}
              </p>
              <div className="flex items-center my-[8px] mx-0 text-[14px] ">
                <img src={like} alt=""  className="md:w-[20px] mr-[8px] w-[15px]" />{" "}
                <span className="mr-[20px] text-[#5a5a5a]">{value_convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                <img
                  src={dislike}
                  alt=""
                   className="md:w-[20px] mr-[8px] w-[15px]"
                />
              </div>
            </div>
          </div>)
        })}
        
      </div>
    </div>
  );
}

export default PlayVideo;
