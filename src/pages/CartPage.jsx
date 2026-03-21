import CartList from '../components/cart/CartList';
import CartRecommendations from '../components/cart/CartRecommendations';
import CartSummary from '../components/cart/CartSummary';
import { useCartPage } from '../hooks/useCartPage';
import './CartPage.scss';

export default function CartPage() {
  const {
    items,
    recommendations,
    promoCode,
    setPromoCode,
    summary,
    isLoading,
    updateItemQuantity,
    removeItem,
    addRecommendation,
  } = useCartPage();

  return (
    <div className="cart-page">
      <section className="layout-container cart-page__hero">
        <div>
          <p className="section-label">Cart</p>
          <h1>購物車</h1>
        </div>
        <a href="#/product">繼續選購</a>
      </section>

      <div className="layout-container cart-page__divider" aria-hidden="true" />

      <section className="layout-container cart-page__content">
        <div className="cart-page__list-column">
          {isLoading ? (
            <div className="cart-page__loading">載入購物車中...</div>
          ) : (
            <CartList
              items={items}
              onQuantityChange={updateItemQuantity}
              onRemove={removeItem}
            />
          )}
        </div>

        <CartSummary
          summary={summary}
          promoCode={promoCode}
          onPromoCodeChange={setPromoCode}
        />
      </section>

      <section className="layout-container cart-page__recommendations">
        <CartRecommendations items={recommendations} onAdd={addRecommendation} />
      </section>
    </div>
  );
}
