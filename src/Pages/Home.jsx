import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'


function Home({sidebar}) {
  const [category, setCatagory] = useState(0);
  return (
    <div className="flex gap-2 md:gap-4">
      <div className={`${sidebar?"w-[11%]":"w-[2%] border border-black"}`}>
    <Sidebar  sidebar={sidebar} category={category} setCatagory={setCatagory}/>
    </div>
      <div className={`bg-[#f1ebeb]  pl-[2%] pr-[2%] pt-[20px] pb-[20px] rounded-md mt-[2px] w-[87%] md:w-[96%] border ${sidebar ? " ":'large-Container'}`}>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home