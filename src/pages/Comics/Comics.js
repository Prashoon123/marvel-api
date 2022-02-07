import axios from "axios";
import { useEffect, useState } from "react";
import { Comic, Event } from "../../components";
import "./Comics.css";

function Comics() {
  const hash = process.env.REACT_APP_MARVEL_HASH;
  const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const [comics, setComics] = useState([]);

  useEffect(async () => {
    const result = await axios(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${public_key}&hash=${hash}&limit=100`
    );

    console.log(result.data.data.results);
    setComics(result.data.data.results);
  }, []);

  return (
    <div className="comics">
      <h1>Comics</h1>

      <div className="comics__list">
        {comics.map((comic) => (
          <Comic
            title={comic.title}
            image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            link={comic.urls[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default Comics;
