import React from "react";
import { Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Skill from "./Skill";
import css from "../../static/img/css.png";
import html from "../../static/img/html.png";
import java from "../../static/img/java.png";
import js from "../../static/img/js.png";
import mysql from "../../static/img/mysql.png";
import node from "../../static/img/node.png";
import php from "../../static/img/php.png";
import reactImage from "../../static/img/react.png";

const styles = makeStyles(() => ({
  root: {
    height: "90vh",
  },
  avatar: {
    height: "18vw",
    width: "18vw",
    minWidth: 200,
    minHeight: 200,
  },
}));

const skills = [
  {
    title: "js",
    percentage: 80,
    image: js,
  },
  {
    title: "HTML",
    percentage: 60,
    image: html,
  },
  {
    title: "CSS",
    percentage: 40,
    image: css,
  },
  {
    title: "React.js",
    percentage: 70,
    image: reactImage,
  },
  {
    title: "Node.js",
    percentage: 60,
    image: node,
  },
  {
    title: "MySql",
    percentage: 50,
    image: mysql,
  },
  {
    title: "Java",
    percentage: 50,
    image: java,
  },
  {
    title: "PHP",
    percentage: 45,
    image: php,
  },
];

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
      >
        <Grid
          item
          container
          xs={12}
          justify={"center"}
          style={{ marginBottom: 10 }}
        >
          <Grid item>
            <Avatar
              alt="profilePhoto"
              src={process.env.PUBLIC_URL + "/profile.jpg"}
              className={classes.avatar}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant={"h3"} color="primary">
            ¿Quién es este chico?
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"body1"} color="textPrimary" align="justify">
            Alan es un joven apacionado por la tecnología e inovación siempre en
            busca de nuevos retos a afrontar y dispuesto a superarse. Le gusta
            salír en bicicleta y la natación, le agrada trabajar en equipo y le
            encanta marcar las tareas como realizadas. Actualmente se encuentra
            en su últimno semestre en la carrera de Ing. en sistemas
            computacionales próximo a titularse.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        XS={12}
        md={6}
        alignContent={"center"}
        justify={"center"}
      >
        <Typography variant="h3" color="primary">
          Habilidades
        </Typography>
        {skills.map(({ percentage, title, image }) => (
          <Skill percentage={percentage} title={title} image={image} />
        ))}
      </Grid>
    </Grid>
  );
}
