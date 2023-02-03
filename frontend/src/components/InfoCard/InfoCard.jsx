import React from 'react'
import { UilPen } from "@iconscout/react-unicons";

import './InfoCard.css'

const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="InfoHead">
      <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
          />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>San Francisco</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>SM Entertainment</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  )
}

export default InfoCard