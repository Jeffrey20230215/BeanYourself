function formatCurrency(value) {
  return `NT$ ${value.toLocaleString('zh-TW')}`;
}

export default function RecommendationCard({ item, onAdd }) {
  return (
    <article className="recommendation-card">
      <img className="recommendation-card__image" src={item.image} alt={item.name} />

      <div className="recommendation-card__body">
        <div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>

        <div className="recommendation-card__footer">
          <strong>{formatCurrency(item.price)}</strong>
          <button type="button" onClick={() => onAdd(item)} aria-label={`加入 ${item.name}`}>
            +
          </button>
        </div>
      </div>
    </article>
  );
}
