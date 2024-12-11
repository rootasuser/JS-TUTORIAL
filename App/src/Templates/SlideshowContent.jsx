const SlideshowContent = () => {
  return (
    <div className="text-center mt-2">
        <hr />
      {/* Title Section */}
      <div className="mb-2">
        <h6
          style={{
            fontFamily: '"Lucida Console", "Courier New", monospace',
            fontWeight: 'bold',
            color: 'red',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)'
          }}
        >
          Chosen Coffee's
        </h6>
      </div>
      <div className="mb-1">
      <h1
  className="display-4 fw-bold"
  style={{
    fontFamily: '"Lucida Console", "Courier New", monospace',
    background: 'linear-gradient(to right, #b0c4de, #2f4f4f)', // Metallic gradient (light steel blue to dark slate gray)
    color: 'transparent',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    fontSize: '70px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' // metallic look
  }}
>
  CHOSEN CHARM FOR <br />
  EXCELLENT HEALTH
</h1>

      </div>
      <div className="mb-1">
        <small>
          Let food be your medicine and medicine be your food.
        </small>
      </div>
      <div className="mb-1">
        <button className="btn btn-outline-dark text-danger">
          OUR COFFEES <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      {/* Image Slideshow */}
      <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="/coffeeImage.jpg" className="d-block w-100" alt="Image 1" />
          </div>
          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="/coffeeImage.jpg" className="d-block w-100" alt="Image 2" />
          </div>
          {/* Slide 3 */}
          <div className="carousel-item">
            <img src="/coffeeImage.jpg" className="d-block w-100" alt="Image 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SlideshowContent;
