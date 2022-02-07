import axios from "axios";
import { useEffect, useState } from "react";
import { Event } from "../../components";
import "./Events.css";

function Events() {
  const hash = process.env.REACT_APP_MARVEL_HASH;
  const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const [events, setEvents] = useState([]);

  useEffect(async () => {
    const result = await axios(
      `http://gateway.marvel.com/v1/public/events?ts=1&apikey=${public_key}&hash=${hash}&limit=100`
    );

    console.log(result.data.data.results);
    setEvents(result.data.data.results);
  }, []);

  return (
    <div className="events">
      <h1>Events</h1>

      <div className="events__list">
        {events.map((event) => (
          <Event
            title={event.title}
            description={event.description}
            image={`${event.thumbnail.path}.${event.thumbnail.extension}`}
            link={event.urls[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default Events;
