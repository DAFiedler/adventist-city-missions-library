import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/daf-pubs')({
  head: () => resourceHead("Dave Fiedler Publications"),
  component: () => <ResourcePage slug="daf-pubs" />,
});
