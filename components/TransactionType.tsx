import * as React from "react";
import { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Height,
  Width,
  BoxShadow,
  Border,
  Color,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type TransactionTypeType = {
  /** Variant props */
  state?: string;

  /** Style props */
  frameViewBackgroundColor?: string;
  frameViewBackgroundColor1?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TransactionType = ({
  state = "Spending",
  frameViewBackgroundColor,
  frameViewBackgroundColor1,
}: TransactionTypeType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor),
    };
  }, [frameViewBackgroundColor]);

  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", frameViewBackgroundColor1),
    };
  }, [frameViewBackgroundColor1]);

  return (
    <View style={styles.incoming}>
      <View
        style={[styles.incomingWrapper, styles.wrapperLayout, frameViewStyle]}
      >
        <Text style={styles.incoming2}>Incoming</Text>
      </View>
      <View
        style={[styles.spendingWrapper, styles.wrapperLayout, frameView1Style]}
      >
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
    gap: Gap.gap_0,
    overflow: "hidden",
  },
  incomingWrapper: {
    width: Width.width_180,
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
    width: Width.width_188,
    borderTopRightRadius: Border.br_12,
    borderBottomRightRadius: Border.br_12,
    backgroundColor: Color.colorRosybrown,
  },
});

export default TransactionType;
