const favourites = (state = [], action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          desc: action.desc,
          image: action.image,
        },
      ];
    case "REMOVE_FAVOURITE":
      return state.filter((favourite) => favourite.id !== action.id);
    default:
      return state;
  }
};

export default favourites;
