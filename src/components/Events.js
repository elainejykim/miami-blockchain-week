import React, {useState} from 'react';
import EventCard from "./EventCard";
import useFirestore from '../hooks/useFirestore';
import Pagination from '@material-ui/lab/Pagination';
import '../css/Events.css'; 

export default function Events({
    collection
}) {
    const { docs } = useFirestore(collection);
    
    const totalNumEvents = docs.length;
    const eventsPerPage = 5;
    const totalPages = Math.ceil(totalNumEvents/eventsPerPage);

    const [ page, setPage ] = useState(1);
    const [ slice, setSlice ] = useState({
        start: 0,
        end: eventsPerPage
    });

    const handleChange = (_, value) => {
        setPage(value);
        setSlice({
            start: (value-1)*eventsPerPage,
            end: (value-1)*eventsPerPage + eventsPerPage
        });
        window.scrollTo(0, 0);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
      };

    return (
        <section className="events-list">
            <div className="container">

                <h1 className="title flex">Miami Edition</h1>

                {docs && docs.slice(slice.start, slice.end).map((doc) => 
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

                <Pagination className="my-3 flex" count={totalPages} page={page} onChange={handleChange} />

            </div>
        </section>
    );
}