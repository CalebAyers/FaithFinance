import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

// Two-way toggle component - reusable for binary choices (Date/Category, On/Off, etc)
type TwoWayToggleProps = {
  leftLabel: string;
  rightLabel: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const TwoWayToggle = ({ leftLabel, rightLabel, activeTab, onTabChange }: TwoWayToggleProps) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === leftLabel && styles.activeTab]}
        onPress={() => onTabChange(leftLabel)}
      >
        <Text style={[styles.tabText, activeTab === leftLabel && styles.activeTabText]}>
          {leftLabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === rightLabel && styles.activeTab]}
        onPress={() => onTabChange(rightLabel)}
      >
        <Text style={[styles.tabText, activeTab === rightLabel && styles.activeTabText]}>
          {rightLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 8,
    overflow: "hidden",
    height: 43,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: Color.mainRed,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: Color.mainRed,
  },
  tabText: {
    color: Color.mainRed,
    fontFamily: FontFamily.interSemiBold,
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: Color.backgroundColorLightMode,
  },
});

export default TwoWayToggle;
