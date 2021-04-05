import React, { useEffect, useState } from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";
import ContentsTitle from "../components/layout/ContentsTitle";
import ConnectionNetworkGraph from "../components/connections/ConnectionNetworkGraph";

import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import ConnectionNodeInformation from "../components/connections/ConnectionNodeInformation";

const Connections = () => {
  const [selectedNodes, setSelectedNodes] = useState(new Set());
  const [nodeCount, setNodeCount] = useState(0);
  const [info, setInfo] = useState({});
  const [graphMode, setGraphMode] = useState("radialin");

  const handleSelectedNodes = (nodes) => {
    setSelectedNodes(new Set(nodes));
    nodes.forEach((value) => {
      setInfo({
        nodeName: value.id,
      });
    });
  };

  return (
    <PageContainer>
      <ContentsTitle title={"Connections"} />
      <ContentsContainer>
        <NavigationBreadcrumbs
          firstName={"Connections"}
          firstLink={"/connections"}
        />
        <Container>
          <FormControl>
            <InputLabel id="select-label">Age</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={graphMode}
              onChange={(v) => {
                console.log(v.target.value);
                setGraphMode(v.target.value);
              }}
            >
              <MenuItem value={"bu"}>bu</MenuItem>
              <MenuItem value={"zin"}>zin</MenuItem>
              <MenuItem value={"radialin"}>radialin</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <ConnectionNetworkGraph
                selectedNodes={selectedNodes}
                handleSelectedNodes={handleSelectedNodes}
                setNodeCount={setNodeCount}
                graphMode={graphMode}
              />
            </Grid>
            <Grid item xs={7}>
              <h4>Information</h4>

              <ConnectionNodeInformation data={info} nodeCount={nodeCount} />
            </Grid>
          </Grid>
        </Container>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Connections;
