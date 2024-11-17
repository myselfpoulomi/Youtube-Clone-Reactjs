import React from 'react'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'

function Video() {
  return (
    <div className='bg-[#f9f9f9] pl-[2%] pr-[2%] pt-[20px] pb-[20px] flex justify-between flex-wrap'>
      <PlayVideo />
      <Recommended/>
    </div>
  )
}

export default Video