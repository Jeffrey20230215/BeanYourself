import { useState } from 'react';
import './ProductMain.scss';

// 引入 assets 資源
import bean1 from './assets/bean1.svg';  
import bean2 from './assets/bean2.jpg';  
import iconBeanFull from './assets/icon-bean.svg';  
import iconBeanEmpty from './assets/icon-bean2.svg'; 

function ProductMain() {
  const [mainImg, setMainImg] = useState(bean1);
  const [quantity, setQuantity] = useState(1);
  const [activeSize, setActiveSize] = useState('100G');
  const [activeGrind, setActiveGrind] = useState('原豆');

  const thumbnails = [bean1, bean2, bean2, bean2];

  const renderBeans = (score) => (
    <span className="bean-icons d-flex gap-1">
      {[...Array(3)].map((_, i) => (
        <img key={i} src={i < score ? iconBeanFull : iconBeanEmpty} className="bean-svg" alt="bean" />
      ))}
    </span>
  );

  return (
    <div className="product-main-section container-fluid">
      <div className="custom-container">
        {/* 麵包屑導航 */}
        <nav className="breadcrumb-nav mb-4">所有商品 ＞ 哥斯大黎加 音樂家系列</nav>

        <main className="row gx-5 gy-4 align-items-start">
          {/* 左側：圖片展示區域 */}
          <section className="col-lg-6 d-flex gap-3 image-gallery">
            <div className="thumbnail-group d-flex flex-column gap-2">
              {thumbnails.map((img, i) => (
                <div 
                  key={i} 
                  className={`thumb-item ${mainImg === img ? 'active' : ''}`} 
                  onClick={() => setMainImg(img)}
                >
                  <img src={img} alt="縮圖" className="img-fluid" />
                </div>
              ))}
            </div>
            <div className="main-image-wrapper flex-grow-1">
              <img src={mainImg} alt="商品主圖" className="main-img" />
            </div>
          </section>

          {/* 右側：商品資訊區域 */}
          <section className="col-lg-6 product-info text-start">
            <h1 className="product-title mb-3">哥斯大黎加 音樂家系列</h1>
            
            <div className="flavor-tags d-flex">
              {['黑莓果醬', '草莓', '玫瑰'].map(tag => (
                <span key={tag} className="flavor-tag">{tag}</span>
              ))}
            </div>

            <p className="product-description">
              如果你喜歡「草莓果醬」般的濃郁甜香，這支絕對會讓你驚艷。獨特的葡萄乾蜜處理，讓它喝起來不像咖啡，更像是一杯香氣奔放的花果茶，甜度極高。
            </p>

            <div className="personality-recommend mb-5">
              <p className="selection-label">咖啡人格推薦度</p>
              <div className="recommend-grid d-flex flex-wrap">
                {/* 修正這裡的 className 拼字 */}
                <div className="recommend-item d-flex align-items-center">
                  {renderBeans(3)}
                  <span className="recommend-label">BAP / 風味獵人</span>
                </div>
                
                <div className="recommend-item d-flex align-items-center">
                  {renderBeans(2)}
                  <span className="recommend-label">BAM / 味覺精煉師</span>
                </div>
                
                <div className="recommend-item d-flex align-items-center">
                  {renderBeans(2)}
                  <span className="recommend-label">BSP / 純粹主義者</span>
                </div>
              </div>
            </div>

            {/* 重量與研磨選擇 */}
            <div className="selection-group">
              <label className="selection-label">重量規格 ⓘ</label>
              <div className="options d-flex gap-2">
                {['100G', '半磅', '一磅'].map(s => (
                  <button key={s} className={`opt-btn btn ${activeSize === s ? 'active' : ''}`} onClick={() => setActiveSize(s)}>{s}</button>
                ))}
              </div>
            </div>

            <div className="selection-group">
              <label className="selection-label">研磨度</label>
              <div className="options d-flex gap-2">
                {['原豆', '研磨'].map(g => (
                  <button key={g} className={`opt-btn btn ${activeGrind === g ? 'active' : ''}`} onClick={() => setActiveGrind(g)}>{g}</button>
                ))}
              </div>
            </div>

            {/* 購買按鈕區 */}
            <div className="purchase-footer d-flex gap-3">
              <div className="quantity-selector d-flex align-items-center border bg-white">
                <button className="btn px-3" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <input type="text" className="form-control border-0 text-center fw-bold" value={quantity} readOnly style={{ width: '60px' }} />
                <button className="btn px-3" onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart-btn btn flex-grow-1 text-uppercase">
                ADD TO CART | NTD$ {750 * quantity}
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductMain;