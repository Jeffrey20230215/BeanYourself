import './ProductDetailPage.scss';

const galleryImages = ['Front Pack', 'Angle Shot', 'Brewing Scene', 'Detail Shot'];

const flavorTags = ['莓果', '花香', '紅茶'];
const personalityScores = [
  { label: 'BSP / 純粹主義者', score: 2 },
  { label: 'BAP / 風味獵人', score: 3 },
  { label: 'BAM / 味覺精煉師', score: 2 },
];

const flavorFacts = [
  { label: '產地', value: '衣索比亞 古吉' },
  { label: '處理法', value: '水洗處理' },
  { label: '烘焙', value: '淺中焙' },
];

const flavorNotes = [
  { en: 'BERRY', ch: '莓果', description: '帶有成熟莓果酸甜，入口明亮卻不尖銳。' },
  { en: 'FLORAL', ch: '花香', description: '中段浮現乾淨白花香，讓層次更輕盈。' },
  { en: 'TEA', ch: '紅茶', description: '尾韻像紅茶般細緻延伸，留下舒服乾淨感。' },
];

const tastingTimeline = [
  {
    title: '前段 / FRONT',
    description: '一入口先感受到白花與莓果調性，香氣乾淨且輪廓鮮明。',
  },
  {
    title: '中段 / MIDDLE',
    description: '甜感逐漸上升，果汁感更完整，整體口感圓潤而有彈性。',
  },
  {
    title: '尾韻 / FINISH',
    description: '最後以紅茶般的收尾延伸，甜感停留得比預期更久。',
  },
];

const brewGuide = [
  { label: '水溫', value: '91°C' },
  { label: '粉量', value: '15g' },
  { label: '粉水比', value: '1:15' },
  { label: '時間', value: '2:20' },
];

const brewSteps = [
  {
    step: '01',
    title: '悶蒸展香',
    description: '先注入少量熱水悶蒸 30 秒，讓乾香與甜感先被喚醒。',
  },
  {
    step: '02',
    title: '穩定注水',
    description: '以小水柱分段注水，避免擾動過強，保留乾淨層次。',
  },
  {
    step: '03',
    title: '控制尾段',
    description: '尾段流速放慢，避免萃出過多木質感與雜苦味。',
  },
  {
    step: '04',
    title: '稍微放涼再喝',
    description: '降到微溫時甜感更明顯，紅茶尾韻也會更完整。',
  },
];

const reviewItems = [
  {
    id: 'review-1',
    rating: 4,
    meta: '半磅．研磨',
    body:
      '沒在誇張，一磨開真的是滿滿的草莓果醬味！入口時那股發酵酒香很迷人，尾韻甜感停得很久。',
    author: 'Jason',
    date: '2025/10/12',
  },
  {
    id: 'review-2',
    rating: 5,
    meta: '100G．原豆',
    body:
      '完全顛覆我對淺焙的想像，酸是很舒服的莓果酸甜，放涼後更順口，連平常不喝咖啡的人也能接受。',
    author: 'Emily',
    date: '2025/12/15',
  },
  {
    id: 'review-3',
    rating: 5,
    meta: '一磅．研磨',
    body:
      '做成拿鐵也很有記憶點，奶感不會把香氣壓掉，反而讓草莓甜香更明顯，超適合想找特色豆的人。',
    author: '小雨',
    date: '2025/12/18',
  },
];

const relatedProducts = [
  {
    name: '哥斯大黎加 音樂家系列',
    profile: '柑橘 / 蜂蜜 / 茶感',
    price: 750,
    image: 'Costa Rica',
  },
  {
    name: '哥倫比亞 粉紅波旁',
    profile: '草莓 / 葡萄 / 黑糖',
    price: 850,
    image: 'Pink Bourbon',
  },
  {
    name: '衣索比亞 花宴水洗',
    profile: '白花 / 柚香 / 糖蜜',
    price: 720,
    image: 'Floral Wash',
  },
  {
    name: '豆自己 海德曼人民方',
    profile: '可可 / 堅果 / 奶油',
    price: 380,
    image: 'House Blend',
  },
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

function PlaceholderBlock({ label, className = '' }) {
  return <div className={`product-placeholder ${className}`.trim()}>{label}</div>;
}

function ProductReviewCard({ item }) {
  return (
    <article className="product-review-card">
      <div className="product-review-card__content">
        <div className="product-review-card__header">
          <div className="product-review-card__stars" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={index < item.rating ? 'is-filled' : ''} />
            ))}
          </div>
          <span>{item.meta}</span>
        </div>

        <p>{item.body}</p>
      </div>

      <footer className="product-review-card__footer">
        <div className="product-review-card__avatar" aria-hidden="true">
          {item.author.slice(0, 1)}
        </div>
        <div>
          <strong>{item.author}</strong>
          <span>{item.date}</span>
        </div>
      </footer>
    </article>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-recommendation-card">
      <PlaceholderBlock
        label={product.image}
        className="product-recommendation-card__image"
      />
      <div className="product-recommendation-card__body">
        <div>
          <h3>{product.name}</h3>
          <p>{product.profile}</p>
        </div>
        <div className="product-recommendation-card__footer">
          <strong>NTD$ {product.price}</strong>
          <a href="#/product">View</a>
        </div>
      </div>
    </article>
  );
}

