import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text as PaperText, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";

const Title = styled(PaperText).attrs({ variant: "bodyMedium" })`
  padding: 16px;
  color: ${MD2Colors.red200};
`;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: MD2Colors.grey200
  },
  image: {
    margin: 16
  }
});

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
    <Card mode="elevated" style={styles.cardContainer} elevation={5}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.image} />
      <Card.Content>
        <Title>{name}</Title>
      </Card.Content>
    </Card>
  );
};
