import React, { Fragment } from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip } from "@material-ui/core";

export default function MenuItem({title,Icon}) {
  return (
    <Fragment>
      <ListItemIcon>
        <Tooltip
          title={<span style={{ fontSize: 18 }}>{title}</span>}
          placement="right"
        >
          <Icon />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary={title} />
    </Fragment>
  );
}