export default function ProductDetailPage() {
  return (
    <div className="product-page">
      <section className="layout-container product-hero">
        <div className="product-hero__gallery">
          <div className="product-hero__thumbs">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                className={index === 0 ? 'is-active' : ''}
                aria-label={`商品縮圖 ${index + 1}`}
                key={image}
              >
                <PlaceholderBlock label={image} />
              </button>
            ))}
          </div>

          <PlaceholderBlock className="product-hero__image" label="Main Product Image" />
        </div>

        <div className="product-hero__content">
          <p className="product-hero__crumbs">所有商品 / 衣索比亞瑰夏村競標批次</p>

          <div className="product-hero__header">
            <h1>衣索比亞瑰夏村競標批次</h1>

            <div className="product-hero__tags">
              {flavorTags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p className="product-hero__description">
              明亮莓果酸甜、白花香氣與細緻紅茶尾韻交錯，保留高潔淨度與柔和甜感。
            </p>
          </div>

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
                  半磅
                </button>
                <button type="button">100G</button>
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
              Add to cart | NTD$ 1200
            </button>
          </div>
        </div>
      </section>

      <section className="layout-container flavor-section">
        <div className="flavor-section__content">
          <div className="flavor-section__heading">
            <p className="section-label">Flavour Profile</p>
            <h2>風味解析</h2>
          </div>

          <p className="flavor-section__text">
            這支豆子的魅力在於乾淨明亮的前段酸甜，以及放涼後逐步展開的紅茶尾韻。
          </p>

          <div className="flavor-section__facts">
            {flavorFacts.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>

          <div className="flavor-section__notes">
            <div className="flavor-section__radar">
              <PlaceholderBlock label="Radar Chart" />
            </div>

            <ul>
              {flavorNotes.map((note) => (
                <li key={note.en}>
                  <div className="flavor-section__icon" />
                  <div>
                    <strong>{note.en}</strong>
                    <span>{note.ch}</span>
                    <p>{note.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flavor-section__story">
          <PlaceholderBlock className="flavor-section__story-image" label="Brewing Mood Image" />
          <div className="flavor-section__overlay">
            {tastingTimeline.map((item) => (
              <div className="timeline-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="layout-container support-section">
        <div className="support-section__header">
          <div>
            <p className="section-label">Brewing Guide</p>
            <h2>沖煮建議</h2>
          </div>
          <p>用簡潔步驟保留設計稿的教學層次，之後可直接換成 API 或 CMS 內容。</p>
        </div>

        <div className="support-section__guide">
          <PlaceholderBlock className="support-section__guide-image" label="Brewing Background" />

          <div className="support-section__guide-overlay">
            <div className="support-section__guide-specs">
              {brewGuide.map((item) => (
                <div key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="support-section__steps">
              {brewSteps.map((item) => (
                <article key={item.step} className="support-step">
                  <span>{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="layout-container product-reviews-section">
        <div className="product-reviews-section__header">
          <div>
            <h2>
              咖啡人格
              <span>的味蕾共鳴</span>
            </h2>
          </div>
          <p>聽聽那些和你頻率相同的人，如何在每一口酸甜中找到驚喜。</p>
        </div>

        <div className="product-reviews-section__grid">
          {reviewItems.map((item) => (
            <ProductReviewCard key={item.id} item={item} />
          ))}
        </div>

        <div className="product-reviews-section__link">
          <a href="#/">View all reviews</a>
        </div>
      </section>

      <section className="layout-container product-recommendations-section">
        <div className="product-recommendations-section__header">
          <div>
            <h2>
              靈魂契合
              <span>的風味推薦</span>
            </h2>
          </div>
          <p>延續購物車推薦區塊的卡片邏輯，讓產品 detail 與 cart 體驗更一致。</p>
        </div>

        <div className="product-recommendations-section__grid">
          {relatedProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="product-recommendations-section__link">
          <a href="#/product">View all collections</a>
        </div>
      </section>
    </div>
  );
}
