import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Feed from '../Components/Feed'


function Home({sidebar}) {
  const [category, setCatagory] = useState(0);
  return (
    <div className="flex gap-14 md:gap-4">
      <div className={`${sidebar?"md:w-[11%]":"w-[1.2%]"}`}>
    <Sidebar  sidebar={sidebar} category={category} setCatagory={setCatagory}/>
    </div>
      <div className={`bg-[#f1efef]  pl-[2%] pr-[2%] pt-[20px] pb-[20px] rounded-lg mt-[10px] w-[80%] mr-[1%] border border-black ${sidebar ? " md:w-[88%]":'large-Container'}`}>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home