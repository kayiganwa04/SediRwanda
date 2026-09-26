import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export default function DonateBand({
  title = '100% of what you give reaches the projects.',
  text = 'Every franc funds school fees, health insurance, kitchen gardens and training in our pilot villages. We prove every project you fund with photos.',
}) {
  return (
    <section className="donate-band">
      <div className="container donate-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cluster">
          <Link to="/donate" className="btn btn--accent btn--lg">
            <Icon name="heart" />
            Donate now
          </Link>
          <Link to="/fundraising" className="btn btn--outline-light btn--lg">
            Start a campaign
          </Link>
        </div>
      </div>
    </section>
  );
}
