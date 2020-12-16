import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Annotation, Data, Labels, Models, Overview } from "../../pages";
import { PageContainer } from "./ContentsContainer";

const Routers = () => {
  return (
    <PageContainer>
      <Route exact path="/">
        <Redirect to="/overview" />
      </Route>
      <Route exact path="/overview" component={Overview} />
      <Route exact path="/data" component={Data} />
      <Route exact path="/labels" component={Labels} />
      <Route exact path="/annotation" component={Annotation} />
      <Route exact path="/models" component={Models} />
    </PageContainer>
  );
};

export default Routers;
