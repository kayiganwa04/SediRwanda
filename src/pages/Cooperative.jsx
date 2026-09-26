import React from 'react';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import usePageMeta from '../hooks/usePageMeta';

import heroImage from '../Images/sewing.jpg';
import mushroomImage from '../Images/Health_Sanitation/mushrooms.jpg';
import gardenImage from '../Images/Health_Sanitation/health4.jpg';
import vegetableImage from '../Images/vegetable.jpg';

const outcomes = [
  { title: 'Capacity building', text: 'Management skills for the opportunities beneficiaries already have.' },
  { title: 'Access to health care', text: 'Income that keeps insurance paid and families cared for.' },
  { title: 'Education and leadership', text: 'Skills that let people speak for themselves in their community.' },
  { title: 'Income-generating activities', text: 'Mushroom gardens, vegetables, tailoring and chicken farming.' },
];

export default function Cooperative() {
  usePageMeta(
    'Social-economic integration',
    'Training and income-generating activities through local anti-poverty clubs in Masoro and Cyaruzinge villages.'
  );

  return (
    <>
      <PageHero
        eyebrow="Our work · Social-economic integration"
        title="Income-generating activities, run by local anti-poverty clubs."
        lead="This program strengthens the capacity of the community to create and manage income-generating activities, so that beneficiaries regain their dignity and raise their standard of living."
        image={heroImage}
        imageAlt="Women learning tailoring in a workshop"
        crumbs={[{ label: 'Our work' }, { label: 'Social-economic integration' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">The mission</p>
              <h2>Helping people achieve their potential.</h2>
              <p>
                The purposeful mission of this program is to ensure that beneficiaries from the historically
                marginalized community achieve their potential in terms of capacity building, access to health care,
                education, leadership skills and income-generating activities. These help them regain their dignity,
                raise their standard of living, and adopt the attitudes that let them integrate well into society.
              </p>
              <p>
                Because our beneficiaries have no land, no education and no professional activity, we insist on
                businesses that need no special skills, little money and no large land. That is why the mushroom garden
                comes first.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={mushroomImage} alt="A beneficiary tending a mushroom garden" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What changes</p>
            <h2>Four outcomes we work towards.</h2>
          </div>
          <div className="grid grid--4">
            {outcomes.map((o, i) => (
              <div className="value" key={o.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">In the field</p>
            <h2>Gardens that feed families and fund homes.</h2>
          </div>
          <div className="photo-row photo-row--2">
            <img src={vegetableImage} alt="Rows of lettuce in a community vegetable garden" data-aos="fade-up" />
            <img src={gardenImage} alt="A family preparing a kitchen garden" data-aos="fade-up" data-aos-delay="80" />
          </div>
        </div>
      </section>

      <DonateBand
        title="Seed a mushroom garden."
        text="A small start-up kit lets a family earn from the very first harvest, with no land and no capital required."
      />
    </>
  );
}
