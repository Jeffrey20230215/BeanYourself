import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import { useHashRoute } from './hooks/useHashRoute';

function renderPage(pathname) {
  switch (pathname) {
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
