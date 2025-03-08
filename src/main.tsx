import { ReactFlowProvider } from '@xyflow/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { TooltipProvider } from './components/Tooltip.tsx';
import { Flow } from './Flow.tsx';
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
    // Catch-all route that redirects to the root path
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TooltipProvider delayDuration={0}>
      <RouterProvider router={router} />
    </TooltipProvider>
  </React.StrictMode>,
);
