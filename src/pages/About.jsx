import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import { values, villages } from '../data/site';

import heroImage from '../Images/status/social.jpg';
import teamImage from '../Images/team/team.jpg';
import volunteersImage from '../Images/team/volunteers.jpg';

export default function About() {
  usePageMeta(
    'About us',
    'SEDI Rwanda is a non-profit created by development activists to reach the most vulnerable families and historically marginalized communities around Kigali.'
  );

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A non-profit built by development activists, for the families nobody else reaches."
        lead="Social and Education Development Initiative (SEDI Rwanda) helps the most vulnerable families become actors and victors of a positive, sustainable change."
        image={heroImage}
        imageAlt="Community members gathered in Masoro village"
        crumbs={[{ label: 'About us' }]}
      />

      <section className="section">
        <div className="container container--narrow prose">
          <p className="lead">
            SEDI Rwanda works as a non-profit organisation created by a team of development activists. We aim to reach
            the most vulnerable families and communities, with a special focus on the historically marginalized people
            in Rwanda, integrate them into socio-economic development and help them become actors and victors of a
            positive change for sustainable development.
          </p>
          <p>
            We build on the good management of the opportunities available in people’s own social environment and on
            the income they can gain from their traditional knowledge. We also see sports and entertainment as a key
            school of social life that can contribute to social change.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="grid grid--2">
            <div className="card">
              <div className="card__body">
                <span className="icon-badge">
                  <Icon name="star" />
                </span>
                <p className="eyebrow">Our mission</p>
                <h3>Poverty alleviation and a better psycho-socio-economic life.</h3>
                <p>
                  We work for the most vulnerable groups, with particular emphasis on single mothers and their children.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="card__body">
                <span className="icon-badge icon-badge--yellow">
                  <Icon name="sprout" />
                </span>
                <p className="eyebrow">Our vision</p>
                <h3>A society without chronic poverty.</h3>
                <p>
                  Every citizen enjoys better living conditions with respect and psycho-socio-economic comfort,
                  especially women and children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Core values</p>
            <h2>Respect for, and promotion of, four core values.</h2>
          </div>
          <div className="grid grid--2">
            {values.map((value, i) => (
              <div className="value" key={value.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <span className="icon-badge">
                  <Icon name={value.icon} />
                </span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow eyebrow--light">How we choose a pilot zone</p>
              <h2>Concentrating our efforts where the gap is widest.</h2>
              <p>
                SEDI Rwanda has chosen to concentrate on areas surrounding Kigali city, where historically marginalized
                communities still live under the margin of poverty compared to their neighbours. Geographic, social and
                economic barriers segregate them from the services and opportunities of the rest of the country.
              </p>
              <p>
                We address these problems through strategic education facilitation, health interventions against poor
                nutrition, and the improvement of local agriculture and modern farming, giving these communities a
                sustainable foundation on which to grow and thrive.
              </p>
            </div>
            <div>
              <ul className="numbered">
                {villages.map((v) => (
                  <li key={v.name} style={{ background: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.14)' }}>
                    <div>
                      <h3 style={{ color: '#fff' }}>{v.name}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.75)' }}>{v.district}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">People</p>
            <h2>Meet the team and the volunteers.</h2>
          </div>
          <div className="photo-row photo-row--2">
            <figure style={{ margin: 0 }} data-aos="fade-up">
              <img src={teamImage} alt="The SEDI Rwanda team" />
              <figcaption className="muted" style={{ marginTop: 10 }}>
                Our team in the field
              </figcaption>
            </figure>
            <figure style={{ margin: 0 }} data-aos="fade-up" data-aos-delay="80">
              <img src={volunteersImage} alt="International volunteers with SEDI Rwanda" />
              <figcaption className="muted" style={{ marginTop: 10 }}>
                Volunteers who joined us
              </figcaption>
            </figure>
          </div>
          <div className="cluster cluster--center" style={{ marginTop: 32 }}>
            <Link to="/team" className="btn btn--outline">
              About our team
              <Icon name="arrowRight" />
            </Link>
            <Link to="/history" className="btn btn--ghost">
              Read our history
              <Icon name="arrowRight" />
            </Link>
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
