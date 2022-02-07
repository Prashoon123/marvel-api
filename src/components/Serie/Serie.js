import "./Serie.css";

function Serie({ image, name, link }) {
  return (
    <a
      className="serie"
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

export default Serie;
