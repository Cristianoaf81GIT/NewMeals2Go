import React from "react";
import { StatusBar as ExporStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

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
