import { ReactFlowProvider } from '@xyflow/react';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { TooltipProvider } from './components/Tooltip.tsx';
import { Flow } from './Flow.tsx';
import './index.css';

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      Redirecting to {to}...
    </div>
  );
};

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
    path: '/spark2025checklist',
    element: (
      <ExternalRedirect to="https://www.figma.com/design/gV50xRFbRvzi6vOVUgXZxv/Checklist?node-id=1-2&t=mKW18MDE7Na8Vazj-4" />
    ),
  },
  {
    path: '/spark2025deck',
    element: (
      <ExternalRedirect to="https://www.figma.com/slides/pob8Ta54ZwugxGMgjON8Bz/ricky-spark2025?node-id=3-2&t=8PFb34Dx7DDaVun0-1" />
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
      <RouterProvider router={router} />
    </TooltipProvider>
  </React.StrictMode>,
);
