import * as React from "react";
import { useMemo, useState } from "react";
import { StyleSheet, View, Text, ImageSourcePropType, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Money from "./Money";
import VectorMoneyRed from "../assets/VectorMoneyRed.svg";
import VectorMoneyGreen from "../assets/VectorMoneyGreen.svg";
import Vector4 from "../assets/Vector4.svg";
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

// Individual transaction item - displays icon, date, category, and amount
// Colors automatically based on category: Income=green, Spending=red, Giving=gold
// Tapping opens transaction detail page
export type TransactionType = {
  category?: string;
  prop?: string;
  date?: string; // Transaction date to display
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

// Returns colors for transaction type (Income=green, Giving=gold, Spending=red)
const getCategoryColors = (state: string) => {
  const lowerState = state.toLowerCase();
  if (lowerState === 'spending') {
    return {
      borderColor: Color.mainRed,
      iconColor: Color.mainRed,
      textColor: Color.mainRed,
    };
  } else if (lowerState === 'giving') {
    return {
      borderColor: Color.gOLD3,
      iconColor: Color.gOLD3,
      textColor: Color.gOLD3,
    };
  } else if (lowerState === 'income') {
    return {
      borderColor: Color.successColor,
      iconColor: Color.successColor,
      textColor: Color.successColor,
    };
  }
  return {
    borderColor: Color.gOLD3,
    iconColor: Color.gOLD3,
    textColor: Color.gOLD3,
  };
};

// Returns appropriate money icon SVG for transaction type
const getCategoryIcon = (state: string) => {
  const lowerState = state.toLowerCase();
  if (lowerState === 'spending') {
    return VectorMoneyRed;
  } else if (lowerState === 'giving') {
    return Vector4;
  } else if (lowerState === 'income') {
    return VectorMoneyGreen;
  }
  return Vector4;
};

const Transaction = ({
  state = "Giving",
  frameViewWidth,
  category = "Giving",
  categoryWidth,
  categoryColor,
  prop,
  date = "Oct 17, 2025",
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

  const colors = getCategoryColors(state);
  const IconComponent = getCategoryIcon(state);
  const navigation = useNavigation();
  const [pressed, setPressed] = useState(false);

  const containerStyle = useMemo(() => {
    const currentColors = getCategoryColors(state);
    return {
      ...styles.transactionIncome,
      borderWidth: 1,
      borderColor: currentColors.borderColor,
    };
  }, [state]);

  const handlePress = () => {
    console.log("Transaction pressed, navigating to detail page...");
    navigation.navigate("TransactionDetailPage" as never);
  };

  return (
    <TouchableOpacity 
      style={[containerStyle, pressed && { backgroundColor: 'rgba(225,173,1,0.08)' }]}
      activeOpacity={0.8}
      onPress={handlePress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.frameParent, styles.framePosition]}>
        <View style={styles.iconMoney2Wrapper}>
          <IconComponent width={35} height={35} />
        </View>
        <View style={styles.transactionDetailParent}>
          <Text style={[styles.transactionDetail, { color: colors.textColor }]}>
            {category}
          </Text>
          <View style={styles.frameGroup}>
            <Text style={styles.dateText}>
              {date}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={[styles.text, text1Style, { color: colors.textColor }]} numberOfLines={1}>{prop}</Text>
      </View>
    </TouchableOpacity>
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
    height: 85,
    width: Width.width_360,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    overflow: "hidden",
    paddingLeft: Padding.padding_8,
    paddingTop: Padding.padding_14,
    paddingBottom: Padding.padding_13,
    paddingRight: Padding.padding_8,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent: {
    flex: 1,
    zIndex: 2,
    height: 53,
    minWidth: 0,
  },
  iconMoney2Wrapper: {
    width: Width.width_39,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  transactionDetailParent: {
    flex: 1,
    zIndex: 1,
    height: 53,
    minWidth: 0,
  },
  transactionDetail: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    lineHeight: 38,
    fontSize:18,
    height: 38,
    zIndex: 1,
    flexShrink: 1,
  },
  frameGroup: {
    flexDirection: "row",
    gap: 20,
    marginTop: 0,
  },
  dateText: {
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslategray,
    fontSize: FontSize.fs_12,
  },
  categoryText: {
    fontWeight: "700",
    fontFamily: FontFamily.interSemiBold,
    fontSize: FontSize.fs_12,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 8,
    zIndex: 1,
    minWidth: 90,
    maxWidth: 120,
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "right",
    fontSize: 18,
    color: Color.successColor,
  },
});

export default Transaction;
