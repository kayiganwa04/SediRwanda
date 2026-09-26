import React from 'react';

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': 'true',
  focusable: 'false',
};

const paths = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  check: <path d="M5 12l5 5L20 7" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </>
  ),
  heart: <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.4 1.2 5 3 1.6-1.8 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 15.5a5 5 0 0 1 5.5 4.5" />
    </>
  ),
  hands: (
    <>
      <path d="M3 13.5V8a1.5 1.5 0 0 1 3 0v4" />
      <path d="M6 12V6a1.5 1.5 0 0 1 3 0v6" />
      <path d="M9 12V5a1.5 1.5 0 0 1 3 0v7" />
      <path d="M12 12V7a1.5 1.5 0 0 1 3 0v6.5" />
      <path d="M15 13.5l2.6-2.6a1.6 1.6 0 0 1 2.3 2.3L14.5 18.6A6 6 0 0 1 10.3 20.5H9A6 6 0 0 1 3 14.5v-1" />
    </>
  ),
  graduation: (
    <>
      <path d="M2.5 9.5L12 5l9.5 4.5L12 14z" />
      <path d="M6.5 11.8V16c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3v-4.2" />
      <path d="M21.5 9.5V15" />
    </>
  ),
  health: (
    <>
      <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 7.9 3.6 4.5 7 4.5c2 0 3.4 1.2 5 3 1.6-1.8 3-3 5-3 3.4 0 5.6 3.4 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z" />
      <path d="M4 12h4l1.5-3 3 6 1.5-3h6" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4 3-7 7.5-7 0 4-3 7-7.5 7z" />
      <path d="M12 13c0-3.5-2.5-6-6.5-6 0 3.5 2.5 6 6.5 6z" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4" />
      <path d="M12 13v3M9 20h6M10 16h4v4h-4z" />
    </>
  ),
  balance: (
    <>
      <path d="M12 4v16M5 20h14M12 7l-5 2 5-2 5 2" />
      <path d="M4 15a3 3 0 0 0 6 0L7 9zM14 15a3 3 0 0 0 6 0l-3-6z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 0 0-14 0C5 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  quote: <path d="M7 16c-1.7 0-3-1.3-3-3 0-3.3 2.2-6 5.5-7l.7 1.4C8.2 8.2 7.4 9.5 7.2 11H9a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2zm9 0c-1.7 0-3-1.3-3-3 0-3.3 2.2-6 5.5-7l.7 1.4c-2 .8-2.8 2.1-3 3.6H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2z" />,
  star: <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />,
  camera: (
    <>
      <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Icon({ name, className, ...rest }) {
  const body = paths[name];
  if (!body) return null;
  return (
    <svg {...base} className={className} {...rest}>
      {body}
    </svg>
  );
}

export default Icon;
