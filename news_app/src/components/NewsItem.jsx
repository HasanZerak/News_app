import image from '../assets/realistic-news-studio-background/8283688.jpg'

export default function NewsItem({ title, description, src, url }) {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src?src:image}
        style={{ height: "200px", width: "360px" }}
        className="card-img-top"
        alt="IMAGE NOT AVAILABLE"
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "This is information about current event. It is information about something that happened recently."}
        </p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
