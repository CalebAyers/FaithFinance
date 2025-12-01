import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Option from "./Option";
import { Width, Height } from "../GlobalStyles";

interface AddTransactionProps {
  onPress?: () => void;
}

// Button to open add transaction modal
const AddTransaction = ({ onPress }: AddTransactionProps) => {
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Option state="Default" addTransaction="Add Transaction" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_50,
    zIndex: 1,
  },
});

export default AddTransaction;
