import './Footer.scss';

const footerLinks = [
  { label: '品牌故事', href: '#/' },
  { label: '產品列表', href: '#/product' },
  { label: '咖啡文章', href: '#/#articles' },
  { label: '咖啡人格測驗', href: '#/#quiz' },
];

const socialLinks = [
  { label: 'Instagram', href: '#/' },
  { label: 'Facebook', href: '#/' },
  { label: 'Contact', href: '#/' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="layout-container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__nav-group">
            <a className="site-footer__logo" href="#/">
              <span>B.Y.</span>
              <strong>BEAN YOURSELF</strong>
            </a>

            <nav className="site-footer__nav" aria-label="Footer">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="site-footer__wordmark" aria-hidden="true">
            <span>BEAN</span>
            <span>YOURSELF.</span>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 BEAN YOURSELF. COFFEE</p>
          <div className="site-footer__social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
