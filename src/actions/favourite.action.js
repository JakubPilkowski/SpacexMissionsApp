export const addFavourite = (favourite) => ({
  type: "ADD_FAVOURITE",
  ...favourite,
});

export const removeFavourite = (id) => ({
  type: "REMOVE_FAVOURITE",
  id,
});
