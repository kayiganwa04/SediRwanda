import React, { useState } from 'react';
import { Icon } from './Icons';
import { org } from '../data/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address doesn’t look right.';
  if (values.message.trim().length < 10) errors.message = 'Please write a few words so we know how to help.';
  return errors;
}

const encode = (data) => new URLSearchParams(data).toString();

/**
 * Contact form wired to Netlify Forms. A matching static form lives in
 * index.html so Netlify registers it at build time.
 */
export default function ContactForm({ subject = 'General enquiry' }) {
  const [values, setValues] = useState({ name: '', email: '', subject, message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...values }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus('success');
      setValues({ name: '', email: '', subject, message: '' });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="form__status form__status--success" role="status">
        <strong>Thank you, your message is on its way.</strong> We usually reply within two working days.
      </div>
    );
  }

  return (
    <form
      className="form"
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="visually-hidden" aria-hidden="true">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="form__row">
        <div className={`field${errors.name ? ' is-invalid' : ''}`}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && (
            <span className="field__error" id="contact-name-error">
              {errors.name}
            </span>
          )}
        </div>
        <div className={`field${errors.email ? ' is-invalid' : ''}`}>
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && (
            <span className="field__error" id="contact-email-error">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-subject">How can we help?</label>
        <select id="contact-subject" name="subject" value={values.subject} onChange={onChange}>
          <option>General enquiry</option>
          <option>I want to volunteer</option>
          <option>I want to donate or fund a project</option>
          <option>Partnership or sponsorship</option>
          <option>Media or press</option>
        </select>
      </div>

      <div className={`field${errors.message ? ' is-invalid' : ''}`}>
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={onChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message && (
          <span className="field__error" id="contact-message-error">
            {errors.message}
          </span>
        )}
      </div>

      {status === 'error' && (
        <div className="form__status form__status--error" role="alert">
          We couldn’t send your message. Please try again, or email us directly at{' '}
          <a href={`mailto:${org.email}`}>{org.email}</a>.
        </div>
      )}

      <div className="cluster">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Icon name="arrowRight" />
        </button>
        <span className="field__hint">We never share your details.</span>
      </div>
    </form>
  );
}
