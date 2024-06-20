import React from "react";
import { Card, Text as PaperText, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";

const RestaurantCard = styled(Card).attrs({ mode: "elevated", elevation: 5 })`
  background-color: ${MD2Colors.grey200};
`;

const RestaurantCardCover = styled(Card.Cover)`
  margin: 16px;
`;

const Title = styled(PaperText).attrs({ variant: "bodyMedium" })`
  padding: 16px;
  color: ${MD2Colors.red200};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = ["https://www.melhoresdestinos.com.br/wp-content/uploads/2023/06/restaurante-fazenda-sao-paulo-capa.jpg"],
    address = "100 Some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
