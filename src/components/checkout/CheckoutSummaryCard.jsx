import PlaceholderImage from '../home/PlaceholderImage';
import QuantityStepper from '../cart/QuantityStepper';
import './CheckoutSummaryCard.scss';

function formatCurrency(value) {
  return `NT$ ${value.toLocaleString('zh-TW')}`;
}

export default function CheckoutSummaryCard({ items }) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 1200 ? 0 : 80;
  const total = subtotal + shipping;

  return (
    <aside className="checkout-summary-card">
      <div className="checkout-summary-card__card">
        <h2>訂單摘要</h2>

        <div className="checkout-summary-card__items">
          {items.map((item) => (
            <article key={item.id} className="checkout-summary-card__item">
              <PlaceholderImage
                className="checkout-summary-card__item-image"
                label={item.imageLabel}
                tone={item.tone || 'default'}
              />
              <div className="checkout-summary-card__item-info">
                <strong>{item.name}</strong>
                <span>{item.option}</span>
                <div className="checkout-summary-card__item-row">
                  <QuantityStepper
                    quantity={item.quantity}
                    onDecrease={() => {}}
                    onIncrease={() => {}}
                  />
                  <em>{formatCurrency(item.price * item.quantity)}</em>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="checkout-summary-card__totals">
          <div>
            <span>商品小計</span>
            <strong>{formatCurrency(subtotal)}</strong>
          </div>
          <div>
            <span>物流運費</span>
            <strong>{shipping === 0 ? '免運' : formatCurrency(shipping)}</strong>
          </div>
          <div className="checkout-summary-card__grand-total">
            <span>總計</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </div>

        <button type="button">提交訂單</button>
      </div>
    </aside>
  );
}
