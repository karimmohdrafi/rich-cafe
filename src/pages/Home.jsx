
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import { categories } from "../data/menuData";
import "../App.css";

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!categories.length) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % categories.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  if (!categories.length) {
    return (
      <div className="app home-page">
        <Navbar />
        <main className="luxury-hero">
          <h1>THE RICH CAFÉ</h1>
          <p>Menu coming soon.</p>
        </main>
      </div>
    );
  }

  const activeFood = categories[activeIndex];

  const sideFoods = [1, 2]
    .map((offset) => categories[(activeIndex + offset) % categories.length])
    .filter(Boolean);

  return (
    <div className="app home-page">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero luxury-hero" id="home">
          {/* LEFT CONTENT */}
          <div className="hero-content luxury-hero-content">
            <span className="hero-eyebrow">
              <Sparkles size={15} />
              WELCOME TO THE RICH CAFÉ
            </span>

            <h1 className="luxury-brand-title">
              THE RICH
              <br />
              <span>CAFÉ.</span>
            </h1>

            <div className="hero-title-line" />

            <h2 className="luxury-tagline">
              Made for cravings.
              <br />
              <span>Remembered for flavour.</span>
            </h2>

            <p className="luxury-description">
              From sizzling shawarma to crispy favourites,
              discover delicious food made to brighten your day.
              Your next favourite bite is waiting here.
            </p>

            <div className="luxury-hero-actions">
              <a href="#categories" className="hero-order-btn">
                EXPLORE MENU
                <ArrowRight size={17} />
              </a>
            </div>

            <span className="hero-small-note">
              GOOD FOOD · GREAT MOMENTS
            </span>
          </div>

          {/* RIGHT SIDE FOOD GALLERY */}
          <div className="food-editorial-gallery">
            {/* MAIN FOOD IMAGE */}
            <Link
              to={activeFood.path}
              className="editorial-main-food"
              key={activeFood.id}
            >
              <img
                src={activeFood.image}
                alt={activeFood.name}
                loading="eager"
              />

              <div className="editorial-image-caption">
                <span>THE RICH CAFÉ SELECTION</span>

                <h2>{activeFood.name}</h2>

                <span className="editorial-view-link">
                  DISCOVER <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* TWO SUPPORTING FOOD IMAGES */}
            <div className="editorial-side-foods">
              {sideFoods.map((food) => (
                <Link
                  to={food.path}
                  className="editorial-small-food"
                  key={food.id}
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                  />

                  <span>{food.name}</span>
                </Link>
              ))}
            </div>

            {/* SLIDESHOW CONTROLS */}
            <div className="editorial-gallery-footer">
              <span>FRESHLY PREPARED</span>

              <div className="editorial-indicators">
                {categories.map((food, index) => (
                  <button
                    key={food.id}
                    type="button"
                    aria-label={`Show ${food.name}`}
                    aria-pressed={index === activeIndex}
                    className={index === activeIndex ? "active" : ""}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>

              <span>FULL OF FLAVOUR</span>
            </div>
          </div>
        </section>

        {/* MENU CATEGORIES */}
        <section className="category-section" id="categories">
          <div className="section-heading">
            <span>YOUR NEXT FAVOURITE</span>

            <h2>Explore Our Menu</h2>

            <p>
              From crispy classics to flavour-packed favourites,
              find something delicious for every craving.
            </p>
          </div>

          <div className="category-strip">
            {categories.map((category) => (
              <Link
                to={category.path}
                className="category-item"
                key={category.id}
              >
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                  />
                </div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <span className="category-explore">
                  EXPLORE <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-content">
            <span>MORE THAN JUST A MEAL</span>

            <h2>Good Food. Great Moments.</h2>

            <p>
              At The RICH CAFÉ, every bite is about flavour,
              freshness, and the joy of discovering something
              delicious. Your next favourite meal starts here.
            </p>

            <a href="#categories" className="about-menu-link">
              FIND YOUR FAVOURITE
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <h2>THE RICH CAFÉ</h2>

        <p>Cravings made extraordinary.</p>

        <small>
          © {new Date().getFullYear()} The RICH CAFÉ.
          All rights reserved.
        </small>
      </footer>
    </div>
  );
}

export default Home;
