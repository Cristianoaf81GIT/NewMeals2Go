import React from "react";
import { Card, Text as PaperText, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";
import Star from "../../../assets/star.svg";
import OpenIcon from "../../../assets/open.svg";
import uuid from "react-native-uuid";

const RestaurantCard = styled(Card).attrs({ mode: "elevated", elevation: 5 })`
  background-color: ${MD2Colors.grey200};
`;

const RestaurantCardCover = styled(Card.Cover)`
  margin: 16px;
`;

const Title = styled(PaperText).attrs({ variant: "bodyMedium" })`
  color: ${MD2Colors.red600};
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

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ClosedTemporarily = styled(PaperText).attrs({ variant: "labelSmall" })`
  color: ${MD2Colors.red400};
  margin-right: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon,
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
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray(rating).map((_) => (
              <Star width={20} height={20} key={`${_}${uuid.v4()}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <ClosedTemporarily>CLOSED TEMPORARILY</ClosedTemporarily>}
            {isOpenNow && <OpenIcon width={20} height={20} />}
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
