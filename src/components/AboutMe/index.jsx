import React from "react";
import { Typography, Grid, Avatar, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    //padding: theme.spacing(2),
    height: "100%",
  },
  container: {
    height: "100%",
  },
  avatar: {
    height: "22vw",
    width: "22vw",
    minWidth:200,
    minHeight:200
    // transform: 'rotate(35deg)',
  },
}));

const AboutMe = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          container
          xs={12}
          md={6}
          alignContent={"center"}
          justify={"center"}
          style={{ height: "100%" }}
        >
          <Grid item container alignContent={"center"} justify={"center"}>
            <Hidden mdUp>
            <Grid item xs={12}>
              <Grid item container alignContent={"center"} justify={"center"}>
              <Avatar
                alt="profilePhoto"
                src={process.env.PUBLIC_URL + "profile2.jpg"}
                className={classes.avatar}
              />
              </Grid>
            </Grid>
            </Hidden>
            <Grid item>
              <Typography variant="h1" color="textPrimary" align="center">
                Hola, soy{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                color="primary"
                display="inline"
                style={{ marginLeft: "2rem" }}
              >
                {" Alan. "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              color="textSecondary"
              display="inline"
            >
              Ing. en sistemas computacionales / Web developer
            </Typography>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid
            item
            xs={12}
            md={6}
            container
            alignContent={"center"}
            justify={"center"}
            style={{ height: "100%" }}
          >
            <Grid item>
              <Avatar
                alt="profilePhoto"
                src={process.env.PUBLIC_URL + "profile2.jpg"}
                className={classes.avatar}
              />
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default AboutMe;
