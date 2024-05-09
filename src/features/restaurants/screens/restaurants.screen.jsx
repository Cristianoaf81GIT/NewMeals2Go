import React from "react";
import { View, SafeAreaView, Platform, StatusBar as Bar } from "react-native";
import { Searchbar, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { styled } from "styled-components/native";

const SearchBarTheme = {
  colors: {
    primary: MD2Colors.blue500
  },
  elevation: 0
};

const SafeContainer = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  margin-top: ${Bar.currentHeight + 1} px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
  background-color: ${MD2Colors.grey200};
  margin-top: ${Platform.OS === "android" ? Bar.currentHeight + 1 : 0};
`;

const SearchBarComponent = styled(Searchbar)`
  background-color: ${MD2Colors.grey50};
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: ${MD2Colors.grey50};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <SafeContainer>
      <SearchContainer>
        <SearchBarComponent
          placeholder="Buscar"
          onChangeText={setSearchQuery}
          value={searchQuery}
          theme={SearchBarTheme.colors}
          elevation={SearchBarTheme.elevation}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeContainer>
  );
};
