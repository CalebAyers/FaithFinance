import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Height,
  Width,
  BoxShadow,
  Border,
  Color,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type TransactionTypeType = {
  /** Variant props */
  state?: string;
};

const TransactionType = ({ state = "Spending" }: TransactionTypeType) => {
  return (
    <View style={styles.incoming}>
      <View style={[styles.incomingWrapper, styles.wrapperLayout]}>
        <Text style={styles.incoming2}>Incoming</Text>
      </View>
      <View style={[styles.spendingWrapper, styles.wrapperLayout]}>
        <Text style={styles.incoming2}>Spending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: Height.height_62,
    overflow: "hidden",
  },
  incoming: {
    height: Height.height_43,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 20,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.mainRed,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 0,
    overflow: "hidden",
  },
  incomingWrapper: {
    width: 180,
    borderTopLeftRadius: Border.br_12,
    borderBottomLeftRadius: Border.br_12,
    backgroundColor: Color.mainRed,
  },
  incoming2: {
    position: "absolute",
    top: 13,
    left: 17,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundColorLightMode,
    textAlign: "center",
    width: Width.width_147,
    height: Height.height_38,
  },
  spendingWrapper: {
    width: 188,
    borderTopRightRadius: Border.br_12,
    borderBottomRightRadius: Border.br_12,
    backgroundColor: Color.buttonUnpressed,
  },
});

export default TransactionType;
