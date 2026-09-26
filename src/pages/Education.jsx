import React from 'react';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';
import { testimonials, villages } from '../data/site';

import heroImage from '../Images/basic_education/education.jpg';
import student1 from '../Images/basic_education/education2.jpg';
import student2 from '../Images/basic_education/education3.jpg';
import student3 from '../Images/basic_education/education4.jpg';
import classroomImage from '../Images/homepage.jpg';

export default function Education() {
  usePageMeta(
    'Education',
    'Irerero nursery school and primary school support for children from poor and historically marginalized families in Cyaruzinge and Masoro.'
  );

  return (
    <>
      <PageHero
        eyebrow="Our work · Education"
        title="Nursery and primary school for every child in the village."
        lead="Early-child education and basic-education integration for children from poor families, more than 60% of them from the historically marginalized community."
        image={heroImage}
        imageAlt="Pupils in uniform at school"
        crumbs={[{ label: 'Our work' }, { label: 'Education' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Irerero nursery school</p>
            <h2>Opened in Cyaruzinge cell, Karubibi village, and now well running.</h2>
            <p>
              In our basic-education facilitation program, SEDI provides assistance to early-child education and to
              basic-education integration and reintegration. The Irerero nursery school welcomes 63 kids today.
            </p>
          </div>
          <div className="photo-row">
            <img src={student1} alt="Pupils holding new exercise books" data-aos="fade-up" />
            <img src={student2} alt="Pupils sorting their new school materials" data-aos="fade-up" data-aos-delay="80" />
            <img src={student3} alt="Children in Masoro receiving school kits" data-aos="fade-up" data-aos-delay="160" />
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="split split--reverse">
            <div className="split__body">
              <p className="eyebrow">Basic education integration</p>
              <h2>School materials, uniforms and fees, every year.</h2>
              <p>
                The nursery school’s mission is the integration of kids from poor families, more than 60% of whom are
                from the historically marginalized community (potters in Cyaruzinge village). With the same vision, 53
                students in Masoro village receive school materials and uniforms at the start of every school year, and
                their parents’ contribution fees are paid.
              </p>
              <p>
                We believe education is a key for empowerment: it opens doors for people of all backgrounds, prepares
                them to solve problems, teach others, function at a higher level and implement transformational ideas.
                That is why SEDI prioritized this opportunity as a way leading to a positive attitude towards
                sustainable development.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={classroomImage} alt="Children and their teacher in front of the school" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <div className="stats">
            {[
              ['1', 'primary school supported'],
              ['1', 'nursery school'],
              ['63', 'students'],
              ['27', 'staff'],
            ].map(([value, label]) => (
              <div className="stat" key={label}>
                <div className="stat__value">{value}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
          <div className="split" style={{ marginTop: 56 }}>
            <div className="split__body">
              <p className="eyebrow eyebrow--light">Where we work</p>
              <h2 className="h3">Pilot activities in three villages near Kigali.</h2>
              <p>
                SEDI Rwanda started its pilot activities in Masoro and Cyaruzinge villages (Gasabo District) and Mushima
                village (Kamonyi District). We plan to bring the lessons and experience to other sectors surrounding
                Kigali city.
              </p>
            </div>
            <ul className="chips">
              {villages.map((v) => (
                <li key={v.name}>
                  {v.name} · {v.district}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow eyebrow--center">Testimonials</p>
            <h2>What parents of the students say about us.</h2>
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

      <DonateBand
        title="Sponsor a child’s school year."
        text="Uniforms, shoes, exercise books and parents’ contribution fees keep a child in class all year long."
      />
    </>
  );
}
