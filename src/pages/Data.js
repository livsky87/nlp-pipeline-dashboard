import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";
import ContentsTitle from "../components/layout/ContentsTitle";

const Data = () => {
  return (
    <PageContainer>
      <ContentsTitle title={"Data"} />
      <ContentsContainer>
        <NavigationBreadcrumbs firstName={"Data"} firstLink={"/data"} />
      </ContentsContainer>
    </PageContainer>
  );
};

export default Data;
