import React from 'react'
import "./payment.css"
import { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Swal from 'sweetalert2';
import Header from '../../components/header/Header';
import { useNavigate } from 'react-router-dom';
import BookingFareSummary from '../../components/Fare/BookingFareSummary';

 const Payments = () =>{
  
 }

const Payment = () => {
  const navigate = useNavigate();
  const data= {name:"",email:""};
  const [inputData, setInputData]= useState(data)
  function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email){
      Swal.fire({
        title: "error",
        Text: "Booking Conformed",
        icon: "error",
        confirmButtonText:"Enter All Details",
      })
    }
    else {
      Swal.fire({
        title: "Success",
        Text: "Booking Conformed",
        icon: "success",
        confirmButtonText:"Book More",
      })
      navigate("/")
    }
  }
  // const fareDetails = {
  //   baseFare: 200,
  //   taxesAndFees: 30,
  //   totalFare: 230,
  // };
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
      <div className='container'>
        {/* <div className='far'>
      <BookingFareSummary fareDetails={fareDetails} /></div> */}
        <form action='' onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col'>
              <h3 className='title'>Personal Details</h3>
            <div className='inputBox'>
              <span>Full Name : </span>
              <input type='text' placeholder='john deo' name='name' value={inputData.name}onChange={handleData}/>
            </div>
            <div className='inputBox'>
              <span>Email : </span>
              <input type='email' placeholder='xyz@gmail.com' name='email' value={inputData.email}onChange={handleData}/>
            </div>
            <div className='inputBox'>
              <span>Address : </span>
              <input type='text' placeholder='Locality' name='name' value={inputData.name}onChange={handleData}/>
            </div>
            <div className='inputBox'>
              <span>City : </span>
              <input type='text' placeholder='mumbai' name='name' value={inputData.name}onChange={handleData}/>
            </div>
            <div className='flex'>
              <div className='inputBox'>
              <span>State : </span>
              <input type='text' placeholder='india' name='name' value={inputData.name}onChange={handleData}/>
              </div>
              <div className='inputBox'>
              <span>zip code : </span>
              <input type='text' placeholder='123 456'/>
              </div>
              
            </div>
            </div>
            <div className='col'>
              <h3 className='title'>Payment</h3>
              <div className='inputBox'>
              <span>Card Accepted : </span>
              <img src='https://w7.pngwing.com/pngs/421/982/png-transparent-payment-gateway-service-money-debit-card-italy-visa-text-service-logo.png' alt='' width="50%"/>
            </div>
            <div className='inputBox'>
              <span>Name On Card : </span>
              <input type='text' placeholder='Mr.john deo' name='name' value={inputData.name}onChange={handleData}/>
            </div>
            <div className='inputBox'>
              <span>Credit Card Number : </span>
              <input type='number' placeholder='1111-2222-3333-4444'/>
            </div>
            <div className='inputBox'>
              <span>Exp Month : </span>
              <input type='text' placeholder='January'/>
            </div>
            
            <div className='flex'>
            <div className='inputBox'>
              <span>Exp Year : </span>
              <input type='number' placeholder='2026'/>
            </div>
              <div className='inputBox'>
              <span>CVV : </span>
              <input type='text' placeholder='1234'/>
              </div>
              
            </div>
            </div>
          </div>

          <input type="submit" value="proceed to checkout" className='submit-btn' onClick={Payments}/>
        </form>
      </div>
      
    </div>
  )
}

export default Payment
