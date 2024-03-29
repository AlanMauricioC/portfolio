import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import WorkIcon from "@material-ui/icons/Work";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    minHeight: 500,
  },
  drawerOpen: {
    width: drawerWidth,
    minHeight: 500,
    position: "fixed",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "fixed",
    boxShadow: "5px 3px 18px -2px rgba(0,0,0,0.25)",
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    minHeight: "100vh",
    flexGrow: 1,
    padding: 10,
    width: `calc(100vw - ${theme.spacing(9)}px)`,
    marginLeft: theme.spacing(7),
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentDrawerOpen: {
    minHeight: "100vh",
    overflowX: "hidden",
    marginLeft: drawerWidth,
    padding: 10,
    width: `calc(100vw - ${theme.spacing(2) + drawerWidth}px)`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  socialMedia: {
    bottom: "0px",
    position: "absolute",
  },
}));

export default function User({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to={"/Home"}>
            <ListItem button>
              <MenuItem title={"Inicio"} Icon={HomeIcon} />
            </ListItem>
          </Link>
          <Link to={"/aboutme"}>
            <ListItem button>
              <MenuItem title={"Perfil"} Icon={PersonRoundedIcon} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={"/projects"}>
            <ListItem button>
              <MenuItem title={"Proyectos"} Icon={WorkIcon} />
            </ListItem>
          </Link>
          <Link to={"/history"}>
            <ListItem button>
              <MenuItem title="Historial" Icon={HistoryRoundedIcon} />
            </ListItem>
          </Link>
        </List>
        <div style={{ height: 900 }}>
          <List className={classes.socialMedia}>
            <a href="https://twitter.com/mauwuro__">
              <ListItem button>
                <MenuItem title={"Twitter"} Icon={TwitterIcon} />
              </ListItem>
            </a>
            <a href="mailto:alanmauricioc@outlook.com">
              <ListItem button>
                <MenuItem title={"Email"} Icon={MailIcon} />
              </ListItem>
            </a>
            <a href="https://github.com/AlanMauricioC">
              <ListItem button>
                <MenuItem title={"GitHub"} Icon={GitHubIcon} />
              </ListItem>
            </a>
          </List>
        </div>
      </Drawer>
      <main
        className={clsx({
          [classes.content]: !open,
          [classes.contentDrawerOpen]: open,
        })}
      >
        {children}
      </main>
    </div>
  );
}
