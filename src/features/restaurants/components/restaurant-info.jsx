import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
    photos = ["https://www.melhoresdestinos.com.br/wp-content/uploads/2023/06/restaurante-fazenda-sao-paulo-capa.jpg"],
    address = "100 Some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  } = restaurant;

  return <Text>{name}</Text>;
};
