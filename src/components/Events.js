import React, { useState }  from 'react';
import { eventsData } from "../data";

export default function Events() {

    return (
    <>
        <ul>
            {eventsData.map((event) => 
                <li>
                    <div class="card-media">
                        <div class="card-media-object-container">
                            <img class="card-media-object" src={process.env.PUBLIC_URL + '/img/' + event.photo} />
                        </div>
                        <div class="card-media-body">
                            <div class="card-media-body-top">
                                <span class="subtle">{event.date}, {event.time}</span>
                            </div>
                            <span class="card-media-body-heading">{event.title}</span>
                            <div class="card-media-body-supporting-bottom">
                            <span class="card-media-body-supporting-bottom-text subtle">{event.location}</span>
                            <span class="card-media-body-supporting-bottom-text subtle u-float-right">{event.price}</span>
                            </div>
                        </div>
                    </div>

                </li>
            )}
        </ul>
    </>
    );
}