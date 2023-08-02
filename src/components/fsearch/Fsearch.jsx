import {  faCalendarDays, faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import "./fsearch.css"
import { DateRange } from "react-date-range";
  import { useState } from "react";
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns";

const Fsearch = () => {
  const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
  return (
    <div>
      <h1>Book Your Flight</h1>
      <div className='headerSearch'>
        <div className='headerSearchItem'>
        <FontAwesomeIcon icon={faMapMarker} className='headerIcon'/>
        <input type='text' placeholder='Where do you want?' className='headerSearchInput'/>
        </div>
        <div className='headerSearchItem'>
        <input type='text' placeholder='Where do you want?' className='headerSearchInput'/>
        </div>
        <div className='headerSearchItem'>
        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
        <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
        </div>
        <div className='headerSearchItem'>
        <FontAwesomeIcon icon={faUser} className='headerIcon'/>
        <span className='headerSearchText'>People</span>
        <input type='Number' placeholder='Add People' className='headerSearchInput'/>
        </div>
        <div className='headerSearchItem'>
          <button className='headerBtn'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Fsearch
