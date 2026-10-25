
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import "../App.css";

function Navbar() {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
  <span className="brand-the">THE</span>
  <span className="brand-rich">RICH</span>
  <span className="brand-cafe">CAFÉ</span>
</Link>

      <nav className="navbar-links" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <a href="/#categories">Menu</a>
        <a href="/#about">Our Story</a>
      </nav>

      <Link to="/cart" className="navbar-cart">
        <ShoppingCart size={20} />
        <span>Cart</span>

        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </Link>
    </header>
  );
}

export default Navbar;
