import React, { useState }  from 'react';
import { eventsData } from "../data";
import EventCard from "./EventCard";

export default function Events() {

    return (
    <div class="Page-container">
        <div class="NAV-Space"></div>  

        
        <div class="EventCards-container">

            <h1 class="Page-Title"> MIAMI </h1>
            
            {eventsData.map((event) => 
                <EventCard 
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    price={event.price}
                    img={event.photo}
                />
            )}
        </div>
    </div>
    );
}