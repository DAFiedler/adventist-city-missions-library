import { Button } from '@/components/ui/button';
import { SiteHeader, SiteFooter, PageHeading } from './site-layout';
import resources from '@/data/resources.json';
import covers from '@/data/covers.json';
import originalLayout from '@/data/original-layout.json';

export function resourceHead(title: string) {
  const description = `${title} — original documents, books, and recordings from Adventist City Missions.`;
  return { meta: [{ title: `${title} | Adventist City Missions` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Adventist City Missions` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}

type LayoutBlock = { kind: string; html?: string; label?: string; url?: string; external?: boolean; children?: LayoutBlock[] };
function OriginalBlocks({ blocks }: { blocks: LayoutBlock[] }) {
  return <>{blocks.map((block, i) => {
    if (block.kind === 'html') return <div key={i} className="original-copy download-heading" dangerouslySetInnerHTML={{ __html: block.html ?? '' }} />;
    if (block.kind === 'download') {
      const numberedLabel = block.label?.match(/^(\d+\.)\s+(.*)$/);
      return <div className="download-item" key={i}><Button variant="link" asChild className={`original-download${numberedLabel ? ' numbered-download' : ''}`}><a href={block.url} target="_blank" rel="noopener noreferrer" download={block.external ? undefined : true} aria-label={`${block.external ? 'Listen to' : 'Download'} ${block.label}`}>{numberedLabel ? <><span className="download-number">{numberedLabel[1]} </span><span className="download-title">{numberedLabel[2]}</span></> : block.label}</a></Button></div>;
    }
    return <div key={i} className={block.kind === 'row' ? 'download-columns' : 'download-column'}><OriginalBlocks blocks={block.children ?? []} /></div>;
  })}</>;
}

export function ResourcePage({ slug }: { slug: string }) {
  const resource = resources.find(r => r.slug === slug);
  const layout = (originalLayout as Record<string, { intro?: string; downloads?: LayoutBlock[] }>)[slug];
  if (!resource || !layout) return null;
  return <><SiteHeader current={slug} /><main className="site-container"><PageHeading title={resource.title} /><div className="resource-layout"><div className="original-copy" dangerouslySetInnerHTML={{ __html: layout.intro ?? '' }} /><div className="resource-downloads"><OriginalBlocks blocks={layout.downloads ?? []} />{slug === 'daf-pubs' && <div className="cover-grid">{covers.map(c => <a href={c.href} target="_blank" rel="noopener noreferrer" key={c.title} className="publication-cover"><img src={c.src} alt={`${c.title} book cover`} loading="lazy" width={500} height={750} /></a>)}</div>}</div></div></main><SiteFooter /></>;
}