
import { Link } from "react-router-dom";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { categories, menuData } from "../data/menuData";
import FoodCard from "../components/FoodCard";
import Navbar from "../components/Navbar";
import "../App.css";

function FoodCategory({ categoryId }) {
  const category = categories.find(
    (item) => item.id === categoryId
  );

  const foods = menuData[categoryId] || [];

  if (!category) {
    return (
      <div className="app">
        <Navbar />
        <main className="menu-page">
          <h2>Category not found</h2>
          <Link to="/">Back to Home</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />

      <main className="menu-page">
        <Link to="/" className="back-home-link">
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <section className="menu-page-heading">
          <span className="menu-eyebrow">
            <UtensilsCrossed size={16} />
            RICH CAFÉ MENU
          </span>

          <h1>{category.name}</h1>

          <p>{category.description}</p>
        </section>

        {foods.length > 0 ? (
          <section className="menu-food-grid">
            {foods.map((food) => (
              <FoodCard key={food.id} food={food} />
            ))}
          </section>
        ) : (
          <p className="menu-empty">
            No items available in this category yet.
          </p>
        )}
      </main>

      <footer className="footer">
        <h2>RICH CAFÉ</h2>
        <p>Good Food. Good Mood.</p>
      </footer>
    </div>
  );
}

export default FoodCategory;
