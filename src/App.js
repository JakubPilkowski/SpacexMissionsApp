import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { MissionsLayout, FavouritesLayout } from "./containers";
import Layout from "./hoc/Layout/Layout";
import theme from "./utils/theme";

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
