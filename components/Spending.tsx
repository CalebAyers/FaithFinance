import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import Money from "./Money";
import {
  FontFamily,
  Width,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  FontSize,
  LineHeight,
} from "../GlobalStyles";

export type SpendingType = {
  spending?: string;
  prop?: string;
  state?: string;
  vector?: ImageSourcePropType;
};

const Spending = ({ spending, prop, state, vector }: SpendingType) => {
  return (
    <View style={styles.spending}>
      <View style={styles.iconMoney2Wrapper}>
        <Money state={state} vector={vector} />
      </View>
      <Text style={[styles.spending2, styles.textFlexBox]}>{spending}</Text>
      <Text style={[styles.text, styles.textFlexBox]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_103,
  },
  spending: {
    height: Height.height_100,
    width: Width.width_100,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingTop: Padding.padding_6,
    paddingBottom: Padding.padding_10,
  },
  iconMoney2Wrapper: {
    width: Width.width_69,
    height: Height.height_37,
    flexDirection: "row",
    paddingLeft: Padding.padding_30,
    zIndex: 2,
  },
  spending2: {
    height: Height.height_28,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_28,
    color: Color.colorBlack,
    zIndex: 1,
  },
  text: {
    height: Height.height_19,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    color: Color.colorDarkslategray,
  },
});

export default Spending;
