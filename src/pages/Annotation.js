import React from "react";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

const Annotation = () => {
  return (
    <PageContainer>
      <ContentsTitle title={"Annotation"} />
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
