import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";
import ContentsTitle from "../components/layout/ContentsTitle";
import ConnectionNetworkGraph from "../components/graph/ConnectionNetworkGraph";

import { Container, Grid } from "@material-ui/core";

const Connections = () => {
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
              <ConnectionNetworkGraph />
            </Grid>
            <Grid item xs={7}>
              <span>Information</span>
            </Grid>
          </Grid>
        </Container>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Connections;
