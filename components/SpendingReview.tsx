import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import {
  Color,
  Width,
  Height,
  BoxShadow,
  Border,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type SpendingReviewType = {
  /** Variant props */
  state?: "Yearly" | "Weekly";
};

const getFrameContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Weekly":
      return {
        backgroundColor: Color.mainRed,
      };
  }
};
const getFrameButtonStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Weekly":
      return {
        backgroundColor: Color.buttonUnpressed,
      };
  }
};
const SpendingReview = ({ state = "Yearly" }: SpendingReviewType) => {
  const variantKey = `${state}`;

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.weeklyWrapper,
          getFrameContainerStyle(variantKey),
          styles.wrapperLayout,
        ]}
      >
        <Text style={styles.weekly}>Weekly</Text>
      </View>
      <View style={[styles.monthlyWrapper, styles.wrapperLayout]}>
        <Text style={styles.weekly}>Monthly</Text>
      </View>
      <Pressable
        style={[styles.yearlyWrapper, getFrameButtonStyle(variantKey)]}
      >
        <Text style={styles.weekly}>Yearly</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    backgroundColor: Color.buttonUnpressed,
    width: Width.width_120,
    height: Height.height_62,
    overflow: "hidden",
  },
  root: {
    width: Width.width_360,
    height: Height.height_43,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 20,
    backgroundColor: Color.componentsBackgrounf,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Color.mainRed,
    borderStyle: "solid",
    borderRadius: Border.br_12,
  },
  weeklyWrapper: {
    borderTopLeftRadius: Border.br_12,
    borderBottomLeftRadius: Border.br_12,
  },
  weekly: {
    position: "absolute",
    top: 13,
    left: 0,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundColorLightMode,
    textAlign: "center",
    width: Width.width_123,
    height: Height.height_38,
  },
  monthlyWrapper: {
    borderWidth: 1,
    borderColor: Color.mainRed,
    borderStyle: "solid",
    borderRadius: Border.br_12,
    backgroundColor: Color.buttonUnpressed,
  },
  yearlyWrapper: {
    borderTopRightRadius: Border.br_12,
    borderBottomRightRadius: Border.br_12,
    backgroundColor: Color.mainRed,
    width: Width.width_120,
    height: Height.height_62,
    overflow: "hidden",
  },
});

export default SpendingReview;
