import "./Character.css";

function Character({ image, name, link }) {
  return (
    <a
      className="character"
      rel="noreferrer noopener"
      target="_blank"
      href={link}
    >
      <img src={image} alt={`${name}-img`} />

      <div>
        <p>{name}</p>
      </div>
    </a>
  );
}

export default Character;
