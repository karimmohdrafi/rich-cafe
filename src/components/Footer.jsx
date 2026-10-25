
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Coffee,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const mapUrl = "https://maps.app.goo.gl/HHhX9Nwu2EpswG6M6";

  const categories = [
    { name: "Shawarma", path: "/shawarma" },
    { name: "Fried Chicken", path: "/fried-chicken" },
    { name: "Chicken Pizza", path: "/chicken-pizza" },
    { name: "Chicken Burger", path: "/chicken-burger" },
    { name: "Chicken Sandwich", path: "/chicken-sandwich" },
    { name: "French Fries", path: "/french-fries" },
    { name: "Fried Momos", path: "/fried-momos" },
    { name: "Grilled Chicken", path: "/grilled-chicken" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Cart", path: "/cart" },
  ];

  return (
    <footer className="rich-footer">
      <div className="footer-top-line" />

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">
              <Coffee size={27} strokeWidth={1.5} />
            </span>

            <span className="footer-logo-text">
              <span className="footer-brand-name">THE RICH</span>
              <span className="footer-brand-subtitle">
                C A F É
              </span>
            </span>
          </Link>

          <p className="footer-description">
            Good food. Great taste. Beautiful moments.
            Experience your favourite flavours, freshly
            prepared and served with love.
          </p>

          <div className="footer-socials">
            <a
              href="https://wa.me/918500278260"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact THE RICH CAFE on WhatsApp"
              className="footer-social-link footer-whatsapp"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3 className="footer-heading">Explore</h3>
          <span className="footer-heading-line" />

          {quickLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="footer-nav-link"
            >
              <ChevronRight size={14} />
              {link.name}
            </Link>
          ))}
        </div>

        {/* FOOD CATEGORIES */}
        <div className="footer-column">
          <h3 className="footer-heading">Our Menu</h3>
          <span className="footer-heading-line" />

          {categories.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="footer-nav-link"
            >
              <ChevronRight size={14} />
              {item.name}
            </Link>
          ))}
        </div>

        {/* CONTACT & MAP */}
        <div className="footer-column footer-contact">
          <h3 className="footer-heading">Get In Touch</h3>
          <span className="footer-heading-line" />

          <div className="footer-contact-item footer-visit-heading">
            <span className="footer-contact-icon">
              <MapPin size={18} />
            </span>

            <div>
              <strong>Visit Us</strong>
              <p>Find THE RICH CAFÉ on Google Maps.</p>
            </div>
          </div>

          {/* GOOGLE MAP PREVIEW */}
          <div className="footer-map">
            <iframe
              title="THE RICH CAFE Google Maps Location"
              src="https://maps.google.com/maps?q=THE%20RICH%20CAFE&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href={mapUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-map-directions"
            >
              <MapPin size={15} />
              Get Directions
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* PHONE */}
          <a
            href="tel:+918500278260"
            className="footer-contact-item footer-contact-link"
          >
            <span className="footer-contact-icon">
              <Phone size={18} />
            </span>

            <div>
              <strong>Call Us</strong>
              <p>JUBEAR</p>
              <p>+91 85002 78260</p>
            </div>
          </a>

          {/* OPENING HOURS */}
          <div className="footer-contact-item">
            <span className="footer-contact-icon">
              <Clock size={18} />
            </span>

            <div>
              <strong>Opening Hours</strong>
              <p>Contact us for today's timings.</p>
            </div>
          </div>
        </div>
      </div>

      {/* GOLD CTA */}
      <div className="footer-cta">
        <div>
          <span className="footer-cta-eyebrow">
            YOUR NEXT FAVOURITE BITE
          </span>

          <h3>Cravings don't wait.</h3>
          <p>Discover something delicious today.</p>
        </div>

        <Link to="/shawarma" className="footer-order-btn">
          Explore Menu
          <ArrowUpRight size={18} />
        </Link>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()}{" "}
          <span>THE RICH CAFÉ</span>. All rights reserved.
        </p>

        <p className="footer-made-with">
          Crafted with <span>♥</span> for food lovers
        </p>

        <Link to="/" className="footer-back-top">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
};

export default Footer;