import React, { Fragment } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Switch, Route } from "react-router-dom";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";
import HistoryRoundedIcon from "@material-ui/icons/HistoryRounded";
import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import { Tooltip } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
	display: "flex",
	height:'100vh',
  },
  drawerOpen: {
    top: "auto",
    position: "unset",
    width: drawerWidth,
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
    top: "auto",
    position: "unset",
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
    flexGrow: 1,
    width: `calc(100vw - ${theme.spacing(9)}px)`,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentDrawerOpen: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100vw - ${theme.spacing(2) + drawerWidth}px)`,
  },
}));

export default function User({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const MenuItem = ({ title, Icon }) => (
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
          <Link to={"/aboutme"}>
            <ListItem button path={"/profile"}>
              <MenuItem title={"Perfil"} Icon={PersonRoundedIcon} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={"/user/shipping"}>
            <ListItem button>
              <MenuItem title={"Pedidos"} Icon={LocalShippingRoundedIcon} />
            </ListItem>
          </Link>
          <Link to={"/user/history"}>
            <ListItem button>
              <MenuItem title="Historial" Icon={HistoryRoundedIcon} />
            </ListItem>
          </Link>
          <Link to={"/user/promos"}>
            <ListItem button>
              <MenuItem title="Promociones" Icon={LocalMallRoundedIcon} />
            </ListItem>
          </Link>
          <ListItem button>
            <MenuItem title="Salir" Icon={ExitToAppRoundedIcon} />
          </ListItem>
        </List>
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
