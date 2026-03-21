import PlaceholderImage from './PlaceholderImage';

export default function HomeBrandStorySection() {
  return (
    <section className="home-brand-story">
      <div className="layout-container home-brand-story__inner">
        <div className="home-brand-story__image">
          <PlaceholderImage label="Brand Story Image" tone="warm" />
        </div>

        <div className="home-brand-story__content">
          <div className="home-brand-story__heading">
            <p className="section-label">BE YOUR OWN BARISTA</p>
            <h2>
              做自己，
              <br />
              從一杯咖啡開始。
            </h2>
          </div>

          <blockquote>不迎合誰的口味，只為討好你自己。</blockquote>

          <div className="home-brand-story__body">
            <p>
              &quot;Bean Yourself&quot; 取自 &quot;Be Yourself&quot;。我們不教育你該喝什麼，
              而是陪伴你探索自己真正喜歡的味道。無論是果汁感明亮的淺焙，或是可可感更深的深焙，
              喜歡，就是最好的起點。
            </p>

            <div className="home-brand-story__signature">
              <span />
              <em>Bean Yourself.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
