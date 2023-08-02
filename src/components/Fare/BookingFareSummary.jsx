import React from "react";
import './fare.css'
function BookingFareSummary({ fareDetails }) {
  return (
    <div className="fare-summary">
      <h2>Fare Summary</h2>
      <div className="fare-item">
        <span>Base Fare:</span>
        <span>${fareDetails.baseFare}</span>
      </div>
      <div className="fare-item">
        <span>Taxes & Fees:</span>
        <span>${fareDetails.taxesAndFees}</span>
      </div>
      <div className="fare-item">
        <span>Total Fare:</span>
        <span>${fareDetails.totalFare}</span>
      </div>
    </div>
  );
}

export default BookingFareSummary;
