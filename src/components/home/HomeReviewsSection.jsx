const reviews = [
  {
    product: '衣索比亞 耶加雪菲',
    review:
      '收到時烘焙日期很新鮮，手沖開展時粉膨脹得很漂亮，整體乾淨又有花果香。',
    author: 'Mark',
    date: '2024/11/15',
  },
  {
    product: '哥斯大黎加 音樂家系列',
    review:
      '包裝設計和風味描述都很直覺，第一次買單品豆也不會有壓力，入口很順。',
    author: 'Wen',
    date: '2024/12/02',
  },
  {
    product: '豆自己 海德曼人民方',
    review:
      '平常上班前沖一杯剛剛好，厚度夠但不會太重，當作日常豆很安心。',
    author: 'Ariel',
    date: '2025/01/09',
  },
];

function ReviewStars() {
  return (
    <div className="home-review__stars" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index === 4 ? 'is-muted' : ''} />
      ))}
    </div>
  );
}

export default function HomeReviewsSection() {
  return (
    <section className="home-reviews">
      <div className="layout-container home-reviews__header">
        <h2>
          來自豆友
          <br />
          的無雷認證
        </h2>
        <p>精簡成三張高辨識度評價卡，保留設計稿裡的留白、邊線與閱讀節奏。</p>
      </div>

      <div className="layout-container home-reviews__grid">
        {reviews.map((item) => (
          <article className="home-review" key={item.author}>
            <div className="home-review__header">
              <strong>{item.product}</strong>
              <ReviewStars />
              <span>半磅．研磨</span>
            </div>

            <p>{item.review}</p>

            <footer className="home-review__footer">
              <div className="home-review__avatar" aria-hidden="true">
                {item.author.slice(0, 1)}
              </div>
              <div>
                <strong>{item.author}</strong>
                <span>{item.date}</span>
              </div>
            </footer>
          </article>
        ))}
      </div>

      <div className="layout-container home-reviews__link">
        <a href="#/product">View all reviews</a>
      </div>
    </section>
  );
}
