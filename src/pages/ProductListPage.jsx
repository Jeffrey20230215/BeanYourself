import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import CatalogProductCard from '../components/product/CatalogProductCard';
import {
  catalogProducts,
  productFilters,
  productToolbarGroups,
} from '../services/shopService';
import './ProductListPage.scss';

export default function ProductListPage() {
  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      try {
        const response = await fetch('https://ec-course-api.hexschool.io/v2/api/angela-hex/products/all');
        const data = await response.json();

        if (isMounted) {
          setApiProducts(data?.products || data?.data?.products || []);
        }
      } catch (error) {
        if (isMounted) {
          setApiProducts([]);
        }
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="product-list-page">
      <section className="product-list-page__hero">
        <div className="layout-container product-list-page__hero-inner">
          <div className="product-list-page__hero-copy">
            <h1>SHOP BEANS</h1>
            <p>
              從焙度到花果香，找到你最對味的豆子。
              <br />
              這次先用一致的 mock 視覺，把商品瀏覽頁完整站穩。
            </p>
          </div>
        </div>
      </section>

      <section className="layout-container product-list-page__persona">
        <div className="product-list-page__persona-header">
          <div>
            <h2>
              選擇
              <br />
              咖啡人格
            </h2>
          </div>
          <p>
            不同的個性，值得不同的咖啡風味
            <br />
            透過篩選快速定義喜歡的代號
          </p>
        </div>

        <div className="product-list-page__filters">
          {productFilters.map((filter, index) => (
            <button type="button" key={filter} className={index === 0 ? 'is-active' : ''}>
              <strong>{filter}</strong>
              <span>{index === 0 ? '全部商品' : '風格代號'}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="layout-container product-list-page__toolbar">
        <div className="product-list-page__toolbar-groups">
          {productToolbarGroups.map((group) => (
            <div key={group.label} className="product-list-page__toolbar-group">
              <span>{group.label}</span>
              <div>
                {group.options.map((option, index) => (
                  <button type="button" key={option} className={index === 0 ? 'is-active' : ''}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="product-list-page__summary">
          <span>{catalogProducts.length} Result all</span>
        </div>
      </section>

      <section className="layout-container product-list-page__grid">
        {catalogProducts.map((product, index) => {
          const apiProduct = apiProducts[index];
          const mergedProduct = apiProduct
            ? {
                ...product,
                id: apiProduct.id || product.id,
                name: apiProduct.title || product.name,
                profile: apiProduct.description || product.profile,
                price: apiProduct.price ?? product.price,
              }
            : product;

          return (
            <CatalogProductCard key={mergedProduct.id} product={mergedProduct} ctaLabel="→" />
          );
        }
        )}
      </section>

      <section className="layout-container product-list-page__action">
        <button type="button">查看更多</button>
      </section>

      <Footer />
    </div>
  );
}
