import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/loma-linda')({
  head: () => resourceHead("Loma Linda"),
  component: () => <ResourcePage slug="loma-linda" />,
});
