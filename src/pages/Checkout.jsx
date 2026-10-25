
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Banknote,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import "../App.css";

const DELIVERY_FEE = 30;

const OWNER_WHATSAPP_NUMBERS = [
  "918500278260",
  "917893211662",
];

function Checkout() {
  const { cartItems, cartTotal } = useCart();

  const [addressSubmitted, setAddressSubmitted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [address, setAddress] = useState({
    fullName: "",
    mobile: "",
    houseNumber: "",
    streetName: "",
    areaName: "",
  });

  const grandTotal =
    cartItems.length > 0 ? cartTotal + DELIVERY_FEE : 0;

  function handleAddressChange(event) {
    const { name, value } = event.target;

    setAddress((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleAddressSubmit(event) {
    event.preventDefault();
    setAddressSubmitted(true);
  }

  const orderMessage = [
    "THE RICH CAFE - NEW COD ORDER",
    "",
    "Customer Details",
    `Name: ${address.fullName}`,
    `Mobile: ${address.mobile}`,
    "",
    "Delivery Address",
    `House No: ${address.houseNumber}`,
    `Street: ${address.streetName}`,
    `Area: ${address.areaName}`,
    "",
    "ORDER ITEMS",
    ...cartItems.map(
      (item) =>
        `${item.name} x ${item.quantity} = Rs.${item.price * item.quantity}`
    ),
    "",
    `Subtotal: Rs.${cartTotal}`,
    `Delivery Charge: Rs.${DELIVERY_FEE}`,
    `GRAND TOTAL: Rs.${grandTotal}`,
    "Payment Method: Cash on Delivery",
  ].join("\n");

  const whatsappMessageUrl = (number) =>
    `https://wa.me/${number}?text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="app">
      <Navbar />

      <main className="checkout-page">
        <Link to="/cart" className="back-home-link">
          <ArrowLeft size={18} />
          Back to Cart
        </Link>

        <section className="checkout-heading">
          <span className="menu-eyebrow">
            <MapPin size={16} />
            DELIVERY DETAILS
          </span>

          <h1>Checkout</h1>
          <p>Complete your delivery details and place your order.</p>
        </section>

        {cartItems.length === 0 ? (
          <section className="address-card">
            <h2>Your cart is empty</h2>
            <p>Add some delicious food before checking out.</p>
            <Link to="/" className="hero-order-btn">
              Explore Menu
            </Link>
          </section>
        ) : (
          <div className="checkout-layout">
            <section className="address-card">
              <h2>Delivery Address</h2>
              <p>Where should we deliver your order?</p>

              <form
                className="address-form"
                onSubmit={handleAddressSubmit}
              >
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  value={address.fullName}
                  onChange={handleAddressChange}
                  autoComplete="name"
                  placeholder="Enter your full name"
                  required
                  disabled={orderPlaced}
                />

                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  value={address.mobile}
                  onChange={handleAddressChange}
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  required
                  disabled={orderPlaced}
                />

                <label htmlFor="houseNumber">House Number</label>
                <input
                  id="houseNumber"
                  name="houseNumber"
                  value={address.houseNumber}
                  onChange={handleAddressChange}
                  placeholder="House / Flat number"
                  required
                  disabled={orderPlaced}
                />

                <label htmlFor="streetName">Street Name</label>
                <input
                  id="streetName"
                  name="streetName"
                  value={address.streetName}
                  onChange={handleAddressChange}
                  placeholder="Enter street name"
                  required
                  disabled={orderPlaced}
                />

                <label htmlFor="areaName">Area Name</label>
                <input
                  id="areaName"
                  name="areaName"
                  value={address.areaName}
                  onChange={handleAddressChange}
                  placeholder="Enter area / locality"
                  required
                  disabled={orderPlaced}
                />

                {!orderPlaced && (
                  <button type="submit" className="checkout-btn">
                    Proceed to Payment
                  </button>
                )}
              </form>

              {addressSubmitted && (
                <p className="address-success">
                  <CheckCircle2 size={17} />
                  Delivery address submitted.
                </p>
              )}
            </section>

            <aside className="payment-placeholder">
              {!addressSubmitted ? (
                <>
                  <span className="menu-eyebrow">NEXT STEP</span>
                  <h2>Cash on Delivery</h2>
                  <p>
                    Submit your delivery address to continue
                    with your order.
                  </p>
                </>
              ) : (
                <>
                  <span className="menu-eyebrow">
                    PAYMENT METHOD
                  </span>

                  <h2>Cash on Delivery</h2>

                  <div className="payment-option selected">
                    <span className="payment-option-icon">
                      <Banknote size={25} />
                    </span>

                    <span className="payment-option-text">
                      <strong>Cash on Delivery</strong>
                      <small>Pay when your order arrives.</small>
                    </span>

                    <CheckCircle2 size={20} color="#D6B477" />
                  </div>

                  <div className="checkout-order-total">
                    <span>Subtotal</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <div className="checkout-order-total">
                    <span>Delivery Charge</span>
                    <strong>₹{DELIVERY_FEE}</strong>
                  </div>

                  <div className="checkout-order-total checkout-grand-total">
                    <span>Grand Total</span>
                    <strong>₹{grandTotal}</strong>
                  </div>

                  {!orderPlaced ? (
                    <button
                      type="button"
                      className="checkout-btn"
                      onClick={() => setOrderPlaced(true)}
                    >
                      Place COD Order
                    </button>
                  ) : (
                    <div className="order-notification">
                      <CheckCircle2
                        size={30}
                        color="#D6B477"
                      />

                      <h3>Order Details Ready!</h3>

                      <p>
                        Send your order details to the Rich Cafe
                        owner using either WhatsApp button below.
                      </p>

                      <a
                        className="whatsapp-order-btn"
                        href={whatsappMessageUrl(
                          OWNER_WHATSAPP_NUMBERS[0]
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={19} />
                        JUBEAR
                      </a>

                      <a
                        className="whatsapp-order-btn"
                        href={whatsappMessageUrl(
                          OWNER_WHATSAPP_NUMBERS[1]
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={19} />
                        ABDUL KALAM
                      </a>

                      <p className="payment-selection-note">
                        WhatsApp will open with the order message
                        prepared. Press Send to deliver it.
                      </p>
                    </div>
                  )}
                </>
              )}
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

export default Checkout;
