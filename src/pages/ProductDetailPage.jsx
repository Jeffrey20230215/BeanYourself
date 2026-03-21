import './ProductDetailPage.scss';

const flavorTags = ['黑莓果醬', '草莓', '玫瑰'];
const personalityScores = [
  { label: 'BAP / 風味獵人', score: 3 },
  { label: 'BAM / 味覺精煉師', score: 2 },
  { label: 'BSP / 純粹主義者', score: 2 },
];
const brewGuide = [
  { label: '水溫', value: '90-92°C', description: '保留乾淨花果香與甜感。' },
  { label: '粉水比', value: '1:15', description: '風味扎實，尾韻不會太厚。' },
  { label: '悶蒸', value: '30 秒', description: '讓香氣更完整地展開。' },
];
const relatedProducts = [
  { name: '衣索比亞 水洗花宴', profile: '白花 / 柑橘 / 蜂蜜', price: 680 },
  { name: '巴拿馬 日曬晚風', profile: '熱帶水果 / 紅糖 / 酒香', price: 820 },
  { name: '哥倫比亞 甜橙山谷', profile: '橙花 / 可可 / 黃糖', price: 720 },
];

function BeanScore({ score }) {
  return (
    <span className="bean-score" aria-hidden="true">
      {Array.from({ length: 3 }).map((_, index) => (
        <span key={index} className={index < score ? 'is-filled' : ''} />
      ))}
    </span>
  );
}

export default function ProductDetailPage() {
  return (
    <div className="product-page">
      <section className="layout-container product-hero">
        <div className="product-hero__gallery">
          <div className="product-hero__thumbs">
            <button type="button" className="is-active" aria-label="商品縮圖一" />
            <button type="button" aria-label="商品縮圖二" />
            <button type="button" aria-label="商品縮圖三" />
            <button type="button" aria-label="商品縮圖四" />
          </div>
          <div className="product-hero__image">Product Image</div>
        </div>

        <div className="product-hero__content">
          <p className="product-hero__crumbs">所有商品 / 哥斯大黎加 音樂家系列</p>
          <p className="section-label">Product Detail</p>
          <h1>哥斯大黎加 音樂家系列</h1>

          <div className="product-hero__tags">
            {flavorTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <p className="product-hero__description">
            先把 Product detail branch 的核心資訊整理成穩定版型，包含主視覺、風味標籤、人格推薦、規格選項與購買區。
          </p>

          <div className="product-hero__scores">
            <p>咖啡人格推薦度</p>
            <div className="product-hero__score-list">
              {personalityScores.map((item) => (
                <div key={item.label} className="product-hero__score-item">
                  <BeanScore score={item.score} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="product-hero__options">
            <div>
              <p>重量規格</p>
              <div className="option-row">
                <button type="button" className="is-active">
                  100G
                </button>
                <button type="button">半磅</button>
                <button type="button">一磅</button>
              </div>
            </div>

            <div>
              <p>研磨度</p>
              <div className="option-row">
                <button type="button" className="is-active">
                  原豆
                </button>
                <button type="button">研磨</button>
              </div>
            </div>
          </div>

          <div className="product-hero__purchase">
            <div className="quantity-box">
              <button type="button">-</button>
              <span>1</span>
              <button type="button">+</button>
            </div>
            <button type="button" className="add-to-cart-button">
              Add to cart | NTD$ 750
            </button>
          </div>
        </div>
      </section>

      <section className="layout-container flavor-section">
        <div className="flavor-section__content">
          <p className="section-label">Flavour Analysis</p>
          <h2>風味解析</h2>
          <p className="flavor-section__text">
            這裡接住 Product detail branch 的第二段內容，先用文字與版型完整呈現，圖片與雷達圖之後再補回。
          </p>

          <div className="flavor-section__facts">
            <div>
              <span>處理法</span>
              <strong>葡萄乾蜜處理</strong>
            </div>
            <div>
              <span>烘焙</span>
              <strong>淺中焙</strong>
            </div>
            <div>
              <span>產地</span>
              <strong>哥斯大黎加</strong>
            </div>
          </div>

          <div className="flavor-section__notes">
            <div className="flavor-section__radar">Radar Placeholder</div>
            <ul>
              {flavorTags.map((tag) => (
                <li key={tag}>
                  <div className="flavor-section__icon" />
                  <div>
                    <strong>{tag.toUpperCase()}</strong>
                    <span>{tag}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flavor-section__story">
          <div className="flavor-section__story-image" />
          <div className="flavor-section__overlay">
            <div className="timeline-item">
              <h3>FRONT / 前段</h3>
              <p>以明亮花香與果酸開場，先建立高辨識度的入口印象。</p>
            </div>
            <div className="timeline-item">
              <h3>MIDDLE / 中段</h3>
              <p>甜感上升、結構變得更圓潤，風味層次也開始堆疊。</p>
            </div>
            <div className="timeline-item">
              <h3>FINISH / 尾韻</h3>
              <p>尾韻乾淨細緻，留下果甜與茶感的延伸。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container support-section">
        <article className="support-card">
          <p className="section-label">Brew Guide</p>
          <h2>沖煮建議</h2>
          <div className="support-list">
            {brewGuide.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="support-card">
          <p className="section-label">Related Products</p>
          <h2>風味推薦</h2>
          <div className="support-list">
            {relatedProducts.map((item) => (
              <div key={item.name} className="support-list__row">
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.profile}</p>
                </div>
                <span>NTD$ {item.price}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
