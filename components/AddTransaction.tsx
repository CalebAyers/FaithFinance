import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Option from "./Option";
import Add from "./Add";
import Vector from "../assets/Vector.svg";
import { Width, Height } from "../GlobalStyles";

const AddTransaction = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.root}
      onPress={() => navigation.navigate("FrameComponent2")}
    >
      <Option state="Default" addTransaction="Add Transaction" />
      <Add state="default" vector={<Vector width={58} height={58} />} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_323,
    height: Height.height_50,
    zIndex: 1,
  },
});

export default AddTransaction;
