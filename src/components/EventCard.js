import React from 'react';

export default function EventCard({
    title,
    startDT,
    endDT,
    location,
    price,
    link,
    inviteOnly,
    imgUrl
}) {

    const dateFormat = (date) => {
        var src = /^(\d{4})-(\d{2})-(\d{2})T(.*)$/;
        var d = '$2/$3';
        var t = '$4';
        return [date.replace(src, d), date.replace(src, t)];
    }

    const [startD, startT] = dateFormat(startDT);
    const [endD, endT] = dateFormat(endDT);

    return (
        <a href={link ? link : ""} target="_blank" rel="noopener noreferrer">
        <div className="event grid card">
            <div className="event-img">
                <img src={imgUrl} alt="Event Thumbnail"/>
            </div>
            <div className="event-info">
                <div className="event-info-top"><p>
                    {startD} {startT} - {endD} {endT}
                </p></div>
                <h1> {title} </h1>
                <div className="event-info-bottom">  
                    <p> {location} </p>
                    <div className="flex">
                        <p class="blue-txt bold"> {price === 0? "FREE" : "$" + price} </p>
                        <p class="red-txt bold"> {inviteOnly && "*Invite Only"} </p>
                    </div>
                </div>
            </div>
        </div>
        </a>
    )
}