import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom"
};

const getVariant = (position, size, theme) => {
  return `${positionVariant[position]}: ${theme.space[sizeVariant[size]]}`;
}

export const Spacer = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small"
};
