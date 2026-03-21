import PlaceholderImage from './PlaceholderImage';

const selectedShots = [
  { id: 'shot-1', label: 'Selected 01', note: '佛手柑 / 水蜜桃', tone: 'berry' },
  { id: 'shot-2', label: 'Selected 02', note: '紅石榴 / 葡萄', tone: 'warm' },
  { id: 'shot-3', label: 'Selected 03', note: '奶油 / 夏威夷豆', tone: 'light' },
  { id: 'shot-4', label: 'Selected 04', note: '草莓 / 黑蜂蜜', tone: 'berry' },
];

const beanFacts = [
  { label: '產地', value: '衣索比亞 古吉' },
  { label: '處理法', value: '水洗處理' },
  { label: '烘焙', value: '淺中焙' },
  { label: '風味口味', value: '花香、果汁感、乾淨尾韻' },
];

const personalities = [
  'BSP / 純粹主義者',
  'BAP / 風味獵人',
];

const weights = ['半磅', '100G', '一磅'];

export default function HomeFeaturedBeansSection() {
  return (
    <section className="home-selected">
      <div className="layout-container home-selected__header">
        <h2>豆自己・嚴選單品</h2>
        <p>用更輕盈的資訊排列，讓首頁也能帶出產品故事、風味輪廓與購買動機。</p>
      </div>

      <div className="layout-container home-selected__content">
        <div className="home-selected__gallery">
          <div className="home-selected__mosaic">
            {selectedShots.map((item) => (
              <div className="home-selected__tile" key={item.id}>
                <PlaceholderImage
                  className="home-selected__tile-image"
                  label={item.label}
                  tone={item.tone}
                />
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          <div className="home-selected__feature">
            <PlaceholderImage label="Selected Hero Bean" tone="dark" />
          </div>
        </div>

        <article className="home-selected__detail">
          <div className="home-selected__tags">
            <span>茉莉花</span>
            <span>百香果</span>
          </div>

          <h3>衣索比亞瑰夏村競標批次</h3>
          <p className="home-selected__desc">
            用 mock 內容先保留商品故事與資訊密度，之後直接替換成真實商品資料即可。
          </p>

          <div className="home-selected__facts">
            {beanFacts.map((fact) => (
              <div key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            ))}
          </div>

          <div className="home-selected__personality">
            <p>咖啡人格推薦度</p>
            {personalities.map((label) => (
              <div className="home-selected__score" key={label}>
                <div className="home-selected__beans" aria-hidden="true">
                  <span className="is-filled" />
                  <span className="is-filled" />
                  <span className="is-filled" />
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="home-selected__weights">
            <p>重量規格</p>
            <div>
              {weights.map((weight, index) => (
                <button
                  type="button"
                  className={index === 0 ? 'is-active' : ''}
                  key={weight}
                >
                  {weight}
                </button>
              ))}
            </div>
          </div>

          <div className="home-selected__purchase">
            <div>
              <span>NTD</span>
              <strong>$1200</strong>
            </div>
            <a href="#/product">查看商品細節</a>
          </div>
        </article>
      </div>

      <div className="layout-container home-selected__footer-link">
        <a href="#/product">View all collections</a>
      </div>
    </section>
  );
}
