import Footer from '../components/Footer';
import HomeBrandStorySection from '../components/home/HomeBrandStorySection';
import HomeFeaturedBeansSection from '../components/home/HomeFeaturedBeansSection';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomePuritySection from '../components/home/HomePuritySection';
import HomeReviewsSection from '../components/home/HomeReviewsSection';
import './HomePage.scss';

export default function HomePage() {
  return (
    <div className="home-page">
      <HomeHeroSection />
      <HomePuritySection />
      <div className="home-divider" aria-hidden="true" />
      <HomeFeaturedBeansSection />
      <div className="home-divider" aria-hidden="true" />
      <HomeReviewsSection />
      <div className="home-divider" aria-hidden="true" />
      <HomeBrandStorySection />
      <div className="home-divider" aria-hidden="true" />

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

      <Footer />
    </div>
  );
}
