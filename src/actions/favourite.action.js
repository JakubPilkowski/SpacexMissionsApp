import favourites from "../reducers/favourites.reducer";

export const addFavourite = (favourite) => ({
  type: "ADD_FAVOURITE",
  id: favourite.id,
  name: favourite.name,
  details: favourite.details,
  image: favourite.image,
});

export const removeFavourite = (id) => ({
  type: "REMOVE_FAVOURITE",
  id,
});
