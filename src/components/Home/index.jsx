import React from "react";
import { Typography, Grid, Avatar, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  root: {
    height: "90vh",
  },
  avatar: {
    height: "22vw",
    width: "22vw",
    minWidth: 200,
    minHeight: 200,
  },
}));

const Home = () => {
  const classes = styles();
  return (
    <Grid container className={classes.root}>
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
              <Grid
                item
                container
                alignContent={"center"}
                justify={"center"}
                style={{ overflow: "hidden" }}
              >
                <Avatar
                  alt="profilePhoto"
                  src={process.env.PUBLIC_URL + "/profile2.jpg"}
                  className={classes.avatar}
                />
              </Grid>
            </Grid>
          </Hidden>
          <Grid item>
            <Typography
              variant="h1"
              color="textPrimary"
              align="center"
              style={{ paddingLeft: "2rem" }}
            >
              Hola, soy
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              color="primary"
              display="inline"
              style={{ paddingLeft: "2rem" }}
            >
              {" Alan. "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" color="textSecondary" align="center">
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
              src={process.env.PUBLIC_URL + "/profile2.jpg"}
              className={classes.avatar}
            />
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Home;
