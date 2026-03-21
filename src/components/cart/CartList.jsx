import CartItem from './CartItem';

export default function CartList({ items, onQuantityChange, onRemove }) {
  if (!items.length) {
    return (
      <div className="cart-list cart-list--empty">
        <h2>購物車目前是空的</h2>
        <p>先挑幾包喜歡的咖啡豆，再回來結帳吧。</p>
      </div>
    );
  }

  return (
    <section className="cart-list" aria-label="購物車品項">
      <div className="cart-list__header" aria-hidden="true">
        <span>品項</span>
        <span>數量</span>
        <span>小計</span>
        <span />
      </div>

      <div className="cart-list__items">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  );
}
