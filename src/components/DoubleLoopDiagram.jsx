import { ReactFlow, Handle, Position, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { colors } from '../styles/design-tokens';

// Custom node component voor de stappen
function StepNode({ data }) {
  return (
    <div
      className="flex flex-col items-center"
      style={{ width: 80 }}
    >
      {/* Invisible handles voor edge connections */}
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="bottom-source" style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Bottom} id="bottom-target" style={{ opacity: 0 }} />

      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-black"
        style={{ backgroundColor: colors.primary }}
      >
        {data.number}
      </div>
      <div className="mt-2 text-sm font-semibold text-center text-gray-800">
        {data.label}
      </div>
    </div>
  );
}

// Custom node component voor de capability box
function CapabilityNode({ data }) {
  return (
    <div
      className="text-center border-2 rounded-lg p-4 bg-white"
      style={{ borderColor: colors.primary, minWidth: 200 }}
    >
      {/* Invisible handles voor edge connections */}
      <Handle type="target" position={Position.Top} id="top" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Left} id="left" style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right} id="right" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ opacity: 0 }} />

      <div className="text-sm font-bold mb-1" style={{ color: colors.primary }}>
        {data.label}
      </div>
      <div className="text-xs text-gray-600">
        {data.subtitle}
      </div>
    </div>
  );
}

const nodeTypes = {
  step: StepNode,
  capability: CapabilityNode,
};

const nodes = [
  {
    id: '1',
    type: 'step',
    position: { x: 0, y: 0 },
    data: { number: '1', label: 'Exploratie' },
    draggable: false,
  },
  {
    id: '2',
    type: 'step',
    position: { x: 150, y: 0 },
    data: { number: '2', label: 'Prototype' },
    draggable: false,
  },
  {
    id: '3',
    type: 'step',
    position: { x: 300, y: 0 },
    data: { number: '3', label: 'Tests' },
    draggable: false,
  },
  {
    id: '4',
    type: 'step',
    position: { x: 450, y: 0 },
    data: { number: '4', label: 'Deploy' },
    draggable: false,
  },
  {
    id: '5',
    type: 'capability',
    position: { x: 200, y: 120 },
    data: {
      label: 'CAPABILITY VERANKERING',
      subtitle: 'Kennis · Tooling · Patronen in team'
    },
    draggable: false,
  },
];

const edges = [
  // Horizontale pijlen tussen stappen
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'straight',
    style: { stroke: '#9CA3AF', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF', width: 15, height: 15 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'straight',
    style: { stroke: '#9CA3AF', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF', width: 15, height: 15 },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'straight',
    style: { stroke: '#9CA3AF', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF', width: 15, height: 15 },
  },
  // Pijl van Deploy naar Capability box
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    sourceHandle: 'bottom-source',
    targetHandle: 'right',
    type: 'smoothstep',
    style: { stroke: '#9CA3AF', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#9CA3AF', width: 15, height: 15 },
  },
  // Terugkoppelpijl van Capability naar Exploratie (geel)
  {
    id: 'e5-1',
    source: '5',
    target: '1',
    sourceHandle: 'left',
    targetHandle: 'bottom-target',
    type: 'smoothstep',
    style: { stroke: colors.primary, strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: colors.primary, width: 15, height: 15 },
    label: '"Wat kunnen we nu meer?"',
    labelStyle: {
      fontSize: 11,
      fontStyle: 'italic',
      fill: '#6B7280',
    },
    labelBgStyle: {
      fill: '#F9FAFB',
      fillOpacity: 0.9,
    },
  },
];

export function DoubleLoopDiagram() {
  return (
    <div style={{ height: 280, width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
