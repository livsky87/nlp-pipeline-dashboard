import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  titleContainer: {
    display: "flex",
    minHeight: 50,
    alignItems: "center",
  },
  title: {
    minWidth: 150,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: theme.spacing(3),
  },
  optionArea: {
    display: "flex",
    flex: "auto",
    justifyContent: "right",
    margin: 5,
  },
}));

const ContentsTitle = ({ title, optButton1, optButton2 }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <div className={classes.titleContainer}>
        <div className={classes.title}>{title}</div>
        <div className={classes.optionArea}>
          {optButton1}
          {optButton2}
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ContentsTitle;
