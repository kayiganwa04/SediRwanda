import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Icon } from './Icons';
import { nav, org } from '../data/site';
import logo from '../Images/brand.png';

function Dropdown({ label, items, openKey, current, setOpen }) {
  const isOpen = current === openKey;
  return (
    <li className={`nav__item${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="nav__link"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setOpen(isOpen ? null : openKey)}
      >
        {label}
        <Icon name="chevronDown" />
      </button>
      <ul className="nav__menu">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} onClick={() => setOpen(null)}>
              {item.label}
              <small>{item.hint}</small>
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menus on navigation (state adjusted during render, per React guidance).
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  // Close a click-opened dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    if (!openDropdown && !menuOpen) return undefined;
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [openDropdown, menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container site-header__inner">
          <Link to="/" className="brand" aria-label={`${org.name} home`}>
            <img src={logo} alt="" width="52" height="52" />
            <span className="brand__text">
              <span className="brand__name">{org.name}</span>
              <span className="brand__tagline">{org.tagline}</span>
            </span>
          </Link>

          <nav aria-label="Primary" ref={navRef}>
            <ul className="nav" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              <li className="nav__item">
                <NavLink to="/" end className="nav__link">
                  Home
                </NavLink>
              </li>
              <Dropdown
                label="About"
                items={nav.about}
                openKey="about"
                current={openDropdown}
                setOpen={setOpenDropdown}
              />
              <Dropdown
                label="Our work"
                items={nav.programs}
                openKey="programs"
                current={openDropdown}
                setOpen={setOpenDropdown}
              />
              <Dropdown
                label="Get involved"
                items={nav.involved}
                openKey="involved"
                current={openDropdown}
                setOpen={setOpenDropdown}
              />
              <li className="nav__item">
                <NavLink to="/gallery" className="nav__link">
                  Gallery
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/contact" className="nav__link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="header__actions">
            <Link to="/donate" className="btn btn--accent">
              <Icon name="heart" />
              Donate
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen} inert={menuOpen ? undefined : ''}>
        <div className="mobile-menu__group">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {[
          ['About', nav.about],
          ['Our work', nav.programs],
          ['Get involved', nav.involved],
        ].map(([label, items]) => (
          <div className="mobile-menu__group" key={label}>
            <p className="mobile-menu__label">{label}</p>
            {items.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </div>
        ))}
        <div className="mobile-menu__cta">
          <Link to="/donate" className="btn btn--accent btn--lg">
            <Icon name="heart" />
            Donate now
          </Link>
          <Link to="/contact" className="btn btn--outline btn--lg">
            Become a volunteer
          </Link>
        </div>
      </div>
    </>
  );
}
