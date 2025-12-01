import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

type TransactionToggleProps = {
  activeTab: "incoming" | "spending";
  onTabChange: (tab: "incoming" | "spending") => void;
};

const TransactionToggle = ({ activeTab, onTabChange }: TransactionToggleProps) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          styles.leftButton,
          activeTab === "incoming" && styles.activeButton,
        ]}
        onPress={() => onTabChange("incoming")}
      >
        <Text
          style={[
            styles.toggleText,
            activeTab === "incoming" && styles.activeText,
          ]}
        >
          Incoming
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          styles.rightButton,
          activeTab === "spending" && styles.activeButton,
        ]}
        onPress={() => onTabChange("spending")}
      >
        <Text
          style={[
            styles.toggleText,
            activeTab === "spending" && styles.activeText,
          ]}
        >
          Spending
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    width: 360,
    height: 43,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
  },
  toggleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.mainRed,
    opacity: 0.5,
  },
  leftButton: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightButton: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  activeButton: {
    backgroundColor: Color.mainRed,
    opacity: 1,
  },
  toggleText: {
    fontSize: 16,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: "#fff",
  },
  activeText: {
    color: "#fff",
  },
});

export default TransactionToggle;
