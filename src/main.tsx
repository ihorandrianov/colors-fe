import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { PageWithColors } from './pages/PageWithColors';
import { Layout } from './pages/Layout';
import { OneColorPage } from './pages/OneColorPage';
import { getColors, searchColor } from './client/client';
import { ErrorPage } from './pages/ErrorPage';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageWithColors fn={getColors} />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/color/:id',
        element: <OneColorPage />,
      },
      {
        path: '/group/:name',
        element: <PageWithColors fn={getColors} />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/search/:query',
        element: <PageWithColors fn={searchColor} />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
