import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

// Reusable button row component for actions
interface ActionButtonRowProps {
  buttons: {
    label: string;
    onPress: () => void;
  }[];
}

const ActionButtonRow: React.FC<ActionButtonRowProps> = ({ buttons }) => {
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  return (
    <View style={styles.buttonRow}>
      {buttons.map((button, index) => (
        <TouchableOpacity 
          key={index}
          style={[styles.button, pressedIndex === index && styles.buttonPressed]}
          onPressIn={() => setPressedIndex(index)}
          onPressOut={() => setPressedIndex(null)}
          onPress={button.onPress}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 12,
  },
  button: {
    flex: 1,
    backgroundColor: Color.componentsBackgrounf,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: 'rgba(225,173,1,0.2)',
  },
  buttonText: {
    color: Color.gOLD3,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: FontFamily.interMedium,
  },
});

export default ActionButtonRow;
