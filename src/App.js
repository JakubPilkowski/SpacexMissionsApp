import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Favourites, Missions } from "./containers";
import { removeFavourite, addFavourite } from "./actions/favourite.action";
import Layout from "./hoc/Layout/Layout";
import theme from "./themes/theme";
import PageNotFound from "components/UI/PageNotFound/PageNotFound";
import { connect } from "react-redux";
import FavouritesContext from "./context/favourites-context";

function App({ favourites, addFavourite, removeFavourite }) {
  const addToFavourites = (favourite) => {
    addFavourite(favourite);
  };
  const removeFromFavourites = (id) => {
    removeFavourite(id);
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <FavouritesContext.Provider
          value={{
            add: (favourite) => addToFavourites(favourite),
            remove: (id) => removeFromFavourites(id),
          }}
        >
          <Switch>
            <Route
              path="/SpacexMissionsApp/"
              exact
              component={() => <Missions favourites={favourites} />}
            ></Route>
            <Route
              path="/SpacexMissionsApp/favourites"
              component={() => <Favourites favourites={favourites} />}
            ></Route>
            <Route path="/" component={PageNotFound}></Route>
            <Route path="/SpacexMissionsApp/" component={PageNotFound}>
              <Redirect to="/SpacexMissionsApp/pagenotfound" />
            </Route>
          </Switch>
        </FavouritesContext.Provider>
      </Layout>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  addFavourite,
  removeFavourite,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
