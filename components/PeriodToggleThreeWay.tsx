import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { scale, scaleFont } from "../utils/responsive";
import { Color, FontFamily } from "../GlobalStyles";

// Three-way toggle for period selection (Weekly | Monthly | Yearly)
interface PeriodToggleThreeWayProps {
  activePeriod: "Weekly" | "Monthly" | "Yearly";
  onPeriodChange: (period: "Weekly" | "Monthly" | "Yearly") => void;
}

const PeriodToggleThreeWay = ({
  activePeriod,
  onPeriodChange,
}: PeriodToggleThreeWayProps) => {
  return (
    <View style={styles.container}>
      {/* Weekly Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activePeriod === "Weekly" && styles.activeTab,
        ]}
        onPress={() => onPeriodChange("Weekly")}
      >
        <Text
          style={[
            styles.tabText,
            activePeriod === "Weekly" && styles.activeTabText,
          ]}
        >
          Weekly
        </Text>
      </TouchableOpacity>

      {/* Monthly Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activePeriod === "Monthly" && styles.activeTab,
        ]}
        onPress={() => onPeriodChange("Monthly")}
      >
        <Text
          style={[
            styles.tabText,
            activePeriod === "Monthly" && styles.activeTabText,
          ]}
        >
          Monthly
        </Text>
      </TouchableOpacity>

      {/* Yearly Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activePeriod === "Yearly" && styles.activeTab,
        ]}
        onPress={() => onPeriodChange("Yearly")}
      >
        <Text
          style={[
            styles.tabText,
            activePeriod === "Yearly" && styles.activeTabText,
          ]}
        >
          Yearly
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 8,
    overflow: "hidden",
    width: '100%',
    height: scale(43),
    marginBottom: 12,
    borderWidth: 2,
    borderColor: Color.mainRed,
  },
  tab: {
    flex: 1, // Each tab takes equal width (1/3)
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
    fontSize: scaleFont(14),
    fontWeight: "600",
  },
  activeTabText: {
    color: Color.backgroundColorLightMode,
  },
});

export default PeriodToggleThreeWay;
