import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navigation } from "./components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { MissionsLayout, FavouritesLayout } from "./containers";

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
      <Router>
        <Navigation></Navigation>

        <section style={{ paddingTop: "72px" }}>
          <Switch>
            <Route path="/" exact component={MissionsLayout}></Route>
            <Route path="/favourites" component={FavouritesLayout}></Route>
          </Switch>
        </section>
        {/* tmp footer */}
        <div></div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
