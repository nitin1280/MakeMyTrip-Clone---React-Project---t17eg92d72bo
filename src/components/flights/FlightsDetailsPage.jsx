import React from 'react'
import aeroplane from "../../assets/aeroplane.png.png"
import video from "../../assets/video.mp4.mp4"
import "./flights.css"

const FlightsDetailsPage = () => {
  return (
    <div>
      <div className='home flex container'>
        <div className='mainText'>
          <h1>Create Ever-lasting Memories With Us</h1>
        </div>
        <div className='homeImages flex'>
          <div className='videoDiv'>
            <video src={video} autoPlay muted loop className='video'></video>
          </div>
          <img src={aeroplane} className='plane'/>
        </div>
      </div>
    </div>
  )
}

export default FlightsDetailsPage
