import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Box from "@material-ui/core/Box";
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
  page: {
    flex: 1,
  },
}));

const ContentsContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        {children}
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </main>
  );
};

export const PageContainer = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.page}>{children}</div>;
};

export default ContentsContainer;
