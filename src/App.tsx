import {
  addEdge,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Node,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  useViewport,
  Viewport,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';
import { useCallback, useEffect, useState } from 'react';

import { UndoIcon } from '@primer/octicons-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { useWindowSize } from 'usehooks-ts';
import { atoms } from './atoms';
import { EmailNode } from './components/EmailNode';
import { LinkedInNode } from './components/LinkedInNode';
import { MemojiNode } from './components/MemojiNode';
import { MintlifyNode } from './components/MintlifyNode';
import { MosaicNode } from './components/MosaicNode';
import { RBCNode } from './components/RBCNode';
import { ResumeNode } from './components/ResumeNode';
import { TitleNode } from './components/TitleNode';
import { TwitterNode } from './components/TwitterNode';

const nodeTypes = {
  MemojiNode: MemojiNode,
  EmailNode: EmailNode,
  LinkedInNode: LinkedInNode,
  RBCNode: RBCNode,
  MosaicNode: MosaicNode,
  MintlifyNode: MintlifyNode,
  TwitterNode: TwitterNode,
  TitleNode: TitleNode,
  ResumeNode: ResumeNode,
};

const initialEdges = [{ id: '', source: '', target: '' }];

const defaultViewport: Viewport = { x: 0, y: 0, zoom: 0.9 };

const Flow = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState(initialEdges);
  const { screenToFlowPosition, setViewport } = useReactFlow();
  const viewport = useViewport();

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges],
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const [, setCurrentDraggingNode] = useAtom(atoms.currentDraggingNode);

  const resetViewport = useCallback(() => {
    setViewport(defaultViewport, { duration: 200 });
  }, [setViewport]);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (nodes.length > 0) return;
    setNodes([
      {
        id: 'MemojiNode',
        type: 'MemojiNode',
        position: screenToFlowPosition({ x: 30, y: 30 }),
        data: { value: 123 },
      },
      {
        id: 'EmailNode',
        type: 'EmailNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
      {
        id: 'LinkedInNode',
        type: 'LinkedInNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
      {
        id: 'RBCNode',
        type: 'RBCNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
      {
        id: 'MosaicNode',
        type: 'MosaicNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
      {
        id: 'MintlifyNode',
        type: 'MintlifyNode',
        position: { x: 100, y: 100 },
        data: { value: 123 },
      },
      {
        id: 'TwitterNode',
        type: 'TwitterNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
      {
        id: 'TitleNode',
        type: 'TitleNode',
        position: screenToFlowPosition({
          x: windowSize.width / 2,
          y: windowSize.height / 2,
        }),
        data: { value: 123 },
      },
      {
        id: 'ResumeNode',
        type: 'ResumeNode',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
    ]);
  }, [windowSize.width, nodes.length, screenToFlowPosition, windowSize.height]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultViewport={defaultViewport}
        proOptions={{ hideAttribution: true }}
        onNodeDragStart={(_, node) => setCurrentDraggingNode(node.id)}
        onNodeDragStop={() => setCurrentDraggingNode('')}
        zoomOnDoubleClick={false}
      >
        <Background
          color="#E6E6E6"
          gap={20}
          variant={BackgroundVariant.Dots}
          size={2.5}
        />
      </ReactFlow>
      <AnimatePresence>
        {(viewport.zoom != defaultViewport.zoom ||
          viewport.x != defaultViewport.x ||
          viewport.y != defaultViewport.y) && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={resetViewport}
            className="fixed bottom-5 right-5 z-10 flex rounded-full border border-gray-200 bg-white p-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-900 hover:shadow"
          >
            <UndoIcon />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export const App = () => (
  <ReactFlowProvider>
    <Flow />
  </ReactFlowProvider>
);
