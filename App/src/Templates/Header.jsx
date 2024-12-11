import React, { useState } from 'react';

const Header = () => {
  const products = [
    { id: 1, name: 'Malunggay & Corn Coffee', price: 130, image: '/coffeeImage.jpg' },
    { id: 2, name: 'Mangosteen, Malunggay & Corn Coffee', price: 150, image: '/coffeeImage.jpg' },
    { id: 3, name: 'Barley & Corn Coffee', price: 170, image: '/coffeeImage.jpg' },
    // Add more products as needed
  ];

  // State to store the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        {/* Profile image and brand name */}
        <div className="d-flex align-items-center">
          <img
            src="/logo.jpg"
            alt="Profile"
            className="rounded-circle"
            style={{ width: '30px', height: '30px' }}
          />
          <a href="#" className="navbar-brand ms-2 text-white">Chosen Coffee</a>
        </div>

        {/* Navbar Toggler for mobile view */}
        <button
          className="navbar-toggler btn-outline-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          {/* Search input */}
          <div className="d-flex align-items-center">
            <div className="input-group" style={{ position: 'relative' }}>
              <input
                type="search"
                className="form-control"
                placeholder="Search Product"
                aria-label="Search"
                style={{ paddingRight: '40px' }}
                value={searchQuery} // Bind the input to the search query
                onChange={(e) => setSearchQuery(e.target.value)} // Update the search query on input change
              />
              <i
                className="bi bi-search"
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#000',
                  pointerEvents: 'none',
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Display filtered products below the search input */}
      {searchQuery && (
        <div
          className="product-results mt-3 px-3 py-2 bg-light"
          style={{
            position: 'absolute', // Make it float
            top: '100%', // Place it below the input
            left: '0',
            right: '0',
            width: '100%',
            zIndex: '1000', // Ensure it's above other elements
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
          }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-item d-flex align-items-center mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                  style={{ marginRight: '10px' }}
                />
                <div>
                  <h6>{product.name}</h6>
                  <p>₱{product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
