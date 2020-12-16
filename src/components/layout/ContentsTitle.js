import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  titleContainer: {
    display: "flex",
    minHeight: "40px",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: theme.spacing(3),
  },
}));

const ContentsTitle = ({ title }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <div className={classes.titleContainer}>
        <span className={classes.title}>{title}</span>
      </div>
      <Divider />
    </div>
  );
};

export default ContentsTitle;
