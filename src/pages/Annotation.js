import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

import { Button, Box } from "@mui/material";
import { FormatListBulleted, Save } from "@mui/icons-material";
import AnnotationList from "./AnnotationList";
import { Grid } from "@material-ui/core";

const Annotation = ({ match }) => {
  const { id } = match.params;

  return (
    <PageContainer>
      <ContentsTitle
        title={"Annotation"}
        optButton1={<Button startIcon={<FormatListBulleted />}>List</Button>}
        optButton2={<Button startIcon={<Save />}>Save</Button>}
      />
      <ContentsContainer>
        <NavigationBreadcrumbs
          firstName={"Annotation"}
          firstLink={"/annotaion"}
        />
        <Grid container spacing={1}>
          <Grid item xl={4} lg={12} md={12} sm={12} xs={12}>
            <AnnotationList />
          </Grid>
          <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
            <div>sdafsdaf</div>
          </Grid>
        </Grid>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Annotation;
