import * as Portal from '@radix-ui/react-portal';
import {
  addEdge,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  type Connection,
  type Node,
  type NodeChange,
  ReactFlow,
  useReactFlow,
  useViewport,
  type Viewport,
} from '@xyflow/react';
import '@xyflow/react/dist/base.css';

import { ArrowUUpLeftIcon } from '@phosphor-icons/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { parseAsString, useQueryState } from 'nuqs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { atoms } from './atoms';
import { EmailNode } from './components/email-node/email-node';
import { FunNode } from './components/fun-node/fun-node';
import { LinkedInNode } from './components/linkedin-node/linkedin-node';
import { MemojiNode } from './components/memoji-node/memoji-node';
import { MintlifyNode } from './components/mintlify-node/mintlify-node';
import { MoreNode } from './components/more-node/more-node';
import { MosaicNode } from './components/mosaic-node/mosaic-node';
import { NoteNode } from './components/note-node/note-node';
import { RBCNode } from './components/rbc-node/rbc-node';
import { ResumeNode } from './components/resume-node/resume-node';
import { SwagNode } from './components/swag-node/swag-node';
import { TwitterNode } from './components/twitter-node/twitter-node';
import { WSNode } from './components/ws-node/ws-node';
import { Contents } from './pages';

const nodeTypes = {
  MemojiNode: MemojiNode,
  EmailNode: EmailNode,
  LinkedInNode: LinkedInNode,
  RBCNode: RBCNode,
  MosaicNode: MosaicNode,
  MintlifyNode: MintlifyNode,
  WSNode: WSNode,
  TwitterNode: TwitterNode,
  ResumeNode: ResumeNode,
  NoteNode: NoteNode,
  MoreNode: MoreNode,
  FunNode: FunNode,
  SwagNode: SwagNode,
};

const defaultViewport: Viewport = { x: 0, y: 0, zoom: 0.9 };

export const Flow = () => {
  const [page, setPage] = useQueryState('page', parseAsString);
  const [displayContent, setDisplayContent] = useAtom(atoms.displayContent);

  const isSyncingRef = useRef(false);

  // sync URL -> state
  // biome-ignore lint/correctness/useExhaustiveDependencies: prevent double sync
  useEffect(() => {
    if (isSyncingRef.current) {
      isSyncingRef.current = false;
      return;
    }
    if (page !== displayContent) {
      isSyncingRef.current = true;
      setDisplayContent(page as keyof typeof Contents | null);
    }
  }, [page]);

  // sync state -> URL
  useEffect(() => {
    if (isSyncingRef.current) {
      isSyncingRef.current = false;
      return;
    }
    if (displayContent !== page) {
      isSyncingRef.current = true;
      setPage(displayContent);
    }
  }, [displayContent, page, setPage]);

  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState([]);
  const { screenToFlowPosition, setViewport } = useReactFlow();
  const viewport = useViewport();

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [],
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
          x: 100,
          y: 300,
        }),
        data: { value: 123 },
      },
      {
        id: 'ResumeNode',
        type: 'ResumeNode',
        position: screenToFlowPosition({
          x: 450,
          y: 620,
        }),
        data: { value: 123 },
      },
      {
        id: 'MosaicNode',
        type: 'MosaicNode',
        position: screenToFlowPosition({
          x: 460 + 220 * 3,
          y: 140 + 80 * 3,
        }),
        data: { value: 123 },
      },
      {
        id: 'RBCNode',
        type: 'RBCNode',
        position: screenToFlowPosition({
          x: 460 + 220 * 2,
          y: 140 + 80 * 2,
        }),
        data: { value: 123 },
      },
      {
        id: 'MintlifyNode',
        type: 'MintlifyNode',
        position: screenToFlowPosition({
          x: 460 + 220,
          y: 140 + 80,
        }),
        data: { value: 123 },
      },
      {
        id: 'WSNode',
        type: 'WSNode',
        position: screenToFlowPosition({
          x: 460,
          y: 140,
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
          x: 1300,
          y: 160,
        }),
        data: { value: 123 },
      },
      {
        id: 'FunNode',
        type: 'FunNode',
        position: screenToFlowPosition({
          x: 1460,
          y: 540,
        }),
        data: { value: 123 },
      },
      {
        id: 'SwagNode',
        type: 'SwagNode',
        position: screenToFlowPosition({
          x: 1460,
          y: 360,
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
  }, [nodes.length, resetNodes]);

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
        {(viewport.zoom !== defaultViewport.zoom ||
          viewport.x !== defaultViewport.x ||
          viewport.y !== defaultViewport.y) && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            onClick={resetFlow}
            className="fixed right-5 bottom-5 z-10 flex rounded-full bg-gray-900 p-3 text-white/80 transition hover:bg-gray-700 hover:text-white hover:shadow-lg"
          >
            <ArrowUUpLeftIcon weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {displayContent && (
          <Portal.Root onClick={() => setDisplayContent(null)}>
            {Contents[displayContent]}
            <motion.div
              className="fixed inset-0 z-10 bg-black/10 backdrop-blur-lg"
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
