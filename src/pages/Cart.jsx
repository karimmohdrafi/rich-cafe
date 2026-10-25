
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingBag,
  Trash2,
  Truck,
  ShieldCheck,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import "../App.css";

const DELIVERY_FEE = 30;

function Cart() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const grandTotal =
    cartItems.length > 0 ? cartTotal + DELIVERY_FEE : 0;

  return (
    <div className="app cart-page-wrapper">
      <Navbar />

      <main className="cart-page">
        <Link to="/" className="back-home-link">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>

        <section className="cart-heading">
          <span className="menu-eyebrow">
            <ShoppingBag size={17} />
            YOUR SELECTION
          </span>

          <h1>My Cart</h1>

          <p>Your favourite food, ready to order.</p>
        </section>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={48} />
            <h2>Your cart is empty</h2>
            <p>
              Looks like you haven't added any delicious
              food yet.
            </p>

            <Link to="/" className="hero-order-btn">
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </section>

            <aside className="cart-summary">
              <span className="summary-eyebrow">
                <ShieldCheck size={15} />
                SECURE CHECKOUT
              </span>

              <h2>Order Summary</h2>

              <div className="cart-summary-row">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>

              <div className="cart-summary-row">
                <span>
                  <Truck size={15} />
                  Delivery Charges
                </span>
                <span>₹{DELIVERY_FEE}</span>
              </div>

              <div className="cart-summary-total">
                <span>Grand Total</span>
                <strong>₹{grandTotal}</strong>
              </div>

              <p className="cart-summary-note">
                Delivery charges are fixed at ₹30 per order.
              </p>

              <button
                type="button"
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
                <ArrowLeft
                  size={17}
                  style={{ transform: "rotate(180deg)" }}
                />
              </button>

              <button
                type="button"
                className="clear-cart-btn"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to clear your cart?"
                    )
                  ) {
                    clearCart();
                  }
                }}
              >
                <Trash2 size={16} />
                Clear Cart
              </button>
            </aside>
          </div>
        )}
      </main>

      <footer className="footer">
        <h2>THE RICH CAFE</h2>
        <p>Good Food. Good Mood.</p>
      </footer>
    </div>
  );
}

export default Cart;
