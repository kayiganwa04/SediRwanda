import { useEffect } from 'react';

const SITE = 'SEDI Rwanda';

/** Sets the document title and meta description for a page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${SITE}` : `${SITE} · Engage. Educate. Empower.`;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);
}

export default usePageMeta;
