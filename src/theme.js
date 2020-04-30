import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "orbitron",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ],
  },
  palette: {
    type: "dark",
    primary: {
        main:'#33c9dc'
    },
    secondary:{
        main:'#ffc400'
    },
  },
});

export default theme;
