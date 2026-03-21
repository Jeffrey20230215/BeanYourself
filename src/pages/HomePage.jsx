export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="layout-container hero-section__inner">
          <p className="section-label">Merged Layout</p>
          <h1>豆自己。</h1>
          <p className="hero-section__text">
            在香氣中，找到最純粹的自己。
          </p>
          <div className="hero-section__actions">
            <a className="button-primary" href="#/product">
              查看商品詳情
            </a>
            <a className="button-secondary" href="#/#articles">
              前往文章區塊
            </a>
          </div>
        </div>
      </section>

      <section className="layout-container intro-section" id="story">
        <div>
          <p className="section-label">Brand Story</p>
          <h2>品牌故事、文章入口與商品頁導覽，現在都在同一套版型語言裡。</h2>
        </div>
        <p>
          我先把分支中最重要的 UI 骨架合併成一個能正常跑的 React 專案，這樣後續修圖片路徑、補真實資料時不會再牽動整體結構。
        </p>
      </section>

      <section className="layout-container article-section" id="articles">
        <div className="article-section__header">
          <div>
            <p className="section-label">Section 5</p>
            <h2>
              與咖啡的
              <span>對話</span>
            </h2>
          </div>
          <p>
            揭開風味秘密，讓每一次沖煮都成為專屬你的療癒時刻。
          </p>
        </div>

        <div className="article-grid">
          {[
            '咖啡豆保存密技，讓風味維持更久',
            '手沖新手也能快速上手的三個關鍵',
            '日曬、水洗與焙度，如何挑到喜歡的味道',
          ].map((title, index) => (
            <article className="article-card" key={title}>
              <div className="article-card__meta">
                <span>{['保存密技', '新手教學', '選購指南'][index]}</span>
                <span>2025/09/10</span>
              </div>
              <div className="article-card__image" />
              <h3>{title}</h3>
              <p>咖啡豆要放冰箱嗎？教你 30 天都像剛烘好的保存密技</p>
              <a href="#/">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <section className="layout-container quiz-section" id="quiz">
        <div className="quiz-card">
          <p className="section-label">Future Section</p>
          <h2>人格測驗入口已預留。</h2>
          <p>現在先保留資訊架構，等功能分支完成後可以直接掛進來。</p>
        </div>
      </section>
    </>
  );
}
