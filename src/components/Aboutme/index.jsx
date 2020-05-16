import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  root: {
    height: "100%",
    padding: 20,
  },
  container: {
    height: "100%",
  },
  avatar: {
    height: "18vw",
    width: "18vw",
    minWidth: 200,
    minHeight: 200,
  },
}));

export default function Aboutme() {
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
        <Grid item>
          <Avatar
            alt="profilePhoto"
            src={process.env.PUBLIC_URL + "profile2.jpg"}
            className={classes.avatar}
          />
        </Grid>
        <Grid item>
          <Typography variant={"h3"} color="textPrimary">
            ¿Quién es este chico?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"} color="textPrimary" align="justify">
            Alan es un joven apacionado por la tecnología e inovación siempre en
            busca de nuevos retos a afrontar y dispuesto a superarse. Le gusta
            salír en bicicleta y la natación, le agrada trabajar en equipo y le
            encanta marcar las tareas como realizadas.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        alignContent={"center"}
        justify={"center"}
        style={{ height: "100%" }}
      ></Grid>
    </Grid>
  );
}
