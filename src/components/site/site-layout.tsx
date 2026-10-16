import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resources from '@/data/resources.json';

export function SiteHeader({ current = '' }: { current?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="header-inner"><Link to="/" className="wordmark" aria-label="Adventist City Missions home">ACM</Link><nav className="desktop-nav" aria-label="Main navigation">{resources.map(r => <a key={r.slug} href={`/${r.slug}`} className={`nav-link ${current === r.slug ? 'active' : ''}`}>{r.title}</a>)}</nav><Button className="menu-toggle" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</Button></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home Page</Link>{resources.map(r => <a key={r.slug} href={`/${r.slug}`} className={`nav-link ${current === r.slug ? 'active' : ''}`} onClick={() => setOpen(false)}>{r.title}</a>)}</nav>}</header>;
}

export function PageHeading({ title }: { title: string }) {
  return <div className="page-heading"><h1><Link to="/">Adventist City Missions</Link></h1><h2>{title}</h2></div>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container"><p className="footer-email"><a href="mailto:dfiedler@adventistcitymissions.org">dfiedler@adventistcitymissions.org</a></p><div className="footer-bottom"><span>Copyright 2026.</span></div></div></footer>;
}