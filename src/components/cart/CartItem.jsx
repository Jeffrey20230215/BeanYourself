import QuantityStepper from './QuantityStepper';

function formatCurrency(value) {
  return `NT$ ${value.toLocaleString('zh-TW')}`;
}

export default function CartItem({ item, onQuantityChange, onRemove }) {
  return (
    <article className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.name} />

      <div className="cart-item__info">
        <h3>{item.name}</h3>
        <p>{`${item.sizeLabel} ． ${item.grindLabel}`}</p>
      </div>

      <div className="cart-item__quantity">
        <QuantityStepper
          quantity={item.quantity}
          onDecrease={() => onQuantityChange(item.id, item.quantity - 1)}
          onIncrease={() => onQuantityChange(item.id, item.quantity + 1)}
        />
      </div>

      <div className="cart-item__subtotal">{formatCurrency(item.price * item.quantity)}</div>

      <button
        type="button"
        className="cart-item__remove"
        onClick={() => onRemove(item.id)}
        aria-label={`移除 ${item.name}`}
      >
        移除
      </button>
    </article>
  );
}
