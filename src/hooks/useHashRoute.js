import { useEffect, useState } from 'react';

function getPathname() {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function useHashRoute() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handleHashChange = () => {
      setPathname(getPathname());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return { pathname };
}
