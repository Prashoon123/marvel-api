import axios from "axios";
import { useEffect, useState } from "react";
import { Serie } from "../../components";
import "./Series.css";

function Series() {
  const hash = process.env.REACT_APP_MARVEL_HASH;
  const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const [series, setSeries] = useState([]);

  useEffect(async () => {
    const result = await axios(
      `http://gateway.marvel.com/v1/public/series?ts=1&apikey=${public_key}&hash=${hash}&limit=100`
    );

    console.log(result.data.data.results);
    setSeries(result.data.data.results);
  }, []);

  return (
    <div className="series">
      <h1>Series</h1>

      <div className="series__list">
        {series.map((character) => (
          <Serie
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            name={character.title}
            link={character.urls[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default Series;
