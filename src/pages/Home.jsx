import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../components/Icons';
import DonateBand from '../components/DonateBand';
import usePageMeta from '../hooks/usePageMeta';
import { impact, programs, values, villages, testimonials, org } from '../data/site';

import heroImage from '../Images/homepage.jpg';
import educationImage from '../Images/basic_education/education2.jpg';
import healthImage from '../Images/Health_Sanitation/health5.jpg';
import economicImage from '../Images/Health_Sanitation/mushrooms.jpg';

const ways = [
  {
    to: '/donate',
    icon: 'heart',
    tone: '',
    title: 'Donate',
    text: 'Fund school fees, health insurance or a kitchen garden. Every contribution is spent on the ground.',
    cta: 'Give today',
  },
  {
    to: '/contact',
    icon: 'users',
    tone: 'icon-badge--yellow',
    title: 'Volunteer',
    text: 'Bring your time and skills to our villages, our nursery school or our team in Kigali.',
    cta: 'Join us',
  },
  {
    to: '/fundraising',
    icon: 'share',
    tone: 'icon-badge--blue',
    title: 'Start a campaign',
    text: 'Rally your friends, class or company around a cause and we will show you exactly what it achieved.',
    cta: 'Start raising',
  },
  {
    to: '/compaign',
    icon: 'sprout',
    tone: '',
    title: 'Fund a project',
    text: 'Partner with us on a specific need: porridge for the school, agri-farming or a chicken farm.',
    cta: 'See the projects',
  },
];

export default function Home() {
  usePageMeta(
    null,
    'SEDI Rwanda is a non-profit reaching the most vulnerable families around Kigali through education, health, social-economic integration and sport.'
  );

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__media">
          <img src={heroImage} alt="Children and a teacher in front of the Irerero nursery school" fetchpriority="high" />
        </div>
        <div className="container">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">{org.fullName}</p>
            <h1>
              Engage. Educate. <em>Empower.</em>
            </h1>
            <p className="lead">
              We work with the most vulnerable families around Kigali, with a special focus on historically marginalized
              communities, so they become actors and victors of their own positive change.
            </p>
            <div className="cluster">
              <Link to="/donate" className="btn btn--accent btn--lg">
                <Icon name="heart" />
                Donate now
              </Link>
              <Link to="/about" className="btn btn--outline-light btn--lg">
                Who we are
              </Link>
            </div>
          </div>
        </div>
        <a className="hero__scroll" href="#impact" aria-label="Scroll to our impact">
          Scroll
          <Icon name="arrowDown" />
        </a>
      </section>

      {/* Impact strip */}
      <section className="impact" id="impact">
        <div className="container">
          <div className="impact__grid">
            {impact.map((item) => (
              <div className="impact__item" key={item.label}>
                <div className="impact__value">{item.value}</div>
                <div className="impact__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Our mission</p>
              <h2>Poverty alleviation for the families who are usually left out.</h2>
              <p className="lead">
                SEDI Rwanda was created by a team of development activists. We reach the poorest and most vulnerable
                families, with particular emphasis on single mothers, their children and the historically marginalized
                community, and help them integrate fully into social and economic development.
              </p>
              <p>
                We believe systemic change starts with vulnerable people themselves: joining solidarity clubs in their
                neighbourhood, sharing life stories, healing together, learning to run an income-generating activity and
                saving together to reclaim their dignity.
              </p>
              <Link to="/about" className="btn btn--ghost">
                Read more about us
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={educationImage} alt="Pupils holding new school books" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">What we do</p>
            <h2>Four programs, one goal: a community that can thrive on its own.</h2>
            <p>
              We concentrate on villages surrounding Kigali where historically marginalized communities still live on the
              margins of poverty compared to their neighbours.
            </p>
          </div>
          <div className="grid grid--4">
            {programs.map((program, i) => (
              <Link
                to={program.to}
                className="card card--link help-card"
                key={program.to}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="icon-badge">
                  <Icon name={program.icon} />
                </span>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <span className="card__link">
                  Explore
                  <Icon name="arrowRight" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section">
        <div className="container stack" style={{ gap: 'clamp(56px, 7vw, 96px)' }}>
          <div className="split split--reverse">
            <div className="split__body">
              <p className="eyebrow">Education facilitation</p>
              <h2>A nursery school in every pilot village.</h2>
              <p>
                Education prepares people to solve problems, teach others and put transformational ideas into practice.
                Our Irerero nursery school in Cyaruzinge welcomes children from the historically marginalized families
                (potters) together with the kids from poor families next door, so that nobody grows up segregated.
              </p>
              <Link to="/education" className="btn btn--ghost">
                More about our schools
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={heroImage} alt="Children in front of the Irerero nursery school" />
            </div>
          </div>

          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Health &amp; sanitation</p>
              <h2>Health insurance first, because life comes first.</h2>
              <p>
                Families in Masoro had no means to pay for care and relied on traditional medicine; mothers and children
                died at birth. Today they hold health insurance, go to the health centre on time, and have learned about
                washing hands, clean clothes, clean homes and clean dishes.
              </p>
              <Link to="/health-and-sanitation" className="btn btn--ghost">
                More about health
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={healthImage} alt="Families in Masoro showing their new health insurance cards" />
            </div>
          </div>

          <div className="split split--reverse">
            <div className="split__body">
              <p className="eyebrow">Social-economic integration</p>
              <h2>Income that needs no land and no capital.</h2>
              <p>
                Our beneficiaries have no land, no education and no professional activity. So we start with businesses
                that need none of those: mushroom gardens come first, followed by vegetable gardens, tailoring and
                management training run through local anti-poverty clubs.
              </p>
              <Link to="/social-economic-integration" className="btn btn--ghost">
                More about livelihoods
                <Icon name="arrowRight" />
              </Link>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={economicImage} alt="A beneficiary tending a mushroom garden" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Core values</p>
            <h2>Four values we build into every project.</h2>
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

      {/* Where we work */}
      <section className="section section--green">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow eyebrow--light">Where we work</p>
              <h2>Three pilot villages near Kigali.</h2>
              <p>
                Geographic, social and economic barriers cut these communities off from the services and opportunities of
                the rest of the country. We started here and plan to bring the lessons to other sectors around the city.
              </p>
              <ul className="chips">
                {villages.map((v) => (
                  <li key={v.name}>
                    {v.name} · {v.district}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stats">
              {[
                ['1', 'nursery school running'],
                ['1', 'primary school supported'],
                ['63', 'students supported'],
                ['27', 'staff and volunteers'],
              ].map(([value, label]) => (
                <div className="stat" key={label}>
                  <div className="stat__value">{value}</div>
                  <div className="stat__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Voices from Masoro</p>
            <h2>What parents say about the school.</h2>
          </div>
          <div className="grid grid--2">
            {testimonials.map((t, i) => (
              <blockquote className="quote" key={t.name} data-aos="fade-up" data-aos-delay={i * 80}>
                <Icon name="quote" />
                <p>“{t.text}”</p>
                <footer>
                  <span aria-hidden="true">{t.name[0]}</span>
                  <div>
                    {t.name}
                    <small>{t.role}</small>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to help */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Get involved</p>
            <h2>There is more than one way to help.</h2>
          </div>
          <div className="grid grid--4">
            {ways.map((way, i) => (
              <Link to={way.to} className="card card--link help-card" key={way.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <span className={`icon-badge ${way.tone}`}>
                  <Icon name={way.icon} />
                </span>
                <h3>{way.title}</h3>
                <p>{way.text}</p>
                <span className="card__link">
                  {way.cta}
                  <Icon name="arrowRight" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  );
}
