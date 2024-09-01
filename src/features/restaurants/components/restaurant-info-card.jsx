import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address
} from "./restaurant-info-card.styles";

import Star from "../../../assets/star.svg";
import OpenIcon from "../../../assets/open.svg";

import uuid from "react-native-uuid";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "",
    photos = ["https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia27698/culinaria-mineira-cpt.jpg"],
    address = "100 Some random address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true
  } = restaurant;

  const ratingArray = (rating) => Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray(rating).map((_) => (
              <Star width={20} height={20} key={`${_}${uuid.v4()}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large" />
            {isOpenNow && <OpenIcon width={20} height={20} />}
            <Spacer position="left" size="large" />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
