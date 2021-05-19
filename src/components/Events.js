import React, { useState }  from 'react';
import { eventsData } from "../data";
import EventCard from "./EventCard";

export default function Events() {

    return (
        <section class="events-list">
            <div class="container">

            <h1 class="title flex">Miami</h1>

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
        </section>

    );
}