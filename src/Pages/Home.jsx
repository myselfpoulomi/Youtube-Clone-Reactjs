import React from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'


function Home({sidebar}) {
  return (
    <>
      <Sidebar sidebar={sidebar}/>
      <div className={`bg-[#f9f9f9] pl-[17%] pr-[2%] pt-[20px] pb-[20px]  ${sidebar ? " ":'large-Container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default Home