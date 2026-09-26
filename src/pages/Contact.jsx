import React from 'react';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import { org } from '../data/site';

export default function Contact() {
  usePageMeta('Contact us', 'Get in touch with SEDI Rwanda to volunteer, donate, partner or ask a question.');

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We love making new friends."
        lead="Questions, volunteering, partnerships or press: send us a message and we will get back to you."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Reach us</p>
            <h2 className="h3">Ndera Sector, Kigali.</h2>
            <p className="muted" style={{ marginBottom: 28 }}>
              Our office is in Ndera Sector, Gasabo District. Field activities take place in Masoro, Cyaruzinge and
              Mushima villages.
            </p>
            <ul className="contact-list">
              <li>
                <span className="icon-badge">
                  <Icon name="mail" />
                </span>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${org.email}`}>{org.email}</a>
                </div>
              </li>
              <li>
                <span className="icon-badge icon-badge--yellow">
                  <Icon name="phone" />
                </span>
                <div>
                  <strong>Phone</strong>
                  {org.phones.map((phone, i) => (
                    <React.Fragment key={phone}>
                      {i > 0 && <br />}
                      <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                    </React.Fragment>
                  ))}
                </div>
              </li>
              <li>
                <span className="icon-badge icon-badge--blue">
                  <Icon name="mapPin" />
                </span>
                <div>
                  <strong>Location</strong>
                  {org.location}
                </div>
              </li>
            </ul>
            <p className="eyebrow" style={{ marginBottom: 10 }}>
              Follow us
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

          <div className="form-card" data-aos="fade-up">
            <h2 className="h3" style={{ marginBottom: 6 }}>
              Send us a message
            </h2>
            <p className="muted" style={{ marginBottom: 24 }}>
              All fields are required.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
