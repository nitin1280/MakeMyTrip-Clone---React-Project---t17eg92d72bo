import { useEffect, useState } from 'react'
import './hotels.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Hotels() {
  const [myData, setMyData] = useState([]);

  const navigate = useNavigate();
  const handleBook = () =>{
    navigate("/payment");
  }
  useEffect(()=>{
   axios.get("https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels")
   .then((res) =>{
    setMyData(res.data)
   });
  },[])
  return (
    <>
     <div className='grid'>
     {
      myData.map((post)=>{
        const {city,hotel_name,check_in,check_out,room_type,guests,price_per_night} = post;
        return <div className='card' key={city}>
          <img
          src="https://www.austrian.com/content/dam/austrian/global/images/fly/check-in/check-in-deadlines-16x9.jpg.transform/lh-dcep-transform-width-1440/img.jpg"
          alt=""
          className="pListImg"
        />
          <h3>Hotel Name : {hotel_name}</h3>
          <h3>Check In : {check_in.toUpperCase()}</h3>
          <h3>Check Out : {check_out.toUpperCase()}</h3>
          <h3>Room : {room_type.toUpperCase()}</h3>
          <h3>Price : {price_per_night}</h3>
          <p>Guests : {guests}</p>
          <button className="butt" onClick={handleBook}>Book</button>
        </div>
      })
     }
     </div>
    </>
  )
}

export default Hotels
