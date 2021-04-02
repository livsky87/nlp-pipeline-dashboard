import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import StorageIcon from "@material-ui/icons/Storage";
import LabelIcon from "@material-ui/icons/Label";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

import { useHistory } from "react-router-dom";

export const MainListItems = () => {
  let history = useHistory();

  return (
    <div>
      <ListItem button onClick={() => history.push("/overview")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItem>
      <ListItem button onClick={() => history.push("/connections")}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Connections" />
      </ListItem>
      <ListItem button onClick={() => history.push("/data")}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="Data" />
      </ListItem>
      <ListItem button onClick={() => history.push("/labels")}>
        <ListItemIcon>
          <LabelIcon />
        </ListItemIcon>
        <ListItemText primary="Labels" />
      </ListItem>
      <ListItem button onClick={() => history.push("/annotation")}>
        <ListItemIcon>
          <EditAttributesIcon />
        </ListItemIcon>
        <ListItemText primary="Annotation" />
      </ListItem>
      <ListItem button onClick={() => history.push("/models")}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Models" />
      </ListItem>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
