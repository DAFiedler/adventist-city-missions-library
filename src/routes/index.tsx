import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader, SiteFooter, PageHeading } from '@/components/site/site-layout';
import { resourceHead } from '@/components/site/resource-page';
import originalLayout from '@/data/original-layout.json';

export const Route = createFileRoute('/')({
  head: () => resourceHead('Home Page'),
  component: Index,
});

function Index() {
  return <><SiteHeader /><main className="site-container"><PageHeading title="Home Page" /><div className="home-columns original-copy">{originalLayout.home.columns.map((html, i) => <div key={i} dangerouslySetInnerHTML={{ __html: html }} />)}</div></main><SiteFooter /></>;
}