import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

// Three-way toggle for filtering transactions (Incoming | Spending | Giving)
interface TransactionToggleThreeWayProps {
  activeTab: "incoming" | "spending" | "giving";
  onTabChange: (tab: "incoming" | "spending" | "giving") => void;
}

const TransactionToggleThreeWay = ({
  activeTab,
  onTabChange,
}: TransactionToggleThreeWayProps) => {
  return (
    <View style={styles.container}>
      {/* Incoming Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "incoming" && styles.activeTab,
        ]}
        onPress={() => onTabChange("incoming")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "incoming" && styles.activeTabText,
          ]}
        >
          Incoming
        </Text>
      </TouchableOpacity>

      {/* Spending Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "spending" && styles.activeTab,
        ]}
        onPress={() => onTabChange("spending")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "spending" && styles.activeTabText,
          ]}
        >
          Spending
        </Text>
      </TouchableOpacity>

      {/* Giving Tab Button */}
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "giving" && styles.activeTab,
        ]}
        onPress={() => onTabChange("giving")}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "giving" && styles.activeTabText,
          ]}
        >
          Giving
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
    width: 360,
    height: 43,
    marginBottom: 20,
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
    fontSize: 16,
    fontWeight: "600",
  },
  activeTabText: {
    color: Color.backgroundColorLightMode,
  },
});

export default TransactionToggleThreeWay;
