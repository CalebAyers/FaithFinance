import * as React from "react";
import { Text, TextStyle, StyleProp } from "react-native";

type ListItemProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

const ListItem = ({ children, style }: ListItemProps) => {
  return <Text style={style}>{children}</Text>;
};
export default ListItem;
