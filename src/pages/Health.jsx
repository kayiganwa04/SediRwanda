import React from 'react';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import usePageMeta from '../hooks/usePageMeta';

import heroImage from '../Images/Health_Sanitation/akarima.jpg';
import insuranceImage from '../Images/Health_Sanitation/health5.jpg';
import gardenImage from '../Images/Health_Sanitation/health4.jpg';
import nutritionImage from '../Images/Health_Sanitation/alimantation.jpg';
import porridgeImage from '../Images/Health_Sanitation/porridge.jpg';

export default function Health() {
  usePageMeta(
    'Health & sanitation',
    'Health insurance, hygiene education and kitchen gardens for families in Masoro village.'
  );

  return (
    <>
      <PageHero
        eyebrow="Our work · Health & sanitation"
        title="Health insurance, clean homes and kitchen gardens."
        lead="Families in Masoro had no means to pay for care and were at high risk of death. Health insurance was the first and most necessary priority."
        image={heroImage}
        imageAlt="Community members building a kitchen garden"
        crumbs={[{ label: 'Our work' }, { label: 'Health & sanitation' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Health insurance</p>
              <h2>No more births at home, no more sick people left behind.</h2>
              <p>
                People in Masoro have received health insurance. Mothers and children, the most vulnerable to illness and
                disease, now have access to medical care and go to the health centre at the right time. No birth deaths
                have been recorded since.
              </p>
              <p>
                Young and adult people in Masoro also learned about washing hands, keeping a clean body, clean clothes,
                clean homes and clean dishes. Life and health are better in those families.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={insuranceImage} alt="Families in Masoro holding their new health insurance cards" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="split split--reverse">
            <div className="split__body">
              <p className="eyebrow">Nutrition</p>
              <h2>Kitchen gardens that feed the family and pay the bills.</h2>
              <p>
                Through the nutrition program, SEDI Rwanda and the communities are working together to plant kitchen
                gardens. The gardens are part of an effort to improve family nutrition by adding vegetables to the diet,
                while the excess produce can be sold, providing a much-needed source of income.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={gardenImage} alt="A father and children preparing a kitchen garden" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In the field</p>
            <h2>Nutrition education and a daily cup of porridge.</h2>
          </div>
          <div className="photo-row photo-row--2">
            <img src={nutritionImage} alt="A nutrition education poster used in the villages" data-aos="fade-up" />
            <img src={porridgeImage} alt="Nursery children drinking porridge" data-aos="fade-up" data-aos-delay="80" />
          </div>
        </div>
      </section>

      <DonateBand
        title="Fund one cup of porridge a day."
        text="We are looking for partners to provide one cup of porridge for every school child at noon, every school day."
      />
    </>
  );
}
