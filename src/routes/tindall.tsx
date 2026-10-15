import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/tindall')({
  head: () => resourceHead("J.H.N. Tindall Materials"),
  component: () => <ResourcePage slug="tindall" />,
});
