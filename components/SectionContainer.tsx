import * as React from "react";
import { StyleSheet, View } from "react-native";

// Container wrapper for sections with consistent spacing
type SectionContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const SectionContainer = ({ children, style }: SectionContainerProps) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});

export default SectionContainer;
