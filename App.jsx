import React from 'react';
import { Text } from 'react-native';
import { StatusBar as ExporStatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';

// eslint-disable-next-line camelcase
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
// eslint-disable-next-line camelcase
import { Oswald_400Regular } from '@expo-google-fonts/oswald';

import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MD2Colors } from 'react-native-paper';
import { theme } from './src/infrastruture/theme';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { SafeContainer } from './src/components/safe-area/safe-area.component';

import { restaurantRequest } from "./src/services/restaurants/restaurant.service";

restaurantRequest().then(d => console.log(JSON.stringify(d, null, 4))).catch(console.error);

const StatusBarStyles = {
  AUTO: 'auto',
};

const Tab = createBottomTabNavigator();

function DemoScreen() {
  return (
    <SafeContainer>
      <Text>DemoScreen</Text>
    </SafeContainer>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase
    Oswald_400Regular,
    // eslint-disable-next-line camelcase
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const SCREEN_ICONS = {
    Restaurants: 'restaurant-outline',
    Map: 'map-outline',
    Settings: 'settings-outline',
    Default: 'restaurant-outline',
  };

  function TAB_ICONS({ color, route, size }) {
    return <Ionicons name={SCREEN_ICONS[route.name]} size={size} color={color} />;
  }

  const routeOptions = ({ route }) => ({
    tabeBarLabel: route.name,
    tabBarActiveTintColor: MD2Colors.red200,
    tabBarInactiveTintColor: MD2Colors.grey500,
    tabBarIcon: ({ color }) => TAB_ICONS({ color, route, size: 24 }),
  });

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={RestaurantsScreen} options={routeOptions} />
          <Tab.Screen name="Map" component={DemoScreen} options={routeOptions} />
          <Tab.Screen name="Settings" component={DemoScreen} options={routeOptions} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExporStatusBar style={StatusBarStyles.AUTO} />
    </ThemeProvider>
  );
}
