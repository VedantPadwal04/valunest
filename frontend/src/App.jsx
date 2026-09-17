import {
  Search,
  MapPin,
  Home,
  Building2,
  KeyRound,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-mark">
              <Home size={21} strokeWidth={2.5} />
            </div>

            <span className="logo-text">
              Valu<span>Nest</span>
            </span>
          </div>

          <div className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#properties" onClick={() => setMenuOpen(false)}>
              Properties
            </a>
            <a href="#valuation" onClick={() => setMenuOpen(false)}>
              Valuation
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </div>

          <div className="nav-actions">
            <button className="login-btn">Login</button>
            <button className="list-btn">List Property</button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-badge">
              <TrendingUp size={16} />
              <span>Smart Property Platform</span>
            </div>

            <h1>
              Find a place
              <br />
              <span>you'll love.</span>
            </h1>

            <p className="hero-description">
              Discover properties, explore locations and understand their
              value — all in one place.
            </p>

<<<<<<< HEAD
            {/* SEARCH BOX */}
            <div className="search-box">
              <div className="search-field">
                <MapPin size={21} />
=======
            {/* SEARCH */}
            <div className="search-box">
              <div className="search-field">
                <MapPin size={21} />

>>>>>>> 48c0a33 (Build ValuNest landing page)
                <div>
                  <label>Location</label>
                  <input
                    type="text"
                    placeholder="City, area or locality"
                  />
                </div>
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <Home size={21} />
<<<<<<< HEAD
                <div>
                  <label>Property Type</label>
=======

                <div>
                  <label>Property Type</label>

>>>>>>> 48c0a33 (Build ValuNest landing page)
                  <select defaultValue="">
                    <option value="" disabled>
                      Select type
                    </option>
                    <option>Apartment</option>
                    <option>Villa</option>
                    <option>House</option>
                    <option>Office</option>
                    <option>Plot</option>
                  </select>
                </div>
              </div>

              <div className="search-divider"></div>

              <div className="search-field">
                <KeyRound size={21} />
<<<<<<< HEAD
                <div>
                  <label>Purpose</label>
=======

                <div>
                  <label>Purpose</label>

>>>>>>> 48c0a33 (Build ValuNest landing page)
                  <select defaultValue="Buy">
                    <option>Buy</option>
                    <option>Rent</option>
                  </select>
                </div>
              </div>

              <button className="search-btn">
                <Search size={20} />
                <span>Search</span>
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>10K+</strong>
                <span>Properties</span>
              </div>

              <div className="stat-line"></div>

              <div>
                <strong>50+</strong>
                <span>Cities</span>
              </div>

              <div className="stat-line"></div>

              <div>
                <strong>5K+</strong>
                <span>Happy Users</span>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="quick-section" id="properties">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">EXPLORE</span>
                <h2>What are you looking for?</h2>
              </div>

              <a href="#properties" className="view-all">
                View all properties
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="action-grid">
              <div className="action-card">
                <div className="action-icon">
                  <Building2 size={25} />
                </div>

                <div>
                  <h3>Buy a Property</h3>
                  <p>Find your next home or investment.</p>
                </div>

                <ArrowRight className="action-arrow" size={20} />
              </div>

              <div className="action-card">
                <div className="action-icon">
                  <KeyRound size={25} />
                </div>

                <div>
                  <h3>Rent a Property</h3>
                  <p>Explore homes that fit your lifestyle.</p>
                </div>

                <ArrowRight className="action-arrow" size={20} />
              </div>

              <div className="action-card">
                <div className="action-icon">
                  <Home size={25} />
                </div>

                <div>
                  <h3>Sell Your Property</h3>
                  <p>List your property with ValuNest.</p>
                </div>

                <ArrowRight className="action-arrow" size={20} />
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* VALUATION SECTION */}
=======
        {/* VALUATION */}
>>>>>>> 48c0a33 (Build ValuNest landing page)
        <section className="valuation-section" id="valuation">
          <div className="valuation-container">
            <div className="valuation-content">
              <span className="eyebrow">PROPERTY VALUATION</span>

              <h2>
                Know what your
                <br />
                property is <span>worth.</span>
              </h2>

              <p>
                Get an estimated property value based on location, property
                type, area and other important factors.
              </p>

              <button className="valuation-btn">
                Estimate Property Value
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="valuation-card">
              <div className="valuation-card-icon">
                <TrendingUp size={28} />
              </div>

              <h3>Smart Valuation</h3>

              <p>
                Data-driven insights to help you understand the market value
                of a property.
              </p>

              <div className="valuation-points">
                <div>
                  <ShieldCheck size={18} />
                  Location based
                </div>

                <div>
                  <ShieldCheck size={18} />
                  Property specific
                </div>

                <div>
                  <ShieldCheck size={18} />
                  Market insights
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* TRUST */}
=======
        {/* WHY VALUNEST */}
>>>>>>> 48c0a33 (Build ValuNest landing page)
        <section className="trust-section" id="about">
          <div className="section-container trust-content">
            <span className="eyebrow">WHY VALUNEST</span>

            <h2>
              Property decisions,
              <br />
              made <span>smarter.</span>
            </h2>

            <p>
              ValuNest brings property discovery, location intelligence and
              valuation together to make your real-estate journey simpler.
            </p>

            <div className="trust-features">
              <div>
                <ShieldCheck size={21} />
                <span>Verified listings</span>
              </div>

              <div>
                <MapPin size={21} />
                <span>Map-based discovery</span>
              </div>

              <div>
                <TrendingUp size={21} />
                <span>Property valuation</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="section-container footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark">
                <Home size={19} />
              </div>

              <span className="logo-text">
                Valu<span>Nest</span>
              </span>
            </div>

            <p>Find. Value. Move.</p>
          </div>

          <div className="footer-copy">
            © 2026 ValuNest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 48c0a33 (Build ValuNest landing page)
