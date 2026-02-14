import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from './router/app.router';
import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />;
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
