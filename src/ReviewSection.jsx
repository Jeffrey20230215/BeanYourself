import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReviewSection.scss';

import markAvatar from './assets/Mark.jpg'; 
import sarahAvatar from './assets/Sarah.jpg'; 
import alexAvatar from './assets/Alex.jpg';
import starIcon from './assets/star.svg'; 
// 請確保資產資料夾中有 star-empty.svg
import starEmptyIcon from './assets/star-empty.svg'; 

const reviews = [
  {
    id: 1,
    title: "伊索比亞 耶加雪菲",
    starCount: 4, 
    category: "半磅・研磨",
    content: "收到時烘焙日期很新鮮，手沖開展時粉膨脹得很漂亮！喝起來帶有柳橙與茶般的清爽，完全沒有雜味。",
    author: "Mark",
    date: "2024/11/15",
    avatar: markAvatar
  },
  {
    id: 2,
    title: "哥斯大黎加 音樂家系列",
    starCount: 5,
    category: "半磅・研磨",
    content: "豆表保留了一些蜜處理蜜糖色的特色。入口後的甜感非常明顯，冷卻後喝起來跟果汁一樣，層次很豐富。",
    author: "Sarah",
    date: "2024/12/01",
    avatar: sarahAvatar
  },
  {
    id: 3,
    title: "經典義式配方豆",
    starCount: 5,
    category: "半磅・研磨",
    content: "非常像 Espresso，濃流果約的油脂，非常溫厚金黃。如中烘焙或深職職，可與堅果持久，不愧是本店。",
    author: "Alex",
    date: "2024/10/20",
    avatar: alexAvatar
  }
];

// 星星元件：尺寸與間距由 SCSS 控制
const StarRating = ({ count }) => {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <img 
          key={i} 
          src={i < count ? starIcon : starEmptyIcon} 
          alt="star" 
        />
      ))}
    </div>
  );
};

export default function ReviewSection() {
  return (
    <section className="review-section">
      <div className="container">
        
        {/* 1. 標題區塊：使用 heading-row 配合 SCSS 的 space-between */}
        <div className="heading-row mb-5">
          <div className="main-title-group">
            <h2 className="main-title">來自豆友</h2>
            <h2 className="main-title">的<span className="highlight">無雷</span>認證</h2>
          </div>
          <p className="sub-title">
            跟著口碑買準沒錯，看看別人在這裡，遇見了哪些讓人心動的風味故事
          </p>
        </div>

        {/* 2. 卡片列表 */}
        <div className="row">
          {reviews.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="review-card">
                {/* 產品名 (Gap: 4px 到星星) */}
                <h5 className="card-title">{item.title}</h5>
                
                {/* 星星評分 (Gap: 4px 到分類) */}
                <StarRating count={item.starCount} />
                
                {/* 分類標籤 (Gap: 16px 到內容) */}
                <div className="category">{item.category}</div>                
                
                {/* 內容區塊 (Gap: 32px 到頭像) */}
                <p className="content">{item.content}</p>                
                
                {/* 底部用户信息：由 SCSS 控制 margin-top: 32px */}
                <div className="user-info">
                  <img src={item.avatar} alt={item.author} className="avatar" />
                  <div>
                    <div className="author-name">{item.author}</div>
                    <div className="date">{item.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. View all 連結：保持 Bootstrap text-end 排版 */}
        <div className="text-end mt-4">
          <a href="#" className="view-all-link">
            View all reviews
          </a>
        </div>
      </div>
    </section>
  );
}