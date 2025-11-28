import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import Money from "./Money";
import {
  Gap,
  LineHeight,
  FontSize,
  Color,
  Height,
  Width,
  BoxShadow,
  Border,
  Padding,
  FontFamily,
} from "../GlobalStyles";

export type TransactionType = {
  category?: string;
  prop?: string;
  state1?: string;
  vector?: ImageSourcePropType;

  /** Variant props */
  state?: string;

  /** Style props */
  frameViewWidth?: number | string;
  categoryWidth?: number | string;
  categoryColor?: string;
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Transaction = ({
  state = "Giving",
  frameViewWidth,
  category,
  categoryWidth,
  categoryColor,
  prop,
  textColor,
  state1,
  vector,
}: TransactionType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", frameViewWidth),
    };
  }, [frameViewWidth]);

  const categoryStyle = useMemo(() => {
    return {
      ...getStyleValue("width", categoryWidth),
      ...getStyleValue("color", categoryColor),
    };
  }, [categoryWidth, categoryColor]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={styles.transactionIncome}>
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.iconMoney2Wrapper}>
          <Money state={state1} vector={vector} />
        </View>
        <View style={styles.transactionDetailParent}>
          <Text style={[styles.transactionDetail, styles.oct172025FlexBox]}>
            Transaction Detail
          </Text>
          <View
            style={[styles.frameGroup, styles.framePosition, frameViewStyle]}
          >
            <View style={styles.oct172025Wrapper}>
              <Text style={[styles.oct172025, styles.categoryTypo]}>
                Oct 17, 2025
              </Text>
            </View>
            <Text style={[styles.category, styles.textClr, categoryStyle]}>
              {category}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textClr, text1Style]}>{prop}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  framePosition: {
    gap: Gap.gap_10,
    zIndex: 2,
    flexDirection: "row",
  },
  oct172025FlexBox: {
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
  },
  categoryTypo: {
    fontSize: FontSize.fs_12,
    textAlign: "left",
  },
  textClr: {
    color: Color.successColor,
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
  },
  transactionIncome: {
    height: Height.height_80,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingLeft: Padding.padding_8,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_13,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  frameParent: {
    width: Width.width_267,
    zIndex: 2,
    height: Height.height_53,
  },
  iconMoney2Wrapper: {
    width: Width.width_39,
    height: Height.height_46,
    paddingTop: Padding.padding_7,
    zIndex: 2,
  },
  transactionDetailParent: {
    width: Width.width_218,
    zIndex: 1,
    height: Height.height_53,
  },
  transactionDetail: {
    width: Width.width_221,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.vikafjellColorsGeneralLabels,
    textAlign: "left",
    display: "flex",
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_16,
    height: Height.height_38,
    zIndex: 1,
  },
  frameGroup: {
    width: Width.width_135_1,
    marginTop: -2,
    height: Height.height_17,
    zIndex: 2,
    alignItems: "flex-end",
  },
  oct172025Wrapper: {
    width: Width.width_83,
    height: Height.height_15,
    paddingBottom: Padding.padding_1,
    justifyContent: "flex-end",
  },
  oct172025: {
    width: Width.width_86,
    height: Height.height_14,
    fontFamily: FontFamily.interRegular,
    color: Color.componentsNumbers,
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_12,
  },
  category: {
    width: Width.width_45_1,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.fs_12,
    textAlign: "left",
    height: Height.height_17,
  },
  wrapper: {
    width: Width.width_98,
    height: Height.height_42,
    paddingBottom: Padding.padding_4,
    marginLeft: -13,
    justifyContent: "flex-end",
    zIndex: 1,
  },
  text: {
    width: Width.width_101,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    justifyContent: "center",
    fontSize: FontSize.fs_16,
    height: Height.height_38,
    color: Color.successColor,
  },
});

export default Transaction;
