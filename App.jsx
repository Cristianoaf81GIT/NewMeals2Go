import React from "react";
import { StatusBar as ExporStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastruture/theme";

const StatusBarStyles = {
  AUTO: "auto"
};

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExporStatusBar style={StatusBarStyles.AUTO} />
      </ThemeProvider>
    </>
  );
}
