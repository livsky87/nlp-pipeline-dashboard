import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

import { Button } from "@mui/material";
import { FormatListBulleted, Save } from "@mui/icons-material";

const Annotation = () => {
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
      </ContentsContainer>
    </PageContainer>
  );
};

export default Annotation;
