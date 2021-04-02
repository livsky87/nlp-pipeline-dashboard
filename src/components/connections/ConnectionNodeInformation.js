import React from "react";

const ConnectionNodeInformation = ({ data }) => {
  const info = data ? data : {};
  return (
    <div>
      <div>node id : {info.nodeName}</div>
      <div>something infos</div>
    </div>
  );
};

export default ConnectionNodeInformation;
