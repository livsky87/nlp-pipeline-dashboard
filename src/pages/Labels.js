import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

const Labels = () => {
  return (
    <PageContainer>
      <ContentsTitle title={"Labels"} />
      <ContentsContainer>
        <NavigationBreadcrumbs firstName={"Labels"} firstLink={"/labels"} />
      </ContentsContainer>
    </PageContainer>
  );
};

export default Labels;
