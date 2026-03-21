import PlaceholderImage from './PlaceholderImage';

const purityCards = [
  {
    title: '喝咖啡不一定要懂很多？',
    description: '從香氣、酸甜感與口感出發，先找到自己自然喜歡的方向。',
  },
  {
    title: '就算不知道產區也沒關係',
    description: '把選豆過程變簡單，讓風味關鍵字成為你最快的入口。',
  },
  {
    title: '選豆前先想像你的日常',
    description: '晨間提神、午後放鬆或慢慢手沖，需求不同，豆子也會不同。',
  },
  {
    title: '豆自己幫你縮小選擇範圍',
    description: '用更直覺的方式推薦風味和人格取向，減少選擇焦慮。',
  },
];

export default function HomePuritySection() {
  return (
    <section className="home-purity">
      <div className="layout-container home-purity__inner">
        <div className="home-purity__intro">
          <h2>
            找回
            <br />
            喝咖啡的
            <br />
            純粹。
          </h2>
          <p>
            我們不把喝咖啡變成考試，而是把挑豆、沖煮、理解風味這些事，
            整理成你可以輕鬆靠近的日常步驟。
          </p>
          <a className="home-purity__button" href="#/#quiz">
            立即探索
          </a>
        </div>

        <div className="home-purity__grid">
          {purityCards.map((card, index) => (
            <article className="home-purity-card" key={card.title}>
              <PlaceholderImage
                className="home-purity-card__image"
                label={`Guide ${index + 1}`}
                tone={index % 2 === 0 ? 'light' : 'warm'}
              />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
