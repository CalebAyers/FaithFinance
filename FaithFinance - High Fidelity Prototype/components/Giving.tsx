import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
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

export type GivingType = {
  given?: string;
  separator?: string;
  state?: string;

  /** Style props */
  givenColor?: string;
  separatorColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Giving = ({
  given,
  givenColor,
  separator,
  separatorColor,
  state,
}: GivingType) => {
  const givenStyle = useMemo(() => {
    return {
      ...getStyleValue("color", givenColor),
    };
  }, [givenColor]);

  const separatorStyle = useMemo(() => {
    return {
      ...getStyleValue("color", separatorColor),
    };
  }, [separatorColor]);

  return (
    <View style={styles.giving}>
      <View style={styles.moneyDetails}>
        <Money state={state} />
      </View>
      <Text style={[styles.given, styles.givenFlexBox, givenStyle]}>
        {given}
      </Text>
      <Text style={[styles.separator, styles.givenFlexBox, separatorStyle]}>
        {separator}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  givenFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    width: Width.width_173,
  },
  giving: {
    height: Height.height_100,
    width: Width.width_170,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.gOLD3,
    borderWidth: 1,
    overflow: "hidden",
    paddingTop: Padding.padding_4,
    paddingBottom: Padding.padding_10,
  },
  moneyDetails: {
    width: Width.width_104,
    height: Height.height_39,
    flexDirection: "row",
    paddingLeft: Padding.padding_65,
    zIndex: 2,
  },
  given: {
    height: Height.height_28,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_28,
    color: Color.colorBlack,
    zIndex: 1,
  },
  separator: {
    height: Height.height_19,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
    color: Color.colorDarkslategray,
  },
});

export default Giving;
