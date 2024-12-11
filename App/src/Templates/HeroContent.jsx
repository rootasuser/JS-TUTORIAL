const HeroContent = () => {
    return (
      <div className="hero-image position-relative mt-0" style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '92.5vh' }}>
        <div className="hero-text position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-1 fw-bolder" style={{ color: '#FFD700', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)' }}>
                Chosen Coffee
                </h1>

                <a href="https://www.facebook.com/ChosenCupspot.Coffee.Tea" class="btn btn-success text-white">
    <i class="bi bi-telephone"></i> Contact Us
</a>



        </div>
      </div>
    );
  };

export default HeroContent;