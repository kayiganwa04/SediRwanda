import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

/** Scrolls to the top on route change and refreshes scroll animations. */
function useRouteEffects() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    // Let the new page paint before AOS measures element positions.
    const id = window.setTimeout(() => {
      try {
        AOS.refreshHard();
      } catch {
        /* AOS is optional in non-browser environments */
      }
    }, 50);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);
}

export default function Layout() {
  useRouteEffects();

  useEffect(() => {
    try {
      AOS.init({
        once: true,
        duration: 650,
        easing: 'ease-out-cubic',
        offset: 40,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      });
    } catch {
      /* AOS is optional in non-browser environments */
    }
  }, []);

  return (
    <>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
