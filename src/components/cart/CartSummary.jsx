function formatCurrency(value) {
  return `NT$ ${value.toLocaleString('zh-TW')}`;
}

export default function CartSummary({ summary, promoCode, onPromoCodeChange }) {
  const freeShippingRemaining = Math.max(summary.freeShippingThreshold - summary.subtotal, 0);

  return (
    <aside className="cart-summary">
      <div className="cart-summary__card">
        <h2>訂單摘要</h2>

        <div className="cart-summary__notice">
          {summary.discount > 0
            ? '已套用優惠碼 BEAN200'
            : `滿 NT$ ${summary.freeShippingThreshold.toLocaleString('zh-TW')} 享免運`}
        </div>

        <div className="cart-summary__rows">
          <div>
            <span>商品小計</span>
            <strong>{formatCurrency(summary.subtotal)}</strong>
          </div>
          <div>
            <span>物流運費</span>
            <strong>{summary.shipping === 0 ? '免運' : formatCurrency(summary.shipping)}</strong>
          </div>
          <div>
            <span>優惠折抵</span>
            <strong>{summary.discount > 0 ? `- ${formatCurrency(summary.discount)}` : '未套用'}</strong>
          </div>
        </div>

        <label className="cart-summary__promo">
          <span>折扣代碼</span>
          <div>
            <input
              type="text"
              value={promoCode}
              onChange={(event) => onPromoCodeChange(event.target.value)}
              placeholder="輸入優惠碼"
            />
            <button type="button">套用</button>
          </div>
        </label>

        {summary.shipping > 0 && (
          <p className="cart-summary__helper">
            再買 {formatCurrency(freeShippingRemaining)}，即可享有免運。
          </p>
        )}

        <div className="cart-summary__total">
          <span>總花費</span>
          <strong>{formatCurrency(summary.total)}</strong>
        </div>

        <button type="button" className="cart-summary__checkout">
          前往結帳 →
        </button>
      </div>
    </aside>
  );
}
