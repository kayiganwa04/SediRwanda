import React from 'react';
import PageHero from '../components/PageHero';
import DonateBand from '../components/DonateBand';
import usePageMeta from '../hooks/usePageMeta';

import heroImage from '../Images/sport_and_entertainment/karere.jpg';
import footballImage from '../Images/sport_and_entertainment/karere2.jpg';
import danceImage from '../Images/sport_and_entertainment/bwiza-dancers.jpg';
import playImage from '../Images/karere3.jpg';

export default function Sports() {
  usePageMeta(
    'Sports & entertainment',
    'Games, athletics and traditional dance that build confidence, health, friendship and fair play among children.'
  );

  return (
    <>
      <PageHero
        eyebrow="Our work · Sports & entertainment"
        title="Sometimes sport works where words are not enough."
        lead="Games and athletics let children regularly extend their own boundaries, and the experience builds confidence, health, friendship, solidarity and fair play."
        image={heroImage}
        imageAlt="Children playing football on a dusty pitch"
        position="center 40%"
        crumbs={[{ label: 'Our work' }, { label: 'Sports & entertainment' }]}
      />

      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split__body">
              <p className="eyebrow">Why sport</p>
              <h2>A treasure trove for education.</h2>
              <p>
                Sport is a treasure trove when it comes to education, and that is particularly the case for children on
                whom life has not really smiled. Games and athletics enable children to regularly extend their own
                boundaries. The experience they gain builds their confidence, and more besides: it strengthens their
                immune systems and promotes friendship, solidarity and fair play.
              </p>
              <p>
                These are some of the many reasons why we make sport a priority, and because sometimes it simply works
                where words alone are not enough.
              </p>
            </div>
            <div className="split__media" data-aos="fade-up">
              <img src={footballImage} alt="Two teams of children lined up before a football match" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Entertainment</p>
            <h2>Traditional dance and play, a school of social life.</h2>
          </div>
          <div className="photo-row photo-row--2">
            <img src={danceImage} alt="The Bwiza dancers performing in traditional dress" data-aos="fade-up" />
            <img src={playImage} alt="Children playing together in the village" data-aos="fade-up" data-aos-delay="80" />
          </div>
        </div>
      </section>

      <DonateBand
        title="Kit out a team."
        text="Balls, jerseys and a place to play turn an afternoon into a lesson in confidence and fair play."
      />
    </>
  );
}
