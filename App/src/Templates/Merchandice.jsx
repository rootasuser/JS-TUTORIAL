const Merchandice = () => {
  return (
    <div 
      className="container d-flex justify-content-center align-items-center mt-3 w-100" 
      style={{ height: '40vh', width: '100%', border: '1px solid #eee', borderRadius: '10px' }}
    >
      <div className="card mb-3" style={{ width: '100%', maxWidth: '540px', border: 'none' }}>
        <div className="row g-0">
          {/* Left side: Image */}
          <div className="col-md-4">
            <img
              src="/magenfein.jpg" 
              className="img-fluid rounded-start"
              alt="Product Image"
            />
          </div>

          {/* Right side: Title and Description */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-center" style={{ textDecoration: 'underline' }}>Magenfein</h5>
              <p className="card-text text-center">
              Magenfein is a premium German digestive aid crafted from natural ingredients to support healthy digestion and relieve discomfort. Perfect for everyday wellness, it reduces bloating and promotes digestive comfort. Feel your best with Magenfein – your natural solution for digestive health.
              </p>
              <p className="card-text text-center">
                <small className="text-body-secondary">Shop Now</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandice;
