import "./Comic.css";

function Comic({ title, image, link }) {
  return (
    <a className="comic" rel="noreferrer noopener" target="_blank" href={link}>
      <img src={image} alt={`${title} image`} />

      <div className="comic__info">
        <h3>{title}</h3>
      </div>
    </a>
  );
}

export default Comic;
