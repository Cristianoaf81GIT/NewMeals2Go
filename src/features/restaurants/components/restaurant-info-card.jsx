import React from "react";
import { Card, Text as PaperText, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";
import Star from "../../../assets/star.svg";

const RestaurantCard = styled(Card).attrs({ mode: "elevated", elevation: 5 })`
  background-color: ${MD2Colors.grey200};
`;

const RestaurantCardCover = styled(Card.Cover)`
  margin: 16px;
`;

const Title = styled(PaperText).attrs({ variant: "bodyMedium" })`
  color: ${MD2Colors.red200};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Address = styled(PaperText)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  paddind-bottom: ${(props) => props.theme.space[2]};
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

  const ratingArray = (rating) => Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray(rating).map((_) => (
            <Star width={20} height={20} key={_} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
