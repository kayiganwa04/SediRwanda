import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe('App', () => {
  it('renders the home page', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Engage\. Educate\./);
    expect(screen.getAllByRole('link', { name: /donate/i }).length).toBeGreaterThan(0);
  });

  it('renders the contact form with accessible fields', () => {
    renderAt('/contact');
    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('redirects the legacy /home route to the homepage', () => {
    renderAt('/home');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Engage\. Educate\./);
  });

  it('shows a not-found page for unknown routes', () => {
    renderAt('/does-not-exist');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/couldn’t find that page/i);
  });
});
