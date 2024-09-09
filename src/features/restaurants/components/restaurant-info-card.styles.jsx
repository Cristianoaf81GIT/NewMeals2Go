import { Card, Text as PaperText, MD2Colors } from "react-native-paper";
import { styled } from "styled-components/native";

export const RestaurantCard = styled(Card).attrs({ mode: "elevated", elevation: 5 })`
  background-color: ${MD2Colors.grey200};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  margin: 16px;
`;

export const Title = styled(PaperText).attrs({ variant: "bodyMedium" })`
  color: ${MD2Colors.red600};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled(PaperText)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  paddind-bottom: ${(props) => props.theme.space[2]};
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ClosedTemporarily = styled(PaperText).attrs({ variant: "labelSmall" })`
  color: ${MD2Colors.red400};
  margin-right: ${(props) => props.theme.sizes[1]};
`;
