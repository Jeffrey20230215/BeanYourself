import './Navbar.scss';

const navItems = [
  { label: '品牌故事', href: '#/' },
  { label: '商品列表', href: '#/product' },
  { label: '咖啡文章', href: '#/#articles' },
  { label: '人格測驗', href: '#/#quiz' },
];

export default function Navbar({ currentPath }) {
  return (
    <header className="navbar">
      <div className="layout-container navbar__inner">
        <a className="navbar__brand" href="#/">
          <span className="navbar__badge">Bean</span>
          <div>
            <strong>豆自己</strong>
            <span>BEANYOURSELF</span>
          </div>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              item.href === '#/'
                ? currentPath === '/'
                : item.href === '#/product' && currentPath === '/product';

            return (
              <a
                key={item.label}
                className={`navbar__link ${isActive ? 'is-active' : ''}`}
                href={item.href}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="navbar__actions" aria-hidden="true">
          <span>Search</span>
          <span>Cart</span>
          <span>Profile</span>
        </div>
      </div>
    </header>
  );
}
