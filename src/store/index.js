import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "spacex_storage",
  storage: storage,
  whitelist: ["favourites"],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);
const persistor = persistStore(store);

export { store, persistor };
