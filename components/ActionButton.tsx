import * as React from "react";
import { useState } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Color, FontFamily, Border } from "../GlobalStyles";

// Reusable action button with gold border and press highlighting
type ActionButtonProps = {
  onPress: () => void;
  label: string;
  style?: any;
};

const ActionButton = ({ onPress, label, style }: ActionButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity 
      style={[styles.button, pressed && styles.buttonPressed, style]}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      activeOpacity={1}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Color.componentsBackgrounf,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    borderRadius: Border.br_8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  buttonPressed: {
    backgroundColor: 'rgba(225,173,1,0.2)',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FontFamily.interMedium,
    color: Color.gOLD3,
    fontWeight: '600',
  },
});

export default ActionButton;
