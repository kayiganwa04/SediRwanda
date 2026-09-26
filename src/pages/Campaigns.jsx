import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import { campaigns } from '../data/site';

import vegetable from '../Images/vegetable.jpg';
import porridge from '../Images/Health_Sanitation/porridge.jpg';
import mushroom from '../Images/Health_Sanitation/mushroom.jpg';

const images = { vegetable, porridge, mushroom };

export default function Campaigns() {
  usePageMeta(
    'Find a campaign',
    'Current SEDI Rwanda projects looking for partners: agri-farming, school porridge, and fighting food insecurity.'
  );

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Our areas of focus."
        lead="SEDI Rwanda is looking for partners to support the fight against malnutrition, chronic poverty and food insecurity."
        crumbs={[{ label: 'Get involved' }, { label: 'Find a campaign' }]}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            {campaigns.map((c, i) => (
              <article className="card card--link" key={c.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="card__media">
                  <img src={images[c.image]} alt="" />
                </div>
                <div className="card__body">
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <Link to="/donate" className="card__link">
                    Support this project
                    <Icon name="arrowRight" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="muted text-center" style={{ marginTop: 36 }}>
            Want to fund something specific or set up a recurring partnership?{' '}
            <Link to="/contact">Talk to us</Link>.
          </p>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
