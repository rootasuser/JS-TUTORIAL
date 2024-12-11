const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social">
          <div>
            <p>#COFFEEUNPLUGGED</p>
            <a href="https://www.instagram.com/summermooncoffee" target="_blank" rel="noopener noreferrer">
              <img src="/ig.png" alt="Instagram" width={30} height={30} /> @ChosenCoffee
            </a>
          </div>
          <div>
            <p className="mt-2">FOLLOW US</p>
            <a href="https://www.facebook.com/ChosenCupspot.Coffee.Tea" target="_blank" rel="noopener noreferrer">
              <img src="/fb.png" alt="Facebook" width={30} height={30} /> Chosen Cupspot
            </a>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="logo-section">
          <img src="/logo.jpg" alt="Chosen Coffee" className="logo rounded-circle" />
        </div>
        <div className="links">
          <div className="column">
            <a href="/">HOME</a>
            <a href="/story">STORY</a>
            <a href="/coffee">COFFEE</a>
            <a href="/merch">MERCH</a>
          </div>
          <div className="column">
            <a href="/locations">LOCATIONS</a>
            <a href="/contact">CONTACT</a>
            <a href="/faq">FAQ'S</a>
            <a href="/shipping">SHIPPING & RETURNS</a>
            <a href="/subscriptions">SUBSCRIPTION FAQ'S</a>
          </div>
        </div>
        <div className="newsletter">
          <h3>CHOSEN COFFEE</h3>
          <p>NEWS & COFFEE-TALKS</p>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
      <p>&copy; {currentYear}, Chosen Coffee. All rights reserved.</p>
        <div className="policies">
          <a href="/terms">TERMS & CONDITIONS</a>
          <a href="/privacy">PRIVACY POLICY</a>
        </div>
        <div className="born-bred">
          <img src="#" alt="Negros Oriental, Bayawan City" />
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;