import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CopyButton from '../components/CopyButton';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import { giving, org } from '../data/site';

import heroImage from '../Images/Health_Sanitation/porridge.jpg';

const examples = [
  'a year of health insurance for a family member',
  'uniform, shoes and school materials for a child',
  'a mushroom garden start-up kit for a household',
  'a cup of porridge for every nursery child at noon',
];

export default function Donate() {
  usePageMeta('Donate', 'Fund a SEDI Rwanda project by Mobile Money or bank transfer. 100% of your gift reaches the project.');

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="100% of your money helps to eradicate poverty."
        lead="Give by Mobile Money or bank transfer. Thank you."
        image={heroImage}
        imageAlt="Nursery children drinking porridge"
        position="center 40%"
        crumbs={[{ label: 'Get involved' }, { label: 'Donate' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <p className="eyebrow">Ways to give</p>
              <h2>Fund a project.</h2>
              <p className="muted" style={{ marginBottom: 28 }}>
                Send your gift to one of the accounts below. Use “SEDI donation” and your name as the reference so we can
                thank you and send a receipt.
              </p>
              <div className="stack" style={{ gap: 16 }}>
                <div className="give-card" data-aos="fade-up">
                  <h3>{giving.mobileMoney.label}</h3>
                  <p className="give-card__meta">Fastest option from inside Rwanda.</p>
                  <div className="give-card__value">
                    <span>{giving.mobileMoney.value}</span>
                    <CopyButton value={giving.mobileMoney.value.replace(/\s+/g, '')} label="Copy number" />
                  </div>
                </div>
                {giving.banks.map((b, i) => (
                  <div className="give-card" key={b.account} data-aos="fade-up" data-aos-delay={(i + 1) * 60}>
                    <h3>
                      {b.bank} · {b.holder}
                    </h3>
                    <p className="give-card__meta">Bank transfer, local or international.</p>
                    <div className="give-card__value">
                      <span>{b.account}</span>
                      <CopyButton value={b.account.replace(/\s+/g, '')} label="Copy account" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stack" style={{ gap: 20 }}>
              <div className="pledge">
                <Icon name="check" />
                <p>
                  <strong>Our pledge.</strong> Every franc you give is spent on projects in our villages. We prove every
                  project you fund with photos.
                </p>
              </div>
              <div className="card">
                <div className="card__body">
                  <p className="eyebrow">What your gift does</p>
                  <ul className="prose" style={{ paddingLeft: '1.2rem', margin: 0 }}>
                    {examples.map((e) => (
                      <li key={e}>Your gift can cover {e}.</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card__body">
                  <h3 className="h4">Need a receipt or want to give another way?</h3>
                  <p>
                    Email <a href={`mailto:${org.email}`}>{org.email}</a> or call {org.phones[0]}. We are happy to set up
                    a recurring partnership or a campaign with your organisation.
                  </p>
                  <Link to="/contact" className="btn btn--outline btn--sm">
                    Contact us
                    <Icon name="arrowRight" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
