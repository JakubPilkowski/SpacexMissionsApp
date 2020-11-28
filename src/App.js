import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MissionsLayout, FavouritesLayout } from "./containers";
import Layout from "./hoc/Layout/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ff8c00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/" exact component={MissionsLayout}></Route>
          <Route path="/favourites" component={FavouritesLayout}></Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
