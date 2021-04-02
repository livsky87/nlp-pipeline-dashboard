import React, { useEffect, useState } from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";
import ContentsTitle from "../components/layout/ContentsTitle";
import ConnectionNetworkGraph from "../components/connections/ConnectionNetworkGraph";

import { Container, Grid } from "@material-ui/core";
import ConnectionNodeInformation from "../components/connections/ConnectionNodeInformation";

const Connections = () => {
  const [selectedNodes, setSelectedNodes] = useState(new Set());
  const [info, setInfo] = useState({});

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
          <Grid container spacing={3}>
            <Grid item xs={5}>
              <ConnectionNetworkGraph
                selectedNodes={selectedNodes}
                handleSelectedNodes={handleSelectedNodes}
              />
            </Grid>
            <Grid item xs={7}>
              <h4>Information</h4>

              <ConnectionNodeInformation data={info} />
            </Grid>
          </Grid>
        </Container>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Connections;
