import React from 'react';
import EventCard from "./EventCard";
import useFirestore from '../hooks/useFirestore';

export default function Events({
    collection
}) {
    const { docs } = useFirestore(collection);

    return (
        <section className="events-list">
            <div className="container">

                <h1 className="title flex">Miami Edition</h1>

                {docs && docs.map((doc) => 
                    <EventCard 
                        key={doc.id}
                        title={doc.title}
                        startDT={doc.startDT}
                        endDT={doc.endDT}
                        location={doc.location}
                        price={doc.price}
                        link={doc.link}
                        inviteOnly={doc.inviteOnly}
                        imgUrl={doc.url}
                    />
                )}

            </div>
        </section>
    );
}