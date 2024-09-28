import React from "react";
import { Text } from "react-native";
import { StatusBar as ExporStatusBar } from "expo-status-bar";
// eslint-disable-next-line camelcase
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";
// eslint-disable-next-line camelcase
import { Oswald_400Regular } from "@expo-google-fonts/oswald";

import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';

import { theme } from "./src/infrastruture/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeContainer } from "./src/components/safe-area/safe-area.component";

const StatusBarStyles = {
  AUTO: "auto"
};

const Tab = createBottomTabNavigator();

const DemoScreen = () => (
    <SafeContainer>
        <Text>DemoScreen</Text> 
    </SafeContainer>
);

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
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Restaurant" component={RestaurantsScreen}/>    
            <Tab.Screen name="Map" component={DemoScreen}/>
            <Tab.Screen name="Settings" component={DemoScreen}/>
        </Tab.Navigator>
        </NavigationContainer>
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </ThemeProvider>
  );
}
