
import { Minus, Plus } from "lucide-react";
import "../App.css";

function QuantityControl({
  quantity = 0,
  onIncrease,
  onDecrease,
  onAdd,
}) {
  if (quantity === 0) {
    return (
      <button
        type="button"
        className="quantity-add-btn"
        onClick={onAdd}
      >
        <Plus size={17} />
        Add
      </button>
    );
  }

  return (
    <div className="quantity-control">
      <button
        type="button"
        className="quantity-btn"
        onClick={onDecrease}
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>

      <span className="quantity-value">{quantity}</span>

      <button
        type="button"
        className="quantity-btn"
        onClick={onIncrease}
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}

export default QuantityControl;
