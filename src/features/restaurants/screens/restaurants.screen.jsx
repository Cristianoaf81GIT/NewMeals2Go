import React from "react";
import { View, SafeAreaView, Platform, StatusBar as Bar, FlatList } from "react-native";
import { Searchbar, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { styled } from "styled-components/native";
import uuid from "react-native-uuid";
import { Spacer } from "../../../components/spacer/spacer.component";

const isAndroid = Platform.OS === "android";

const SearchBarTheme = {
  colors: {
    primary: MD2Colors.blue500
  },
  elevation: 0
};

const SafeContainer = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  margin-top: ${isAndroid ? Bar.currentHeight + 1 : 0}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${MD2Colors.grey200};
`;

const SearchBarComponent = styled(Searchbar)`
  background-color: ${MD2Colors.grey50};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

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

      <RestaurantList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={(__) => (
          <>
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          </>
        )}
        keyExtractor={(_) => uuid.v4()}
      />
    </SafeContainer>
  );
};
