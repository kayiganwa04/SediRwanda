import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="section notfound">
      <div className="container">
        <p className="display" aria-hidden="true">
          404
        </p>
        <h1 className="h2">We couldn’t find that page.</h1>
        <p className="lead" style={{ marginBottom: 28 }}>
          The link may be old or mistyped. Let’s get you back on track.
        </p>
        <div className="cluster cluster--center">
          <Link to="/" className="btn btn--primary">
            Go to the homepage
            <Icon name="arrowRight" />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
