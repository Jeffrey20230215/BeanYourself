import RecommendationCard from './RecommendationCard';

export default function CartRecommendations({ items, onAdd }) {
  return (
    <section className="cart-recommendations" aria-labelledby="cart-recommendations-title">
      <div className="cart-recommendations__header">
        <div>
          <p className="section-label">Add On</p>
          <h2 id="cart-recommendations-title">加購推薦</h2>
        </div>
        <p>從設計稿延伸成可重用卡片，之後可以直接改接 API 或後台推薦邏輯。</p>
      </div>

      <div className="cart-recommendations__grid">
        {items.map((item) => (
          <RecommendationCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
