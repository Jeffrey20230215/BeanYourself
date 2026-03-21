import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import HomeBrandStorySection from '../components/home/HomeBrandStorySection';
import HomeFeaturedBeansSection from '../components/home/HomeFeaturedBeansSection';
import HomeHeroSection from '../components/home/HomeHeroSection';
import HomePuritySection from '../components/home/HomePuritySection';
import HomeReviewsSection from '../components/home/HomeReviewsSection';
import './HomePage.scss';

export default function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchArticles() {
      try {
        const response = await fetch('https://ec-course-api.hexschool.io/v2/api/angela-hex/articles');
        const data = await response.json();

        if (isMounted) {
          setArticles(data?.articles || []);
        }
      } catch (error) {
        if (isMounted) {
          setArticles([]);
        }
      }
    }

    fetchArticles();

    return () => {
      isMounted = false;
    };
  }, []);

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
          {articles.slice(0, 3).map((article, index) => (
            <article className="article-card" key={article.id || article.title || index}>
              <div className="article-card__meta">
                <span>{article.tag?.[0] || ''}</span>
                <span>2025/09/10</span>
              </div>
              <div className="article-card__image" />
              <h3>{article.title || ''}</h3>
              <p>{article.description || ''}</p>
              <a href="#/">Read More</a>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
