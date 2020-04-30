import React from "react";
import "./App.css";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

function App() {
  const theme = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="h3" color="primary">
        Hola soy alan
      </Typography>
    </div>
  );
}

export default App;
