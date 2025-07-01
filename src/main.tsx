import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactFlowProvider } from '@xyflow/react';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { TooltipProvider } from './components/tooltip.tsx';
import { Flow } from './flow.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={0}>
      <NuqsAdapter>
        <RouterProvider router={router} />
      </NuqsAdapter>
    </TooltipProvider>
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>,
);
