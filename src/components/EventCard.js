import React from 'react';

export default function EventCard({
    title,
    startDT,
    endDT,
    location,
    price,
    link,
    imgUrl
}) {
    return (
        <div class="event grid card">
            <div class="event-img">
                <img src={imgUrl} alt="Event Thumbnail"/>
            </div>
            <div class="event-info">
                <div class="event-info-top"><p>
                    {startDT} - {endDT} 
                </p></div>
                <h1> {title} </h1>
                <div class="event-info-bottom">  
                    <p> {location} </p>
                    <p> ${price} </p>
                </div>
            </div>
        </div>
    )
}

// export default function EventCard({
//     title, date, time, location, price, img
// }) {
//     return (
//         <div class="event grid card">
//             <div class="event-img">
//                 <img src={process.env.PUBLIC_URL + "/img/" + img} alt="Event Thumbnail"/>
//             </div>
//             <div class="event-info">
//                 <div class="event-info-top"><p>
//                     {date} - {time} 
//                 </p></div>
//                 <h1> {title} </h1>
//                 <div class="event-info-bottom">  
//                     <p> {location} </p>
//                     <p> {price} </p>
//                 </div>
//             </div>
//         </div>
//     )
// }
