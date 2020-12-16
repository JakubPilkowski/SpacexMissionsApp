import "sass/pages/app.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { Favourites, Missions } from "./containers";
import { removeFavourite, addFavourite } from "./actions/favourite.action";
import Layout from "./hoc/Layout/Layout";
import theme from "./themes/theme";
import PageNotFound from "components/UI/PageNotFound/PageNotFound";
import { connect } from "react-redux";
import FavouritesContext from "./context/favourites-context";
import { PREFIX } from "./utils/WebsiteLinkPrefix";

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
              path={PREFIX}
              exact
              component={() => <Missions favourites={favourites} />}
            ></Route>
            <Route
              path={`${PREFIX}/favourites`}
              component={() => <Favourites favourites={favourites} />}
            ></Route>
            <Route path="/" component={PageNotFound}></Route>
            <Route path={PREFIX} component={PageNotFound}>
              <Redirect to={`${PREFIX}/pagenotfound`} />
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
