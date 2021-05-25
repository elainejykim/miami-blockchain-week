import React from 'react';
import EventCard from "./EventCard";
import useFirestore from '../hooks/useFirestore';

export default function Events({
    collection
}) {
    const { docs } = useFirestore(collection);
    console.log(docs);

    return (
        <section class="events-list">
            <div class="container">

                <h1 class="title flex">Miami</h1>

                {docs && docs.map((doc) => 
                    <EventCard 
                        key={doc.id}
                        title={doc.title}
                        startDT={doc.startDT}
                        endDT={doc.endDT}
                        location={doc.location}
                        price={doc.price}
                        link={doc.link}
                        imgUrl={doc.url}
                    />
                )}

            </div>
        </section>
    );
}