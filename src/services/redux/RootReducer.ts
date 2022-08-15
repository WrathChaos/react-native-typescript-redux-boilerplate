import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
/**
 * ? Local Imports
 */
import userReducer, { InitialState as UserStore } from "./user/UserReducers";

export const reducers = {
  user: userReducer,
};

export type MainState = {
  user: UserStore;
};

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: undefined,
  whitelist: ["user"],
};

export const persistedRootReducer = persistCombineReducers(
  persistConfig,
  reducers,
);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;
