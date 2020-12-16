import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

const Models = () => {
  return (
    <PageContainer>
      <ContentsTitle title={"Models"} />
      <ContentsContainer>
        <NavigationBreadcrumbs firstName={"Models"} firstLink={"/models"} />
      </ContentsContainer>
    </PageContainer>
  );
};

export default Models;
