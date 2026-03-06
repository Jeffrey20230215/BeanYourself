import './ProductDetail.scss';
import ProductMain from './ProductMain';
import FlavorAnalysis from './FlavorAnalysis';
import BrewingGuide from './BrewingGuide'; // 沖泡指南導入
import RelatedProducts from './RelatedProducts';


function ProductDetail() {
  return (
    <div className="product-detail-page">
      <ProductMain />
      <FlavorAnalysis />
      <BrewingGuide /> {/* 沖泡指南*/}
      <RelatedProducts /> {/*風味推薦*/}
    </div>
  );
}
export default ProductDetail; // 必須有這一行
