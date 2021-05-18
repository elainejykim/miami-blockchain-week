import React from 'react';

export default function EventCard({
    title, date, time, location, price, img
}) {
    return (
        <div class="EventCard">
            <div class="EventCard-img"><img class="" src=""/></div>
            <div class="EventCard-content">
                <div class="EventCard-content-top">
                    <span class="EventCard-subtext">{date}, {time}</span>
                </div>
                <span class="EventCard-title">{title}</span>
                <div class="EventCard-content-bottom">
                    <span class="EventCard-subtext">{location}</span><br/>
                    <span class="EventCard-subtext">{price}</span>
                </div>
            </div>
        </div>
    )
}


// src={process.env.PUBLIC_URL + '/img/' + img}