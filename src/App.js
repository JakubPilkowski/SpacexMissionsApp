import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { MissionsLayout, FavouritesLayout } from "./containers";
import Layout from "./hoc/Layout/Layout";
import theme from "./utils/theme";
import PageNotFound from "components/UI/PageNotFound/PageNotFound";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Switch>
          <Route path="/" exact component={MissionsLayout}></Route>
          <Route path="/favourites" component={FavouritesLayout}></Route>
          <Route path="/pagenotfound" component={PageNotFound}></Route>
          <Route path="/" component={PageNotFound}>
            <Redirect to="/pagenotfound" />
          </Route>
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
