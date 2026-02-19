import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { appRouter } from './router/app.router';
import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FavoriteHeroProvider } from './modules/heroes/context/FavoriteHeroContext';

const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools />
      </FavoriteHeroProvider>
    </QueryClientProvider>
  );
};
