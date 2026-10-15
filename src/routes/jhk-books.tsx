import { createFileRoute } from '@tanstack/react-router';
import { ResourcePage, resourceHead } from '@/components/site/resource-page';
export const Route = createFileRoute('/jhk-books')({
  head: () => resourceHead("J.H. Kellogg Books"),
  component: () => <ResourcePage slug="jhk-books" />,
});
