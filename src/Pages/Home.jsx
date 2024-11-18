import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'


function Home({sidebar}) {
  const [category, setCatagory] = useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCatagory={setCatagory}/>
      <div className={`bg-[#f9f9f9] pl-[17%] pr-[2%] pt-[20px] pb-[20px]  ${sidebar ? " ":'large-Container'}`}>
        <Feed category={category}/>
      </div>
    </>
  )
}

export default Home