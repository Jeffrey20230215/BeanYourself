import './FlavorAnalysis.scss';
// 引入資產
import radarChart from './assets/radar.svg';
import grapeImg from './assets/grape.jpg';
import iconBlackberry from './assets/flavour icon.svg';
import iconStrawberry from './assets/flavour icon2.svg';
import iconRose from './assets/flavour icon3.svg';

function FlavorAnalysis() {
  return (
    <section className="flavor-analysis-section">
      <div className="custom-container">
        <div className="row g-0">
          
          {/* 左側：風味資訊與雷達圖 */}
          <div className="col-lg-6 analysis-left">
            <header className="analysis-header">
              <span className="subtitle">FLAVOUR ANALYSIS</span>
              <h2 className="title">風味解析</h2>
              <p className="description">
                Chelbesa 所出產的水洗咖啡，以極高的潔淨度、精緻的香氣輪廓與層次分明的風味結構聞名，表現深邃且富有平衡感。
              </p>
            </header>

            <div className="info-grid d-flex flex-wrap">
              <div className="info-item">
                <label className="info-label">處理法</label>
                <span className="info-value">葡萄乾蜜處理</span>
              </div>
              <div className="info-item">
                <label className="info-label">烘焙</label>
                <span className="info-value">淺中焙</span>
              </div>
              <div className="info-item">
                <label className="info-label">產地</label>
                <span className="info-value">哥斯大黎加</span>
              </div>
            </div>

            <div className="radar-group d-flex align-items-center">
              <div className="radar-img-wrapper">
                <img src={radarChart} alt="雷達圖" className="img-fluid" />
              </div>
              <ul className="flavour-list list-unstyled">
                <li>
                  <img src={iconBlackberry} alt="icon" />
                  <div><strong>BLACKBERRY JAM</strong><small>黑莓果醬</small></div>
                </li>
                <li>
                  <img src={iconStrawberry} alt="icon" />
                  <div><strong>STRAWBERRY</strong><small>草莓</small></div>
                </li>
                <li>
                  <img src={iconRose} alt="icon" />
                  <div><strong>ROSE</strong><small>玫瑰</small></div>
                </li>
              </ul>
            </div>
          </div>

          {/* 右側：時間軸背景大圖 */}
          <div className="col-lg-6 analysis-right">
            <div className="image-card position-relative">
              <img src={grapeImg} className="bg-image" alt="coffee cherry" />
              <div className="card-overlay position-absolute top-0 start-0 w-100 h-100">
                <div className="timeline-group">
                  <div className="note-item">
                    <h5>FRONT / 前段</h5>
                    <p>以麝香葡萄與白花香開場，帶出覆盆子與杏桃的果酸。</p>
                  </div>
                  <div className="note-item">
                    <h5>MIDDLE / 中段</h5>
                    <p>轉向蜜蘋果的圓潤甜感，果香豐滿且層次分明。</p>
                  </div>
                  <div className="note-item">
                    <h5>FINISH / 尾韻</h5>
                    <p>太妃糖蘋果與紅茶般滑順質地，甜感持久、餘韻細緻。</p>
                  </div>
                </div>
                <div className="pro-tips">
                  <strong>風味點評</strong>
                  <p>經典耶加雪菲水洗作品，展現高海拔與精緻處理的品質。</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FlavorAnalysis;