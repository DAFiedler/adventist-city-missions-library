import { Fragment } from 'react';
import { Link } from '@tanstack/react-router';
import { ChevronRight, FileText, Download, Film, Headphones, Image, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter } from './site-layout';
import resources from '@/data/resources.json';
import covers from '@/data/covers.json';

export function resourceHead(title: string) {
  const description = `${title} — original documents, books, and recordings from Adventist City Missions.`;
  return { meta: [{ title: `${title} | Adventist City Missions` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Adventist City Missions` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export function ResourcePage({ slug }: { slug: string }) {
  const resource = resources.find(r => r.slug === slug);
  if (!resource) return null;
  const groups: { kind: string; blocks: typeof resource.blocks }[] = [];
  for (const block of resource.blocks) {
    const last = groups.at(-1);
    if (last?.kind === block.kind) last.blocks.push(block);
    else groups.push({ kind: block.kind, blocks: [block] });
  }
  return <><SiteHeader current={slug} /><main><section className="page-header"><div className="site-container"><div className="breadcrumbs"><Link to="/">Home Page</Link><ChevronRight size={12} /><a href="/#resources">Resources</a><ChevronRight size={12} /><span>{resource.title}</span></div><div className="eyebrow text-primary"><span className="eyebrow-line" />Adventist City Missions</div><h1>{resource.title}</h1></div></section><div className="site-container page-body">
    {groups.map((group, i) => <Fragment key={i}>{group.kind === 'html' ? <div className="page-prose original-copy">{group.blocks.map((b,j) => <div key={j} dangerouslySetInnerHTML={{ __html: b.html ?? '' }} />)}</div> : <div className="download-list mb-9">{group.blocks.map((b,j) => {
      const Icon = b.type === 'MP4' ? Film : b.type === 'Audio' ? Headphones : b.type === 'Image' ? Image : FileText;
      return <article key={j} className="download-item"><span className="resource-icon"><Icon size={21} /></span><div className="download-content"><h3>{b.label}</h3><p className="download-type">{b.type}</p></div><Button size="lg" className="download-button" asChild><a href={b.url} target="_blank" rel="noopener noreferrer" download={b.external ? undefined : true} aria-label={`${b.external ? 'Listen to' : 'Download'} ${b.label}`}>{b.external ? <ArrowUpRight /> : <Download />}{b.external ? 'Listen' : 'Download'}</a></Button></article>;
    })}</div>}</Fragment>)}
    {slug === 'daf-pubs' && <div className="cover-grid">{covers.map(c => <a href={c.href} target="_blank" rel="noopener noreferrer" key={c.title} className="publication-cover"><img src={c.src} alt={`${c.title} book cover`} loading="lazy" width={500} height={750} /><span>{c.title}</span></a>)}</div>}
  </div></main><SiteFooter /></>;
}
