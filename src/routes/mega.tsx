import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/mega')({
  head: () => resourceHead("Mega Clinic Videos"),
  component: () => <ResourcePage slug="mega" />,
});
