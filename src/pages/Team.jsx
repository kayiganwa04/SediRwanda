import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';

import teamImage from '../Images/team/team.jpg';
import volunteersImage from '../Images/team/volunteers.jpg';

const roles = [
  {
    icon: 'graduation',
    title: 'Teach and mentor',
    text: 'Support the Irerero nursery school teachers or run reading, sports and life-skills sessions.',
  },
  {
    icon: 'sprout',
    title: 'Farming and trades',
    text: 'Share know-how in mushroom farming, vegetable gardening, tailoring or small-business management.',
  },
  {
    icon: 'camera',
    title: 'Tell the story',
    text: 'Photography, writing, design and social media help us show donors exactly what their gift achieved.',
  },
];

export default function Team() {
  usePageMeta('Our team', 'The staff and volunteers who carry out the work of SEDI Rwanda in the field.');

  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="The people who carry the work in the field."
        lead="Development activists, teachers, trainers and volunteers from Rwanda and abroad."
        image={teamImage}
        imageAlt="The SEDI Rwanda team"
        position="center 30%"
        crumbs={[{ label: 'About us', to: '/about' }, { label: 'Our team' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Our team</p>
              <h2>Rooted in the villages we serve.</h2>
              <p>
                Our team works alongside local authorities and community members in Masoro, Cyaruzinge and Mushima.
                Monthly village meetings, seminars and trainings are where mindsets change, and our staff are there for
                every one of them.
              </p>
              <p>
                From the nursery school to the anti-poverty clubs, 27 staff and volunteers keep the programs running
                every day of the year.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={teamImage} alt="Members of the SEDI Rwanda team standing together" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="split split--reverse">
            <div className="split__body">
              <p className="eyebrow">Our volunteers</p>
              <h2>Friends from around the world.</h2>
              <p>
                Volunteers bring fresh energy, skills and connections to our villages. Whether you can offer a week or a
                year, in Rwanda or remotely, there is a place for you.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Become a volunteer
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={volunteersImage} alt="International volunteers with SEDI Rwanda" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Ways to volunteer</p>
            <h2>Where your skills make the biggest difference.</h2>
          </div>
          <div className="grid grid--3">
            {roles.map((role, i) => (
              <div className="value" key={role.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <span className="icon-badge">
                  <Icon name={role.icon} />
                </span>
                <h3>{role.title}</h3>
                <p>{role.text}</p>
              </div>
            ))}
          </div>
          <div className="cluster cluster--center" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn--outline btn--lg">
              Get in touch about volunteering
              <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
