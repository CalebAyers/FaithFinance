import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Vector3 from "../assets/Vector3.svg";
import {
  Color,
  FontSize,
  LineHeight,
  FontFamily,
  Width,
} from "../GlobalStyles";

export type DashboardType = {
  /** Variant props */
  state?: string;
};

const Dashboard = ({ state = "default" }: DashboardType) => {
  return (
    <View style={styles.active}>
      <Vector3 style={[styles.vectorIcon, styles.insightsClr]} />
      <Text style={[styles.insights, styles.insightsClr]}>Insights</Text>
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
  vectorIcon: {
    height: "66.56%",
    width: "58.44%",
    top: "16.56%",
    right: "20.63%",
    bottom: "16.88%",
    left: "20.94%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
