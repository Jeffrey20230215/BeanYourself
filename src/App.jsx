import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import { useHashRoute } from './hooks/useHashRoute';

function renderPage(pathname) {
  switch (pathname) {
    case '/checkout':
      return <CheckoutPage />;
    case '/cart':
      return <CartPage />;
    case '/products':
      return <ProductListPage />;
    case '/product':
      return <ProductDetailPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  const { pathname } = useHashRoute();

  return (
    <div className="app-shell">
      <Navbar currentPath={pathname} />
      <main className="app-main">{renderPage(pathname)}</main>
    </div>
  );
}
