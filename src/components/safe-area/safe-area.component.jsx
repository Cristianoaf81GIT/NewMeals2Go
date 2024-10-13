import { styled } from "styled-components/native";
import { Platform, StatusBar, SafeAreaView } from "react-native";

export const isAndroid = Platform.OS === "android";

export const SafeContainer = styled(SafeAreaView)`
  display: flex;
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight + 1 : 0}px;
`;
