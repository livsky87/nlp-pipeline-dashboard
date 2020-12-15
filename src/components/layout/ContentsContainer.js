import React from "react";
import { Redirect, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";

import { Overview, Annotation, Labels, Data, Models } from "../../pages";
import Copyright from "./Copyright";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const ContentsContainer = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Route exact path="/">
          <Redirect to="/overview" />
        </Route>
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/data" component={Data} />
        <Route exact path="/labels" component={Labels} />
        <Route exact path="/annotation" component={Annotation} />
        <Route exact path="/models" component={Models} />
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
};

export default ContentsContainer;
