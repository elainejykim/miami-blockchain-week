import React from 'react';

export default function EventCard({
    title, date, time, location, price, img
}) {
    return (
        <div class="event grid card">
            <div class="event-img">
                <img src={process.env.PUBLIC_URL + "/img/" + img}/>
            </div>
            <div class="event-info">
                <div class="event-info-top"><p>
                    {date} - {time} 
                </p></div>
                <h1> {title} </h1>
                <div class="event-info-bottom">  
                    <p> {location} </p>
                    <p> {price} </p>
                </div>
            </div>
        </div>
    )
}


// src={process.env.PUBLIC_URL + '/img/' + img}