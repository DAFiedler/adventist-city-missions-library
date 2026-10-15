import { createFileRoute } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, BookOpen, Files, HeartPulse, Film, Library, FileText, ScrollText, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from '@/components/site/site-layout';
import { resourceHead } from '@/components/site/resource-page';
import resources from '@/data/resources.json';
import cityImage from '@/assets/city-morning.jpg';

export const Route = createFileRoute('/')({
  head: () => resourceHead('Home Page'),
  component: Index,
});
const icons = [BookOpen, Files, ScrollText, HeartPulse, Library, FileText, Stethoscope, Film, Files, BookOpen];
function Index() {
  return <><SiteHeader /><main>
    <section className="hero"><img className="hero-image" src={cityImage} alt="Sunlit city streets and a neighborhood overlooking the skyline" width={1920} height={1024} fetchPriority="high" /><div className="site-container hero-content"><div className="eyebrow"><span className="eyebrow-line" />Home Page</div><h1>Adventist<br />City Missions</h1><p className="hero-description">Today, it's just a bare bones method to offer the world the chance to enjoy some materials that I think are of value.</p><div className="hero-action"><Button asChild size="lg" className="hero-button"><a href="#resources">Explore the materials <ArrowDown /></a></Button></div></div></section>
    <section id="resources" className="resource-section"><div className="site-container"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />The collection</div><h2>Materials worth sharing.</h2></div><span className="text-xs text-muted-foreground hidden sm:block">Books, presentations &amp; videos</span></div><div className="resource-grid">{resources.map((r,i) => { const Icon = icons[i] ?? FileText; const formats = [...new Set(r.blocks.filter(b=>b.kind==='download').map(b=>b.type))].join(' · '); return <a className="resource-card" key={r.slug} href={`/${r.slug}`}><div className="resource-card-top"><span className="resource-icon"><Icon size={23} strokeWidth={1.6} /></span><span className="resource-number">{String(i+1).padStart(2,'0')}</span></div><h3>{r.title}</h3><div className="resource-meta"><span>{r.count} resources</span><span>{formats}</span></div><div className="resource-card-link">View materials<ArrowUpRight size={17} /></div></a>; })}</div></div></section>
    <section className="about-section"><div className="site-container about-layout"><div className="about-heading"><div className="eyebrow"><span className="eyebrow-line" />A personal note</div><h2>Home Page</h2></div><div className="original-copy"><p>Some day, this may be a fancy website... but not today. Today, it's just a bare bones method to offer the world the chance to enjoy some materials that I think are of value. The major categories are listed in the horizontal menu across the top of the screen. Unless you're using anything smaller than a decently large computer monitor. Tablet and cell phone users may consider themselves fortunate or clever if they manage to even find a menu, let alone make anything else here work. My apologies.</p><p>If you find the menu, all you need to know is that each page has files to download, and sometimes a little explanation. Not a lot of explanation.... Sorry, you're largely on your own. You could always send me an email. I may be able to help. Or maybe not. But I'm happy to try. I'm just not going to take the time to turn this website into some sort of major production. I'm just trying to share stuff.</p></div></div></section>
  </main><SiteFooter /></>;
}
