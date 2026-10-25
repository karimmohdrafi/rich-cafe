
import { Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";
import QuantityControl from "./QuantityControl";
import "../App.css";

function CartItem({ item }) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  return (
    <article className="cart-item">
      <img
        src={item.image}
        alt={item.name}
        className="cart-item-image"
      />

      <div className="cart-item-details">
        <h3>{item.name}</h3>

        <p className="cart-item-unit-price">
          ₹{item.price} each
        </p>

        <QuantityControl
          quantity={item.quantity}
          onIncrease={() => increaseQuantity(item.id)}
          onDecrease={() => decreaseQuantity(item.id)}
        />
      </div>

      <div className="cart-item-actions">
        <strong className="cart-item-subtotal">
          ₹{item.price * item.quantity}
        </strong>

        <button
          type="button"
          className="cart-remove-btn"
          onClick={() => removeFromCart(item.id)}
          aria-label={`Remove ${item.name} from cart`}
          title="Remove item"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </article>
  );
}

export default CartItem;
