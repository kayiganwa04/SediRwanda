import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero band for inner pages. Pass `image` for a photographic hero or omit it
 * for a plain deep-green band.
 */
export default function PageHero({ eyebrow, title, lead, image, imageAlt = '', crumbs = [], position }) {
  return (
    <section className={`page-hero${image ? '' : ' page-hero--plain'}`}>
      {image && (
        <div className="page-hero__media">
          <img src={image} alt={imageAlt} style={position ? { objectPosition: position } : undefined} />
        </div>
      )}
      <div className="container">
        <div className="page-hero__content">
          {crumbs.length > 0 && (
            <ol className="breadcrumb" aria-label="Breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              {crumbs.map((crumb) =>
                crumb.to ? (
                  <li key={crumb.label}>
                    <Link to={crumb.to}>{crumb.label}</Link>
                  </li>
                ) : (
                  <li key={crumb.label} aria-current="page">
                    {crumb.label}
                  </li>
                )
              )}
            </ol>
          )}
          {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
          <h1>{title}</h1>
          {lead && <p className="lead">{lead}</p>}
        </div>
      </div>
    </section>
  );
}
