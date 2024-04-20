import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { StatusBar as ExporStatusBar } from "expo-status-bar";

const StatusBarStyles = {
  AUTO: "auto"
};

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </>
  );
}
