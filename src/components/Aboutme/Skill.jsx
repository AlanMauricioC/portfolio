import React from "react";
import { LinearProgress, Grid, Typography } from "@material-ui/core";
import defaultSkill from "./default-skill.png";

export default function Skill({ percentage, image = defaultSkill, title }) {
  return (
    <Grid
      container
      alignItems="center"
      style={{ width: "100%", marginTop: 10 }}
    >
      <Grid item container alignItems="center" direction="column" xs={2}>
        <Grid item>
          <img alt="skill" src={image} width={30} />
        </Grid>
        <Grid item>
          <Typography variant="button" color="textPrimary">
            {title}
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="button" color="textPrimary">
          {percentage}%
        </Typography>
        <LinearProgress
          variant="determinate"
          value={percentage}
          color="secondary"
          style={{ width: "100%", height: 15 }}
        />
      </Grid>
    </Grid>
  );
}
