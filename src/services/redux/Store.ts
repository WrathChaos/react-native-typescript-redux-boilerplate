import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
/**
 * ? Local Imports
 */
import RootSaga from "./RootSaga";
import { persistedRootReducer } from "./RootReducer";

// Setup Middlewares
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (__DEV__) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const createDebugger = require("redux-flipper").default;
  middleware.push(createDebugger());
}

// Create Store
const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(RootSaga);

// Setup Store persistence
const persistor = persistStore(store, null);

export { store, persistor };
