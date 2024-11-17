import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Video from './Pages/Video'
import { Route , Routes} from 'react-router-dom'

function App() {

const [sidebar , setSidebar]=useState(true);

  return (
    <div>
      <Navbar  setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video />}/>
      </Routes>
    </div>
  )
}

export default App