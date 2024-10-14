import React, { useState } from 'react'
import '../Home/Home.css'
import Child from '../Child/Child'
function Home() {
  const [pro,setProfile]=useState({
    details: {
      name: "Minshi M M",
      quotes : "Iam an MCA graduate currently studying a MEARN Stack developer course. To work in a challenging and creative environment and to obtain a position that will enable me to utilize my strong organizational skills, educational background and ability to work well with people. And passionate about learning new technologies and broaden my horizon.",
      pic : "https://media.istockphoto.com/id/1145791509/vector/young-woman-playing-video-games-at-night.jpg?s=612x612&w=0&k=20&c=yrgMU87pDBup7xLUGtqOZtZO38noKWSPgKrNE1ekkSE="
    }
  })

  return (
    <div >

       <div className='row'>
          <div className='col-6'></div>
          <div className='col-6 mb-5 text-center text-light' style={{marginTop:'350px'}}>
              <h1 className='fw-bolder fs-1'>FULL STACK DEVELOPER MEARN</h1>
              <h2 className='fw-bolder'>Minshi M M</h2>
          </div>
       </div>
       <Child jsonData = {pro.details} />

    </div>
  )
}

export default Home 