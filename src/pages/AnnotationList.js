import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FixedSizeList } from "react-window";
import { useHistory } from "react-router-dom";

function RenderRow(props) {
  let history = useHistory();
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton onClick={() => history.push(`/annotation/${index + 1}`)}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const AnnotationList = () => {
  return (
    <FixedSizeList
      height={400}
      width={360}
      itemSize={46}
      itemCount={200}
      overscanCount={5}
    >
      {RenderRow}
    </FixedSizeList>
  );
};

export default AnnotationList;
