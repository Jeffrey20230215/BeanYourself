import PlaceholderImage from '../home/PlaceholderImage';
import './CatalogProductCard.scss';

function formatCurrency(value) {
  return `NT$ ${value.toLocaleString('zh-TW')}`;
}

export default function CatalogProductCard({ product, ctaLabel = '查看商品' }) {
  return (
    <article className="catalog-product-card">
      <PlaceholderImage
        className="catalog-product-card__image"
        label={product.imageLabel}
        tone={product.tone || 'default'}
      />

      <div className="catalog-product-card__body">
        <div className="catalog-product-card__meta">
          <span>{product.category}</span>
          <span>{product.roast}</span>
        </div>

        <div className="catalog-product-card__content">
          <h3>{product.name}</h3>
          <p>{product.profile}</p>
        </div>

        <div className="catalog-product-card__footer">
          <div>
            <span>{product.weight}</span>
            <strong>{formatCurrency(product.price)}</strong>
          </div>
          <a href="#/product">{ctaLabel}</a>
        </div>
      </div>
    </article>
  );
}
