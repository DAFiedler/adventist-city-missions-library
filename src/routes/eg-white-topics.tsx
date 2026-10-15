import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/eg-white-topics')({
  head: () => resourceHead("E.G. White Topics"),
  component: () => <ResourcePage slug="eg-white-topics" />,
});
