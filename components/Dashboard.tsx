import * as React from "react";
import { useMemo } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  ImageSourcePropType,
  View,
} from "react-native";
import {
  Color,
  Height,
  Width,
  BoxShadow,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

export type DashboardType = {
  vector?: React.ReactNode;

  /** Variant props */
  state?: string;

  /** Style props */
  dashboardHeight?: number | string;
  dashboardPosition?: string;
  dashboardElevation?: number | string;
  dashboardTop?: number | string;
  dashboardRight?: number | string;
  dashboardBottom?: number | string;
  dashboardLeft?: number | string;
  insightsColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Dashboard = ({
  state = "default",
  dashboardHeight,
  dashboardPosition,
  dashboardElevation,
  dashboardTop,
  dashboardRight,
  dashboardBottom,
  dashboardLeft,
  vector,
  insightsColor,
}: DashboardType) => {
  const dashboardStyle = useMemo(() => {
    return {
      ...getStyleValue("height", dashboardHeight),
      ...getStyleValue("position", dashboardPosition),
      ...getStyleValue("elevation", dashboardElevation),
      ...getStyleValue("top", dashboardTop),
      ...getStyleValue("right", dashboardRight),
      ...getStyleValue("bottom", dashboardBottom),
      ...getStyleValue("left", dashboardLeft),
    };
  }, [
    dashboardHeight,
    dashboardPosition,
    dashboardElevation,
    dashboardTop,
    dashboardRight,
    dashboardBottom,
    dashboardLeft,
  ]);

  const insightsStyle = useMemo(() => {
    return {
      ...getStyleValue("color", insightsColor),
    };
  }, [insightsColor]);

  return (
    <Pressable style={[styles.iconDashboard, dashboardStyle]}>
      {vector}
      <Text style={[styles.insights, styles.insightsClr, insightsStyle]}>
        Insights
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  insightsClr: {
    color: Color.backgroundColorLightMode,
    position: "absolute",
  },
  iconDashboard: {
    height: Height.height_32,
    width: Width.width_32,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 4,
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
