import "react-native-gesture-handler";
import React from "react";
import { StatusBar, useColorScheme, LogBox } from "react-native";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { PersistGate } from "redux-persist/integration/react";
import { isAndroid } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
import Navigation from "./src/navigation";
import { store, persistor } from "./src/services/redux/Store";
import { initializeReduxService } from "@services/redux/ReduxService";

LogBox.ignoreAllLogs();

const App = () => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";
  console.log("store: ", store);

  React.useLayoutEffect(() => {
    console.log("store: ", store);
    initializeReduxService(store.dispatch, store.getState);
  });

  React.useEffect(() => {
    StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content");
    if (isAndroid) {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }

    setTimeout(() => {
      SplashScreen.hide();
    }, 750);
  }, [scheme, isDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
