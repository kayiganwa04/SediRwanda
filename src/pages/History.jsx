import React from 'react';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import usePageMeta from '../hooks/usePageMeta';
import { achievements2019 } from '../data/site';

import heroImage from '../Images/basic_education/education4.jpg';
import achievementImage from '../Images/basic_education/education3.jpg';

const programs = [
  'Community empowerment',
  'Early child and basic education facilitation',
  'Health and sanitation',
  'Sports and entertainment',
  'Meetings and trainings',
];

export default function History() {
  usePageMeta('Our history', 'How SEDI Rwanda began, what it believes in, and what it achieved in its first years.');

  return (
    <>
      <PageHero
        eyebrow="Our history"
        title="Where SEDI Rwanda comes from."
        lead="Created by development activists, driven by the belief that community work against disempowerment, isolation and discrimination is a powerful tool for social change."
        image={heroImage}
        imageAlt="Children in Masoro receiving school kits"
        crumbs={[{ label: 'About us', to: '/about' }, { label: 'Our history' }]}
      />

      <section className="section">
        <div className="container container--narrow prose">
          <p className="lead">
            SEDI Rwanda was created by a team of development activists whose mission is to contribute to the empowerment
            of the poorest and most vulnerable rural families, with a special focus on single-mother families and the
            historically marginalized community, so that they can be fully integrated into social-economic development
            and become actors and victors of a positive change for sustainable development.
          </p>
          <p>
            We believe in community work against disempowerment, social isolation and discrimination of the most
            vulnerable family classes as a powerful tool for social change.
          </p>
          <p>
            We believe that systemic change starts with vulnerable people themselves taking the deliberate decision to
            join an “anti-violence solidarity club” in their neighbourhood, where they meet to share life stories and
            experiences, heal and support each other, receive motivational counsel, work together through an
            income-generating activity program, and save together to reclaim their dignity. Solidarity clubs must extend
            beyond the most vulnerable to supporting families and the community at large.
          </p>
          <p>
            Our cultural village and traditional knowledge programmes are a channel for people of compassion to
            demonstrate their love and care to beneficiaries and their children. And we believe the vicious circle of
            the poorest families can be broken if the community comes together to raise awareness and take preventive
            measures to protect the youth.
          </p>
        </div>
      </section>

      <section className="section--tight section--green">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <p className="eyebrow eyebrow--light">Programs</p>
            <h2 className="h3">To achieve its mission, SEDI Rwanda set up five programs.</h2>
          </div>
          <ul className="chips">
            {programs.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="split" style={{ alignItems: 'start' }}>
            <div>
              <div className="section-head">
                <p className="eyebrow">Milestones</p>
                <h2>What we achieved in 2019.</h2>
                <p>The first full year of the program in Masoro and Cyaruzinge villages.</p>
              </div>
              <ol className="numbered">
                {achievements2019.map((a, i) => (
                  <li key={a.title} data-aos="fade-up" data-aos-delay={i * 60}>
                    <div>
                      <h3>{a.title}</h3>
                      <p>{a.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="split__media" data-aos="fade-up" style={{ position: 'sticky', top: 100 }}>
              <img src={achievementImage} alt="Pupils sorting their new school materials" />
            </div>
          </div>
        </div>
      </section>

      <DonateBand
        title="Help us write the next chapter."
        text="Every school kit, insurance card and mushroom garden in this story was funded by people like you."
      />
    </>
  );
}
