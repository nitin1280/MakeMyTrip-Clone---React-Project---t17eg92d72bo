import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './tapi.css';
import axois from "axios";
import { useNavigate } from 'react-router-dom';


function Tapi() {
  const [myDatas, setMyDatas] = useState([]);
 
  const navigate = useNavigate();
  const handleBook = () =>{
    navigate("/payment");
  }
    
  useEffect(()=>{
    axois.get("https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains")
     .then((res)=>
          setMyDatas(res.data));
  },[]);

  return (
    <>
    <div className='grid'>
      {myDatas.map((post)=>{
        const { from,to,departure,departureTime,departureDate,duration,kilometers,price,train_number} = post;
        return <div className='card1' key={from}>
          <img
          src="https://www.india.com/wp-content/uploads/2022/11/QT-trains.jpg"
          alt=""
          className="pListImg"
        />
          <h3>From : {from}</h3>
          <h3>To : {to}</h3>
          <h3>Date : {departure.departureDate}</h3>
          <h3>Time : {departure.departureTime}</h3>
          <h3>Duration : {duration}</h3>
          <h3>Kilometers : {kilometers}</h3>
          <h3>Price : {price}</h3>
          <p>Train_Number : {train_number}</p>
          <button className="butt" onClick={handleBook}>Book</button>
        </div>
      })}
      </div>
    </>
  )
}

export default Tapi
