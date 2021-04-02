import NavigationBreadcrumbs from '../layout/Breadcrumbs'
import ForceGraph2D from 'react-force-graph-2d'
import ContentsContainer from '../layout/ContentsContainer'
import React, { useRef } from 'react'

const aaaa = () => {

  const graphRef = useRef();
  // Random tree
  const N = 80;
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

  const NODE_R = 20;

  const highlightNodes = new Set();
  const highlightLinks = new Set();
  let hoverNode = null;

  //const Graph = ForceGraph2D;
  //Graph.linkDirectionalParticleColor(() => "red");
  //Graph.onLinkClick(Graph.emitParticle);
  return {

  <ForceGraph2D
    ref={graphRef}
    graphData={gData}
    nodeRelSize={NODE_R}
    onNodeHover={(node) => {
      highlightNodes.clear();
      highlightLinks.clear();
      if (node) {
        highlightNodes.add(node);
        node.neighbors.forEach((neighbor) =>
          highlightNodes.add(neighbor)
        );
        node.links.forEach((link) => highlightLinks.add(link));
      }

      hoverNode = node || null;
      //elem.style.cursor = node ? '-webkit-grab' : null;
    }}
    onLinkHover={(link) => {
      highlightNodes.clear();
      highlightLinks.clear();

      if (link) {
        highlightLinks.add(link);
        highlightNodes.add(link.source);
        highlightNodes.add(link.target);
      }
    }}
    dagMode={"radialin"}
    autoPauseRedraw={false}
    linkDirectionalParticles={4}
    linkWidth={(link) => (highlightLinks.has(link) ? 5 : 1)}
    linkDirectionalParticleWidth={(link) =>
      highlightLinks.has(link) ? 4 : 0
    }
    //nodeId={"path"}
    //nodeLabel={"path"}
    //nodeVal={(node) => 100 / (node.level + 1)}
    dagLevelDistance={100}
    nodeCanvasObjectMode={(node) =>
      highlightNodes.has(node) ? "before" : undefined
    }
    nodeCanvasObject={(node, ctx) => {
      // add ring just for highlighted nodes
      ctx.beginPath();
      ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
      ctx.fillStyle = node === hoverNode ? "red" : "orange";
      ctx.fill();
    }}
  />
  }
}
