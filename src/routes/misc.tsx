import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/misc')({
  head: () => resourceHead("General Miscellaneous"),
  component: () => <ResourcePage slug="misc" />,
});
