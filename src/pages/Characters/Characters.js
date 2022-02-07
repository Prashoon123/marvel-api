import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "../../components";
import "./Characters.css";

function Characters() {
  const hash = process.env.REACT_APP_MARVEL_HASH;
  const public_key = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const result = await axios(
      `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${public_key}&hash=${hash}&limit=100`
    );

    console.log(result.data.data.results);
    setCharacters(result.data.data.results);
  }, []);

  return (
    <div className="characters">
      <h1>Characters</h1>

      <div className="characters__list">
        {characters.map((character) => (
          <Character
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            name={character.name}
            link={character.urls[0].url}
          />
        ))}
      </div>
    </div>
  );
}

export default Characters;
