import "./Event.css";

function Event({ title, image, description, link }) {
  return (
    <a className="event" rel="noreferrer noopener" target="_blank" href={link}>
      <img src={image} alt={`${title} image`} />

      <div className="event__info">
        <h3>{title}</h3>
        <p>
          {description.length > 224
            ? `${description.substring(0, 224)}...`
            : description}
        </p>
      </div>
    </a>
  );
}

export default Event;
