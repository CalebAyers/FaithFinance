import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import Option from "./Option";
import Add from "./Add";
import Vector6 from "../assets/Vector6.svg";
import { Width, Height } from "../GlobalStyles";

const AddTransaction = () => {
  return (
    <Pressable style={styles.root}>
      <Option state="Default" />
      <Add state="default" vector={<Vector6 width={58} height={58} />} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_50,
  },
});

export default AddTransaction;
