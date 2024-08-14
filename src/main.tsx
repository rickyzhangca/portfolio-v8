import { ReactFlowProvider } from '@xyflow/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
