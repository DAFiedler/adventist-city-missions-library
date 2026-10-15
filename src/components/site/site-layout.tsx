import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Menu, X, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resources from '@/data/resources.json';

export function SiteHeader({ current = '' }: { current?: string }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="site-container header-inner">
      <Link to="/" className="wordmark" aria-label="Adventist City Missions home"><span className="wordmark-name"><span>Adventist</span><span>City Missions<span className="text-gold inline!">.</span></span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link to="/" className={`nav-link ${!current ? 'active' : ''}`}>Home</Link>
        <Link to="/daf-pubs" className={`nav-link ${current === 'daf-pubs' ? 'active' : ''}`}>Publications</Link>
        <Link to="/daf-presentations" className={`nav-link ${current === 'daf-presentations' ? 'active' : ''}`}>Presentations</Link>
        <Link to="/mega" className={`nav-link ${current === 'mega' ? 'active' : ''}`}>Mega Clinic Videos</Link>
        <Button variant="ghost" asChild><a href="/#resources">All Resources <ArrowUpRight /></a></Button>
      </nav>
      <Button className="menu-toggle" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"><Link to="/" className="nav-link" onClick={() => setOpen(false)}>Home Page</Link>{resources.map(r => <a key={r.slug} href={`/${r.slug}`} className={`nav-link ${current === r.slug ? 'active' : ''}`} onClick={() => setOpen(false)}>{r.title}</a>)}</nav>}
  </header>;
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="site-container footer-inner"><Link to="/" className="footer-name">Adventist City Missions</Link><a href="mailto:dfiedler@adventistcitymissions.org" className="footer-note flex items-center gap-2"><Mail size={14} />dfiedler@adventistcitymissions.org</a><span className="footer-note">Copyright 2026.</span></div></footer>;
}
