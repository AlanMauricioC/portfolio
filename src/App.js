import React from "react";
import "./App.css";
import { useTheme } from "@material-ui/core/styles";
import Navigation from './components/Navigation'

function App() {
  const theme = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Navigation/>
    </div>
  );
}

export default App;
