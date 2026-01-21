import React from "react";
import "./mainLogo.css"; // 引入專屬樣式

const BeanYourselfLogo = ({ className = "" }) => {
  return (
    <div className={`by-logo-wrapper ${className}`}>
      {/* 左側黑色方塊 B.Y. */}
      <div className="by-logo-box">B.Y.</div>

      {/* 右側文字區域 */}
      <div className="by-text-container">
        <div className="by-chinese">豆自己</div>
        <div className="by-english">BEAN YOURSELF</div>
      </div>
    </div>
  );
};

export default BeanYourselfLogo;
