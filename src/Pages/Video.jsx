import React from 'react'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'
import { useParams } from 'react-router-dom'

function Video() {
  const {videoId , categoryId} =useParams();
  return (
    <div className='bg-[#f9f9f9] pl-[2%] pr-[2%] pt-[20px] pb-[20px] flex justify-between flex-wrap'>
      <PlayVideo videoId={videoId} categoryId={categoryId} />
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video