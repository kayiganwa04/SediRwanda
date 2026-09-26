import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';
import { nav, org } from '../data/site';
import logo from '../Images/brand.png';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div>
            <Link to="/" className="brand">
              <img src={logo} alt="" width="52" height="52" />
              <span className="brand__text">
                <span className="brand__name">{org.name}</span>
                <span className="brand__tagline">{org.tagline}</span>
              </span>
            </Link>
            <p style={{ maxWidth: 360 }}>
              A non-profit created by development activists, reaching the most vulnerable families around
              Kigali and helping them become actors of their own positive change.
            </p>
            <ul className="social" aria-label="Social media">
              <li>
                <a href={org.facebook} target="_blank" rel="noreferrer" aria-label="SEDI Rwanda on Facebook">
                  <Icon name="facebook" />
                </a>
              </li>
              <li>
                <a href={org.instagram} target="_blank" rel="noreferrer" aria-label="SEDI Rwanda on Instagram">
                  <Icon name="instagram" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Our work</h4>
            <ul>
              {nav.programs.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Organisation</h4>
            <ul>
              {nav.about.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              {nav.involved.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`mailto:${org.email}`}>{org.email}</a>
              </li>
              {org.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                </li>
              ))}
              <li>{org.location}</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>
            © {year} {org.name}. All rights reserved.
          </span>
          <span>{org.fullName}</span>
        </div>
      </div>
    </footer>
  );
}
