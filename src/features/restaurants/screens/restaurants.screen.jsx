import React from "react";
import { StyleSheet, View, SafeAreaView, Platform, StatusBar as Bar } from "react-native";
import { Searchbar, MD2Colors } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Bar.currentHeight + 1
  },
  search: {
    padding: 16,
    backgroundColor: MD2Colors.grey200,
    marginTop: Platform.OS === "android" ? Bar.currentHeight + 1 : 0
  },
  searchBar: {
    backgroundColor: MD2Colors.grey50
  },
  list: { flex: 1, padding: 16, backgroundColor: MD2Colors.grey50 }
});

const SearchBarTheme = {
  colors: {
    primary: MD2Colors.blue500
  },
  elevation: 0
};

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          theme={SearchBarTheme.colors}
          style={styles.searchBar}
          elevation={SearchBarTheme.elevation}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};
