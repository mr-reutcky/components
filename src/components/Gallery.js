function Gallery(props) {
  return (
    <section className="gallery">
      <div className="container">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="gallery-grid">
          {props.images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Gallery;