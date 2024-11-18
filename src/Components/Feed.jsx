import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY, value_convertor } from "../Data";
import moment from "moment";
function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-7 mt-4">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="">
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="w-[100%] rounded-[5px]"
            />
            <h2 className="text-[16px] font-semibold text-[#000] my-[5px] mx-0">
              {item.snippet.title}
            </h2>
            <h3 className="text-[14px] font-bold text-[#555] my-[6px] mx-0">
              {item.snippet.channelTitle}
            </h3>
            <p className="text-[14px] ">
              {value_convertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
