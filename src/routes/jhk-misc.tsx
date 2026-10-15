import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/jhk-misc')({
  head: () => resourceHead("J.H. Kellogg Miscellaneous"),
  component: () => <ResourcePage slug="jhk-misc" />,
});
