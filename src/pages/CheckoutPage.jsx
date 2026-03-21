import Footer from '../components/Footer';
import CheckoutSummaryCard from '../components/checkout/CheckoutSummaryCard';
import { checkoutItems, checkoutShippingOptions } from '../services/shopService';
import './CheckoutPage.scss';

function CheckoutField({ label, placeholder, type = 'text' }) {
  return (
    <label className="checkout-field">
      <span>{label}</span>
      <input type={type} placeholder={placeholder} />
    </label>
  );
}

export default function CheckoutPage() {
  return (
    <div className="checkout-page">
      <section className="layout-container checkout-page__hero">
        <div>
          <p className="section-label">Checkout</p>
          <h1>結帳資訊</h1>
        </div>
        <a href="#/cart">← 返回購物袋</a>
      </section>

      <div className="layout-container checkout-page__divider" aria-hidden="true" />

      <section className="layout-container checkout-page__content">
        <div className="checkout-page__form">
          <section className="checkout-panel">
            <header>
              <h2>聯絡資訊</h2>
              <p>Contact information</p>
            </header>
            <div className="checkout-grid">
              <CheckoutField label="姓名" placeholder="王小豆" />
              <CheckoutField label="Email" placeholder="bean@example.com" type="email" />
              <CheckoutField label="手機號碼" placeholder="0912-345-678" />
            </div>
          </section>

          <section className="checkout-panel">
            <header>
              <h2>配送資訊</h2>
              <p>Shipping information</p>
            </header>

            <div className="checkout-radio-group">
              {checkoutShippingOptions.map((option, index) => (
                <label key={option} className="checkout-radio">
                  <input type="radio" name="shipping" defaultChecked={index === 0} />
                  <span>{option}</span>
                </label>
              ))}
            </div>

            <div className="checkout-grid">
              <CheckoutField label="收件縣市" placeholder="台北市 / 大安區" />
              <CheckoutField label="電話號碼" placeholder="0912-345-678" />
              <label className="checkout-field checkout-field--full">
                <span>配送地址</span>
                <input type="text" placeholder="忠孝東路四段 123 號" />
              </label>
            </div>

            <div className="checkout-chip-group">
              <span>配送方式</span>
              <div>
                <button type="button" className="is-active">7-11 門市</button>
                <button type="button">全家 門市</button>
                <button type="button">宅配到府</button>
              </div>
            </div>
          </section>

          <section className="checkout-panel">
            <header>
              <h2>付款與發票</h2>
              <p>Payment & invoice</p>
            </header>

            <div className="checkout-chip-group">
              <span>付款選項</span>
              <div>
                <button type="button" className="is-active">信用卡</button>
                <button type="button">ATM 轉帳</button>
                <button type="button">貨到付款</button>
              </div>
            </div>

            <div className="checkout-grid">
              <label className="checkout-field checkout-field--full">
                <span>信用卡卡號</span>
                <input type="text" placeholder="0000-0000-0000-0000" />
              </label>
              <CheckoutField label="持卡人姓名" placeholder="填入持卡人英文姓名" />
              <CheckoutField label="安全碼" placeholder="輸入末三碼 CVC" />
            </div>

            <div className="checkout-chip-group">
              <span>發票資訊</span>
              <div>
                <button type="button" className="is-active">手機載具</button>
                <button type="button">捐贈發票</button>
                <button type="button">公司戶發票</button>
              </div>
            </div>

            <label className="checkout-field checkout-field--full">
              <span>手機條碼</span>
              <input type="text" placeholder="/ ABC1234" />
            </label>
          </section>
        </div>

        <CheckoutSummaryCard items={checkoutItems} />
      </section>

      <Footer />
    </div>
  );
}
