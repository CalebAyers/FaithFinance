import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import {
  Color,
  FontSize,
  LineHeight,
  FontFamily,
  Width,
} from "../GlobalStyles";

export type DashboardType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  activePosition?: string;
  activeHeight?: number | string;
  activeTop?: number | string;
  activeRight?: number | string;
  activeBottom?: number | string;
  activeLeft?: number | string;
  insightsColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Dashboard = ({
  state = "default",
  activePosition,
  activeHeight,
  activeTop,
  activeRight,
  activeBottom,
  activeLeft,
  vector,
  insightsColor,
}: DashboardType) => {
  const active1Style = useMemo(() => {
    return {
      ...getStyleValue("position", activePosition),
      ...getStyleValue("height", activeHeight),
      ...getStyleValue("top", activeTop),
      ...getStyleValue("right", activeRight),
      ...getStyleValue("bottom", activeBottom),
      ...getStyleValue("left", activeLeft),
    };
  }, [
    activePosition,
    activeHeight,
    activeTop,
    activeRight,
    activeBottom,
    activeLeft,
  ]);

  const insightsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", insightsColor),
    };
  }, [insightsColor]);

  return (
    <View style={[styles.active, active1Style]}>
      {vector}
      <Text style={[styles.insights, styles.insightsClr, insightsStyle]}>
        Insights
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  insightsClr: {
    color: Color.goldButton,
    position: "absolute",
  },
  active: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  insights: {
    top: 20,
    left: -11,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.instrumentSansSemiBold,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: Width.width_54,
  },
});

export default Dashboard;
