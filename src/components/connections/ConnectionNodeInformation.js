import React from "react";

const ConnectionNodeInformation = ({ data, nodeCount }) => {
  const info = data ? data : {};
  return (
    <div>
      <div>node count: {nodeCount}</div>
      <div>node id : {info.nodeName}</div>
      <div>something infos</div>
    </div>
  );
};

export default ConnectionNodeInformation;
