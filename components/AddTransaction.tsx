import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Width, Height, Color, FontFamily, Border, BoxShadow, Padding } from "../GlobalStyles";

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
      <View style={styles.buttonAddTransaction}>
        <Text style={styles.plusIcon}>+</Text>
        <Text style={styles.addTransactionText}>Add Transaction</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: Width.width_360,
    height: Height.height_50,
    zIndex: 1,
  },
  buttonAddTransaction: {
    width: "100%",
    height: "100%",
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 12,
    borderRadius: Border.br_12,
    backgroundColor: Color.mainRed,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_30,
    paddingVertical: Padding.padding_12,
  },
  plusIcon: {
    fontSize: 24,
    fontWeight: "500",
    color: Color.backgroundColorLightMode,
    marginRight: 12,
    lineHeight: 24,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  addTransactionText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "900",
    fontFamily: FontFamily.interMedium,
    color: Color.backgroundColorLightMode,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});

export default AddTransaction;
