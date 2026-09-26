import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';

import heroImage from '../Images/status/social.jpg';

const steps = [
  {
    title: 'Pick a cause',
    text: 'Choose one of our current projects, such as porridge for the school, a mushroom garden or health insurance for a family, or tell us what matters to you.',
  },
  {
    title: 'Rally your people',
    text: 'A birthday, a run, a bake sale or a company match: ask friends, classmates or colleagues to give to your campaign instead of gifts.',
  },
  {
    title: 'See the proof',
    text: 'We put 100% of what you raise into the project and send you photos and a short report of what it achieved on the ground.',
  },
];

const ideas = [
  'Celebrate a birthday with a fundraiser instead of gifts',
  'Run, cycle or hike for a project',
  'Organise a school or university drive',
  'Ask your employer for a matching gift',
];

export default function Fundraise() {
  usePageMeta('Start a campaign', 'Raise money with your community for a SEDI Rwanda project and see the proof of what it achieved.');

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Start a campaign. We’ll prove every project you fund with photos."
        lead="100% of the money you raise helps poor families in our pilot villages."
        image={heroImage}
        imageAlt="Community celebration in Masoro village"
        position="center 35%"
        crumbs={[{ label: 'Get involved' }, { label: 'Start a campaign' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">How it works</p>
            <h2>Starting a fundraising campaign is easy.</h2>
          </div>
          <ol className="steps" style={{ padding: 0, listStyle: 'none' }}>
            {steps.map((step, i) => (
              <li className="step" key={step.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Need inspiration?</p>
              <h2>You can do almost anything to raise money.</h2>
              <ul className="prose" style={{ paddingLeft: '1.2rem' }}>
                {ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ul>
              <div className="cluster" style={{ marginTop: 24 }}>
                <Link to="/compaign" className="btn btn--primary">
                  See current campaigns
                  <Icon name="arrowRight" />
                </Link>
                <Link to="/contact" className="btn btn--outline">
                  Talk to us first
                </Link>
              </div>
            </div>
            <div className="pledge" style={{ alignSelf: 'center' }}>
              <Icon name="check" />
              <p>
                <strong>Our pledge.</strong> Every franc you raise is spent on the project you chose. We send you photos so you can show your supporters what they achieved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
