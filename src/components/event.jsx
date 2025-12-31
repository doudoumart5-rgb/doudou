import React from 'react'
import { Link } from 'react-router-dom';
import './event.css'
// this is a reuasable componenet 
// data of the event (title , dates , topic ---etc)
// result : a main of a page that describes this event


function Event({
    title ,location, 
    heroDesc ,mainDesc, 
    whyJoinDesc , date , organiser ,
    image , time

    }) {
    return (
    <div className="myevent-page">

      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="left">
          <h2>{title}</h2>
          <p>
            {heroDesc}
          </p>
          <div>
            <Link to="/signup">
              <button className="hero-btn">Join Now</button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="right"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>

      {/* DESCRIPTION CARD */}
      <div className="event-card">
        <h3>📌 Event Description</h3>

        <p>
            {mainDesc}
        </p>

        <p>
          🌟 <strong>Why join?</strong> 
          <br></br>
            {whyJoinDesc}
        </p>


        
      </div>

 
      {/* INFO BOXES */}
      <div className="event-info">
        <div className="info-box">
          <h4>📍 Location</h4>
          <p>{location}</p>
        </div>
        <div className="info-box">
          <h4>📅 Date</h4>
          <p>{date}</p>
        </div>
        <div className="info-box">
          <h4>⏰ Time</h4>
          <p>{time}</p>
        </div>
        <div className="info-box">
          <h4>👥 Organized by</h4>
          <p>{organiser}</p>
        </div>
      </div>

    </div>
  );
  
}



export default Event ;