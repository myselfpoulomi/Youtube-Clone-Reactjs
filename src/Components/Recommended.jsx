import React, { useEffect, useState } from "react";
import thumbnail1 from "../assets/thumbnail1.png";
import thumbnail2 from "../assets/thumbnail2.png";
import thumbnail3 from "../assets/thumbnail3.png";
import thumbnail4 from "../assets/thumbnail4.png";
import thumbnail5 from "../assets/thumbnail5.png";
import thumbnail6 from "../assets/thumbnail6.png";
import thumbnail7 from "../assets/thumbnail7.png";
import thumbnail8 from "../assets/thumbnail8.png";
import { API_KEY, value_convertor } from "../Data";
import { Link } from "react-router-dom";

function Recommended({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    await fetch(relatedVideo_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="basis-[30%] ">
      {apiData.map((item,index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex justify-between mb-[8px]">
            <img
              src={item.snippet.thumbnails.medium.url}
              alt=""
              className="basis-[49%] w-[50%] rounded-md"
            />
            <div className="basis-[49%]">
              <h4 className="text-[17px] mb-[5px] font-semibold">
               {item.snippet.title}
              </h4>
              <p className="text-[#5a5a5a]">{item.snippet.channelTitle}</p>
              <p className="text-[#5a5a5a]">{value_convertor( item.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recommended;
