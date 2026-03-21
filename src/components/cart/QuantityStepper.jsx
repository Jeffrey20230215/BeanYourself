export default function QuantityStepper({ quantity, onDecrease, onIncrease }) {
  return (
    <div className="quantity-stepper" aria-label="數量調整">
      <button type="button" onClick={onDecrease} aria-label="減少數量">
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={onIncrease} aria-label="增加數量">
        +
      </button>
    </div>
  );
}
