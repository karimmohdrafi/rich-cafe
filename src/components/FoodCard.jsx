
import { useCart } from "../context/CartContext";
import QuantityControl from "./QuantityControl";
import "../App.css";

function FoodCard({ food }) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const cartItem = cartItems.find(
    (item) => item.id === food.id
  );

  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <article className="menu-food-card">
      <div className="menu-food-image-wrap">
        <img
          src={food.image}
          alt={food.name}
          className="menu-food-image"
          loading="lazy"
        />
      </div>

      <div className="menu-food-details">
        <h3 className="menu-food-name">{food.name}</h3>

        <p className="menu-food-description">
          {food.description}
        </p>

        <div className="menu-food-bottom">
          <span className="menu-food-price">
            ₹{food.price}
          </span>

          <QuantityControl
            quantity={quantity}
            onAdd={() => addToCart(food)}
            onIncrease={() => increaseQuantity(food.id)}
            onDecrease={() => decreaseQuantity(food.id)}
          />
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
