import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 5);
  }, [pathname]);

  return null;
}
