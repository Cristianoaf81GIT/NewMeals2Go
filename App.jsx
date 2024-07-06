import React from "react";
import { StatusBar as ExporStatusBar } from "expo-status-bar";
// eslint-disable-next-line camelcase
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
// eslint-disable-next-line camelcase
import { Oswald_400Regular } from "@expo-google-fonts/oswald";

import { ThemeProvider } from "styled-components/native";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastruture/theme";

const StatusBarStyles = {
  AUTO: "auto"
};

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Oswald_400Regular,
    // eslint-disable-next-line camelcase
    Lato_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </ThemeProvider>
  );
}
