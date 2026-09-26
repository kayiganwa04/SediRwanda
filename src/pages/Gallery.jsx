import React, { useCallback, useEffect, useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import { Icon } from '../components/Icons';
import usePageMeta from '../hooks/usePageMeta';

import edu1 from '../Images/basic_education/education.jpg';
import edu2 from '../Images/basic_education/education2.jpg';
import edu3 from '../Images/basic_education/education3.jpg';
import edu4 from '../Images/basic_education/education4.jpg';
import school from '../Images/homepage.jpg';
import insurance from '../Images/Health_Sanitation/health5.jpg';
import garden from '../Images/Health_Sanitation/akarima.jpg';
import kitchenGarden from '../Images/Health_Sanitation/health4.jpg';
import porridge from '../Images/Health_Sanitation/porridge.jpg';
import nutrition from '../Images/Health_Sanitation/alimantation.jpg';
import mushrooms from '../Images/Health_Sanitation/mushrooms.jpg';
import mushroom from '../Images/Health_Sanitation/mushroom.jpg';
import sewing from '../Images/sewing.jpg';
import vegetable from '../Images/vegetable.jpg';
import social from '../Images/status/social.jpg';
import football from '../Images/sport_and_entertainment/karere.jpg';
import teams from '../Images/sport_and_entertainment/karere2.jpg';
import dancers from '../Images/sport_and_entertainment/bwiza-dancers.jpg';
import play from '../Images/karere3.jpg';
import team from '../Images/team/team.jpg';
import volunteers from '../Images/team/volunteers.jpg';

const CATEGORIES = ['All', 'Education', 'Health', 'Livelihoods', 'Sport', 'People'];

const photos = [
  { src: school, alt: 'Children and their teacher in front of the Irerero nursery school', category: 'Education' },
  { src: edu2, alt: 'Pupils holding their new exercise books', category: 'Education' },
  { src: edu4, alt: 'Children in Masoro receiving school kits', category: 'Education' },
  { src: edu3, alt: 'Pupils sorting their new school materials', category: 'Education' },
  { src: edu1, alt: 'Pupils in uniform at school', category: 'Education' },
  { src: insurance, alt: 'Families in Masoro holding their health insurance cards', category: 'Health' },
  { src: garden, alt: 'Community members building a kitchen garden', category: 'Health' },
  { src: kitchenGarden, alt: 'A family preparing a kitchen garden', category: 'Health' },
  { src: porridge, alt: 'Nursery children drinking porridge', category: 'Health' },
  { src: nutrition, alt: 'Nutrition education poster', category: 'Health' },
  { src: mushrooms, alt: 'A beneficiary tending a mushroom garden', category: 'Livelihoods' },
  { src: sewing, alt: 'Women learning tailoring', category: 'Livelihoods' },
  { src: vegetable, alt: 'Rows of lettuce in a community garden', category: 'Livelihoods' },
  { src: mushroom, alt: 'Beneficiaries at the mushroom farm', category: 'Livelihoods' },
  { src: social, alt: 'Community celebration in Masoro village', category: 'People' },
  { src: football, alt: 'Children playing football', category: 'Sport' },
  { src: teams, alt: 'Two teams lined up before a match', category: 'Sport' },
  { src: dancers, alt: 'The Bwiza dancers in traditional dress', category: 'Sport' },
  { src: play, alt: 'Children playing together in the village', category: 'Sport' },
  { src: team, alt: 'The SEDI Rwanda team', category: 'People' },
  { src: volunteers, alt: 'International volunteers with SEDI Rwanda', category: 'People' },
];

function Lightbox({ items, index, onClose, onStep }) {
  const ref = useRef(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onStep]);

  const item = open ? items[index] : null;

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label="Photo viewer"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      {item && (
        <figure style={{ margin: 0, position: 'relative' }}>
          <img src={item.src} alt={item.alt} />
          <figcaption>
            {item.alt} · {index + 1} / {items.length}
          </figcaption>
          <button type="button" className="dialog__close" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
          {items.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--prev"
                onClick={() => onStep(-1)}
                aria-label="Previous photo"
              >
                <Icon name="chevronLeft" />
              </button>
              <button
                type="button"
                className="lightbox__nav lightbox__nav--next"
                onClick={() => onStep(1)}
                aria-label="Next photo"
              >
                <Icon name="chevronRight" />
              </button>
            </>
          )}
        </figure>
      )}
    </dialog>
  );
}

export default function Gallery() {
  usePageMeta('Gallery', 'Photos from SEDI Rwanda’s schools, health, livelihoods and sports programs.');
  const [category, setCategory] = useState('All');
  const [active, setActive] = useState(null);

  const visible = category === 'All' ? photos : photos.filter((p) => p.category === category);

  const step = useCallback(
    (dir) => setActive((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the field."
        lead="Schools, gardens, football pitches and village meetings: the everyday work your support makes possible."
        crumbs={[{ label: 'Gallery' }]}
      />

      <section className="section">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filter photos">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                className={category === c ? 'is-active' : ''}
                onClick={() => {
                  setCategory(c);
                  setActive(null);
                }}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="masonry">
            {visible.map((photo, i) => (
              <figure
                key={photo.src + photo.alt}
                tabIndex={0}
                role="button"
                aria-label={`Open photo: ${photo.alt}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Lightbox items={visible} index={active} onClose={() => setActive(null)} onStep={step} />
    </>
  );
}
