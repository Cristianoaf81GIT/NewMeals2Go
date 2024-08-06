import styled, { useTheme } from "styled-components/native";

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
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const appTheme = useTheme();
  const variant = getVariant(position, size, appTheme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

export const SpacerOldComponent = styled.View`
  ${({ position, size, theme }) => getVariant(position, size, theme)}
`;

SpacerOldComponent.defaultProps = {
  position: "top",
  size: "small"
};
