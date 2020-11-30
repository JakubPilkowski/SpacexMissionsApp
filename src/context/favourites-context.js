import React from "react";

const favouritesContext = React.createContext({
  add: (favourite) => {},
  remove: (id) => {},
});

export default favouritesContext;
