import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/daf-presentations')({
  head: () => resourceHead("Dave Fiedler Presentations"),
  component: () => <ResourcePage slug="daf-presentations" />,
});
