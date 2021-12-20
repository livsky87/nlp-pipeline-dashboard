import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigationBreadcrumbs from "../components/layout/Breadcrumbs";
import ContentsTitle from "../components/layout/ContentsTitle";
import ContentsContainer, {
  PageContainer,
} from "../components/layout/ContentsContainer";

import { Button, Box, chipClasses, Divider } from "@mui/material";
import { FormatListBulleted, Save } from "@mui/icons-material";
import AnnotationList from "./AnnotationList";
import { Chip, Grid, Paper, Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
}));

const Annotation = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();

  return (
    <PageContainer>
      <ContentsTitle
        title={"Annotation"}
        optButton1={<Button startIcon={<FormatListBulleted />}>List</Button>}
        optButton2={<Button startIcon={<Save />}>Save</Button>}
      />
      <ContentsContainer>
        {/**
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
        */}
        <Paper elevation={1}>
          <Grid container style={{ alignItems: "center" }}>
            <Grid item xs={3}>
              <div className={classes.contentContainer}>
                <Chip
                  label={"Tag"}
                  style={{ width: "90%" }}
                  variant="outlined"
                />
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className={classes.contentContainer}>Tags</div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.contentContainer}>
                <Chip
                  label={"Label"}
                  style={{ width: "90%" }}
                  variant="outlined"
                  onClick={() => {
                    console.log("label");
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className={classes.contentContainer}>Labels</div>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.contentContainer}>
                <Chip
                  label={"Annotated"}
                  style={{ width: "90%" }}
                  variant="outlined"
                  onClick={() => {
                    console.log("label");
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={8}>
                  <div className={classes.contentContainer}>
                    <Button
                      style={{
                        minWidth: "30px",
                        maxWidth: "70px",
                        height: 30,
                        fontSize: 12,
                      }}
                      variant="outlined"
                    >
                      {"이름"}
                    </Button>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.contentContainer}>label</div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <div className={classes.contentContainer}>
                <Chip
                  label={"Predicted"}
                  style={{ width: "90%" }}
                  variant="outlined"
                  onClick={() => {
                    console.log("label");
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={9}>
              <Grid container>
                <Grid item xs={8}>
                  <div className={classes.contentContainer}>predicted tags</div>
                </Grid>
                <Grid item xs={4}>
                  <div className={classes.contentContainer}>
                    predicted label
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </ContentsContainer>
    </PageContainer>
  );
};

export default Annotation;
