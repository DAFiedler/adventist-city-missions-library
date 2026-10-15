import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/hydro')({
  head: () => resourceHead("Hydrotherapy & Massage"),
  component: () => <ResourcePage slug="hydro" />,
});
