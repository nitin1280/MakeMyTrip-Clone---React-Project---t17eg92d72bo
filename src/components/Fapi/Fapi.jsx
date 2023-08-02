import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import axois from "axios";
import "./fapi.css"
import { useNavigate } from 'react-router-dom';

function Fapi() {
  const [myDatas, setMyDatas] = useState([]);
 
  const navigate = useNavigate();
  const handleBook = () =>{
    navigate("/payment");
  }
    
  useEffect(()=>{
    axois.get("https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights")
     .then((res)=>
          setMyDatas(res.data));
  },[]);

  return (
    <>
    <div className='grid'>
   
      {myDatas.map((post)=>{
        const { from,to,departure,departureTime,departureDate,returnTime,returnDate,airlineName,via,price,duration} = post;
        return <div className='card1' key={from}>
           <img
          src="https://thumbs.dreamstime.com/b/aeroplane-cloudy-day-8201396.jpg"
          alt=""
          className="pListImg"
        />
          <h3>From : {from}</h3>
          <h3>To - {to}</h3>
          <h3>Date : {departure.departureDate}</h3>
          <h3>Time : {departure.departureTime}</h3>
          <h3>AirlineName : {airlineName}</h3>
          <h3>Via - {via}</h3>
          <h3>Price - {price}</h3>
          <p>Duration - {duration}</p>
          <button className="butt" onClick={handleBook}>Book</button>
        </div>
      })}
      </div>
    </>
  )
}

export default Fapi
