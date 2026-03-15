import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReviewSection.scss'; // 引入剛剛建立的樣式表

import markAvatar from './assets/Mark.jpg'; 
import sarahAvatar from './assets/Sarah.jpg'; 
import alexAvatar from './assets/Alex.jpg';

const reviews = [
  {
    id: 1,
    title: "伊索比亞 耶加雪菲",
    stars: "★★★★☆",
    category: "半磅・研磨",
    content: "收到時烘焙日期很新鮮，手沖開展時粉膨脹得很漂亮！喝起來帶有柳橙與茶般的清爽，完全沒有雜味。",
    author: "Mark",
    date: "2024/11/15",
    avatar: markAvatar
  },
  {
    id: 2,
    title: "哥斯大黎加 音樂家系列",
    stars: "★★★★★",
    category: "半磅・研磨",
    content: "豆表保留了一些蜜處理蜜糖色的特色。入口後的甜感非常明顯，冷卻後喝起來跟果汁一樣，層次很豐富。",
    author: "Sarah",
    date: "2024/12/01",
    avatar: sarahAvatar
  },
  {
    id: 3,
    title: "經典義式配方豆",
    stars: "★★★★★",
    category: "半磅・研磨",
    content: "非常像 Espresso，濃流果約的油脂，非常溫厚金黃。如中烘焙或深職職，可與堅果持久，不愧是本店。",
    author: "Alex",
    date: "2024/10/20",
    avatar: alexAvatar
  }
];

export default function ReviewSection() {
  return (
    <section className="review-section">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col-md-5">
            <h2 className="main-title">來自豆友</h2>
            <h2 className="main-title">的無雷認證</h2>
          </div>
          <div className="col-md-7 text-md-end pb-2">
            <p className="sub-title">
              跟著口碑買準沒錯，看看別人在這裡，遇見了哪些讓人心動的風味故事
            </p>
          </div>
        </div>

        <div className="row">
          {reviews.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="review-card">
                <h5 className="card-title">{item.title}</h5>
                <div className="stars">{item.stars}</div>
                <div className="category">{item.category}</div>                
                <p className="content">{item.content}</p>                
                
                <div className="d-flex align-items-center user-info">
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

        <div className="text-end mt-5">
          <a href="#" className="view-all-link">
            View all reviews
          </a>
        </div>
      </div>
    </section>
  );
}