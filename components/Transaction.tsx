import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
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
  emptySpace?: string;
  state1?: string;

  /** Variant props */
  state?: string;

  /** Style props */
  transactionDetailColor?: string;
  transactionDetailTextAlign?: string;
  transactionDetailDisplay?: string;
  transactionDetailAlignItems?: string;
  secondTransactionDetailWidth?: number | string;
  categoryWidth?: number | string;
  categoryColor?: string;
  emptySpaceColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Transaction = ({
  state = "Giving",
  transactionDetailColor,
  transactionDetailTextAlign,
  transactionDetailDisplay,
  transactionDetailAlignItems,
  secondTransactionDetailWidth,
  category,
  categoryWidth,
  categoryColor,
  emptySpace,
  emptySpaceColor,
  state1,
}: TransactionType) => {
  const transactionDetailStyle = useMemo(() => {
    return {
      ...getStyleValue("color", transactionDetailColor),
      ...getStyleValue("textAlign", transactionDetailTextAlign),
      ...getStyleValue("display", transactionDetailDisplay),
      ...getStyleValue("alignItems", transactionDetailAlignItems),
    };
  }, [
    transactionDetailColor,
    transactionDetailTextAlign,
    transactionDetailDisplay,
    transactionDetailAlignItems,
  ]);

  const secondTransactionDetailStyle = useMemo(() => {
    return {
      ...getStyleValue("width", secondTransactionDetailWidth),
    };
  }, [secondTransactionDetailWidth]);

  const categoryStyle = useMemo(() => {
    return {
      ...getStyleValue("width", categoryWidth),
      ...getStyleValue("color", categoryColor),
    };
  }, [categoryWidth, categoryColor]);

  const emptySpaceStyle = useMemo(() => {
    return {
      ...getStyleValue("color", emptySpaceColor),
    };
  }, [emptySpaceColor]);

  return (
    <View style={styles.transaction}>
      <View style={[styles.spendsDetail, styles.detailPosition]}>
        <View style={styles.moneyDetailPair}>
          <Money state={state1} />
        </View>
        <View style={styles.secondTransactionPair}>
          <Text
            style={[
              styles.transactionDetail,
              styles.oct172025FlexBox,
              transactionDetailStyle,
            ]}
          >
            Transaction Detail
          </Text>
          <View
            style={[
              styles.secondTransactionDetail,
              styles.detailPosition,
              secondTransactionDetailStyle,
            ]}
          >
            <View style={styles.secondTransactionData}>
              <Text style={[styles.oct172025, styles.categoryTypo]}>
                Oct 17, 2025
              </Text>
            </View>
            <Text style={[styles.category, styles.categoryClr, categoryStyle]}>
              {category}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.emptySpaceWrapper}>
        <Text style={[styles.emptySpace, styles.categoryClr, emptySpaceStyle]}>
          {emptySpace}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailPosition: {
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
  categoryClr: {
    color: Color.gOLD3,
    alignItems: "center",
    display: "flex",
    lineHeight: LineHeight.lh_38,
  },
  transaction: {
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
  spendsDetail: {
    width: Width.width_267,
    zIndex: 2,
    height: Height.height_53,
  },
  moneyDetailPair: {
    width: Width.width_39,
    height: Height.height_46,
    paddingTop: Padding.padding_7,
    zIndex: 2,
  },
  secondTransactionPair: {
    width: Width.width_218,
    zIndex: 1,
    height: Height.height_53,
  },
  transactionDetail: {
    width: Width.width_221,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_16,
    height: Height.height_38,
    zIndex: 1,
  },
  secondTransactionDetail: {
    width: Width.width_129_8,
    marginTop: -2,
    height: Height.height_17,
    zIndex: 2,
    alignItems: "flex-end",
  },
  secondTransactionData: {
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
    width: Width.width_39_8,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    fontSize: FontSize.fs_12,
    textAlign: "left",
    height: Height.height_17,
  },
  emptySpaceWrapper: {
    width: Width.width_98,
    height: Height.height_42,
    paddingBottom: Padding.padding_4,
    marginLeft: -13,
    justifyContent: "flex-end",
    zIndex: 1,
  },
  emptySpace: {
    width: Width.width_101,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "center",
    justifyContent: "center",
    fontSize: FontSize.fs_16,
    height: Height.height_38,
    color: Color.gOLD3,
  },
});

export default Transaction;
