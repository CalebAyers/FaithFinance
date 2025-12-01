import * as React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

// Bold section heading (e.g., "Recent Transactions")
type SectionTitleProps = {
  children: string;
  style?: TextStyle;
};

const SectionTitle = ({ children, style }: SectionTitleProps) => {
  return (
    <Text style={[styles.sectionTitle, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: FontSize.fs_18,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: '600',
    color: Color.colorBlack,
    marginBottom: 16,
  },
});

export default SectionTitle;
