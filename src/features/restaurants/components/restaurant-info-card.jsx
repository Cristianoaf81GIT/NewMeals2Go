import React from "react";
import { StyleSheet } from "react-native";
import { Card, Text as PaperText, MD2Colors } from "react-native-paper";

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: MD2Colors.grey200
  },
  image: {
    margin: 16
  },
  title: {
    padding: 16
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
        <PaperText style={styles.title} variant="bodyMedium">
          {name}
        </PaperText>
      </Card.Content>
    </Card>
  );
};