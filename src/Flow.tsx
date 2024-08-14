import * as Portal from '@radix-ui/react-portal';
import {
  addEdge,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  Connection,
  Node,
  NodeChange,
  ReactFlow,
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
import { FunNode } from './components/FunNode';
import { LinkedInNode } from './components/LinkedInNode';
import { MemojiNode } from './components/MemojiNode';
import { MintlifyNode } from './components/MintlifyNode';
import { MoreNode } from './components/MoreNode';
import { MosaicNode } from './components/MosaicNode';
import { NoteNode } from './components/NoteNode';
import { RBCNode } from './components/RBCNode';
import { ResumeNode } from './components/ResumeNode';
import { TwitterNode } from './components/TwitterNode';
import { Contents } from './pages';

const nodeTypes = {
  MemojiNode: MemojiNode,
  EmailNode: EmailNode,
  LinkedInNode: LinkedInNode,
  RBCNode: RBCNode,
  MosaicNode: MosaicNode,
  MintlifyNode: MintlifyNode,
  TwitterNode: TwitterNode,
  ResumeNode: ResumeNode,
  NoteNode: NoteNode,
  MoreNode: MoreNode,
  FunNode: FunNode,
};

const defaultViewport: Viewport = { x: 0, y: 0, zoom: 0.9 };

export const Flow = () => {
  const [displayContent, setDisplayContent] = useAtom(atoms.displayContent);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState([]);
  const { screenToFlowPosition, setViewport } = useReactFlow();
  const viewport = useViewport();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );

  const [, setCurrentDraggingNode] = useAtom(atoms.currentDraggingNode);

  const windowSize = useWindowSize();

  const resetNodes = useCallback(() => {
    setNodes([
      {
        id: 'MemojiNode',
        type: 'MemojiNode',
        position: screenToFlowPosition({ x: 24, y: 24 }),
        data: { value: 123 },
      },
      {
        id: 'EmailNode',
        type: 'EmailNode',
        position: { x: 105, y: 105 },
        data: { value: 123 },
      },
      {
        id: 'NoteNode',
        type: 'NoteNode',
        position: screenToFlowPosition({
          x: 120,
          y: 310,
        }),
        data: { value: 123 },
      },
      {
        id: 'ResumeNode',
        type: 'ResumeNode',
        position: screenToFlowPosition({
          x: 450,
          y: 580,
        }),
        data: { value: 123 },
      },
      {
        id: 'MintlifyNode',
        type: 'MintlifyNode',
        position: screenToFlowPosition({
          x: 515,
          y: 160,
        }),
        data: { value: 123 },
      },
      {
        id: 'RBCNode',
        type: 'RBCNode',
        position: screenToFlowPosition({
          x: 770,
          y: 300,
        }),
        data: { value: 123 },
      },
      {
        id: 'MosaicNode',
        type: 'MosaicNode',
        position: screenToFlowPosition({
          x: 900,
          y: 590,
        }),
        data: { value: 123 },
      },
      {
        id: 'TwitterNode',
        type: 'TwitterNode',
        position: screenToFlowPosition({
          x: windowSize.width - 160,
          y: 30,
        }),
        data: { value: 123 },
      },
      {
        id: 'LinkedInNode',
        type: 'LinkedInNode',
        position: screenToFlowPosition({
          x: windowSize.width - 300,
          y: 50,
        }),
        data: { value: 123 },
      },
      {
        id: 'MoreNode',
        type: 'MoreNode',
        position: screenToFlowPosition({
          x: 1200,
          y: 240,
        }),
        data: { value: 123 },
      },
      {
        id: 'FunNode',
        type: 'FunNode',
        position: screenToFlowPosition({
          x: 1200,
          y: 480,
        }),
        data: { value: 123 },
      },
    ]);
  }, [screenToFlowPosition, windowSize.width]);

  const resetFlow = useCallback(() => {
    setViewport(defaultViewport, { duration: 200 });
    resetNodes();
  }, [setViewport, resetNodes]);

  useEffect(() => {
    if (nodes.length > 0) return;
    resetNodes();
  }, [
    windowSize.width,
    nodes.length,
    screenToFlowPosition,
    windowSize.height,
    setViewport,
    resetNodes,
  ]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultViewport={defaultViewport}
        proOptions={{ hideAttribution: true }}
        onNodeDragStart={(_, node) => setCurrentDraggingNode(node.id)}
        onNodeDragStop={() => setCurrentDraggingNode('')}
        zoomOnDoubleClick={false}
        panOnScroll
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
            onClick={resetFlow}
            className="fixed bottom-5 right-5 z-10 flex rounded-full bg-gray-900 p-3 text-white/80 transition hover:bg-gray-700 hover:text-white hover:shadow-lg"
          >
            <UndoIcon />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {displayContent && (
          <Portal.Root onClick={() => setDisplayContent(null)}>
            {Contents[displayContent]}
            <motion.div
              className="fixed inset-0 z-10 bg-white/50 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
            />
          </Portal.Root>
        )}
      </AnimatePresence>
    </div>
  );
};
