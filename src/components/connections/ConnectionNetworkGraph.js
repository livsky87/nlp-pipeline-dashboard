import ForceGraph2D from "react-force-graph-2d";
import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

const ConnectionNetworkGraph = ({
  selectedNodes,
  handleSelectedNodes,
  setNodeCount,
  graphMode,
}) => {
  const N = 30;
  const NODE_R = 5;

  const [data, setData] = useState(() => {
    const gData = {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          //target: Math.round(Math.random() * (id - 1)),
          target: 0,
        })),
    };

    // cross-link node objects
    gData.links.forEach((link) => {
      const a = gData.nodes[link.source];
      const b = gData.nodes[link.target];
      !a.neighbors && (a.neighbors = []);
      !b.neighbors && (b.neighbors = []);
      a.neighbors.push(b);
      b.neighbors.push(a);

      !a.links && (a.links = []);
      !b.links && (b.links = []);
      a.links.push(link);
      b.links.push(link);
    });

    return gData;
  }, []);

  useEffect(() => {
    var count = 0;
    const max = 50;
    var id = setInterval(() => {
      setData(({ nodes, links }) => {
        const id = nodes.length;

        const newNode = { id };
        const newLink = { source: id, target: 0 };
        const targetNode = nodes[0];

        !newNode.neighbors && (newNode.neighbors = []);
        !targetNode.neighbors && (targetNode.neighbors = []);
        newNode.neighbors.push(targetNode);
        targetNode.neighbors.push(newNode);

        !newNode.links && (newNode.links = []);
        !targetNode.links && (targetNode.links = []);
        newNode.links.push(newLink);
        targetNode.links.push(newLink);

        return {
          nodes: [...nodes, newNode],
          links: [...links, newLink],
        };
      });

      count++;
      setNodeCount(N + count);
      if (count >= max) clearInterval(id);
    }, 100);

    return () => clearInterval(id);
  }, []);

  const graphRef = useRef();
  const [highlightNodes, setHighlightNodes] = useState(new Set());
  const [highlightLinks, setHighlightLinks] = useState(new Set());
  const [hoverNode, setHoverNode] = useState(null);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };

  const handleNodeHover = (node) => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach((neighbor) => highlightNodes.add(neighbor));
      node.links.forEach((link) => highlightLinks.add(link));
    }

    setHoverNode(node || null);
    updateHighlight();
  };

  const handleLinkHover = (link) => {
    highlightNodes.clear();
    highlightLinks.clear();

    if (link) {
      highlightLinks.add(link);
      highlightNodes.add(link.source);
      highlightNodes.add(link.target);
    }

    updateHighlight();
  };

  const paintRing = useCallback(
    (node, ctx) => {
      // add ring just for highlighted nodes
      ctx.beginPath();
      ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
      ctx.fillStyle = node === hoverNode ? "red" : "orange";
      ctx.fill();
    },
    [hoverNode]
  );

  function paint({ id, x, y }, color, ctx) {
    ctx.beginPath();
    ctx.arc(x, y, id === 0 ? NODE_R : NODE_R * 0.3, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  function nodePaint(node, color, ctx) {
    ctx.fillStyle = selectedNodes.has(node) ? "darkorange" : "cadetblue";
    if (node.id === 0) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, NODE_R * 1.5, 0, 2 * Math.PI, false);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.arc(node.x, node.y, NODE_R * 0.5, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }

  return (
    <ForceGraph2D
      ref={graphRef}
      graphData={data}
      nodeRelSize={NODE_R}
      width={350}
      height={350}
      nodeLabel={"id"}
      dagMode={graphMode}
      //nodeVal={"size"}
      cooldownTicks={100}
      autoPauseRedraw={false}
      linkWidth={(link) => (highlightLinks.has(link) ? 5 : 1)}
      linkDirectionalParticles={1}
      linkDirectionalParticleWidth={(link) =>
        highlightLinks.has(link) ? 4 : 0
      }
      nodeCanvasObject={(node, ctx) => nodePaint(node, "cornflowerblue", ctx)}
      //nodePointerAreaPaint={nodePaint}
      onNodeHover={handleNodeHover}
      onLinkHover={handleLinkHover}
      onEngineStop={() => graphRef.current.zoomToFit(200)}
      onNodeClick={(node, event) => {
        if (event.ctrlKey || event.shiftKey || event.altKey) {
          // multi-selection
          selectedNodes.has(node)
            ? selectedNodes.delete(node)
            : selectedNodes.add(node);
        } else {
          // single-selection
          const untoggle = selectedNodes.has(node) && selectedNodes.size === 1;
          selectedNodes.clear();
          !untoggle && selectedNodes.add(node);
        }

        handleSelectedNodes(selectedNodes);
      }}
      onNodeDrag={(node, translate) => {
        if (selectedNodes.has(node)) {
          // moving a selected node
          [...selectedNodes]
            .filter((selNode) => selNode !== node) // don't touch node being dragged
            .forEach((node) =>
              ["x", "y"].forEach(
                (coord) => (node[`f${coord}`] = node[coord] + translate[coord])
              )
            ); // translate other nodes by same amount
        }
      }}
      onNodeDragEnd={(node) => {
        if (selectedNodes.has(node)) {
          // finished moving a selected node
          [...selectedNodes]
            .filter((selNode) => selNode !== node) // don't touch node being dragged
            .forEach((node) =>
              ["x", "y"].forEach((coord) => (node[`f${coord}`] = undefined))
            ); // unfix controlled nodes
        }
      }}
    />
  );
};

export default ConnectionNetworkGraph;
