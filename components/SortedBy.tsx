import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Color,
  Height,
  Width,
  FontFamily,
  LineHeight,
  FontSize,
  BoxShadow,
  Border,
} from "../GlobalStyles";

export type SortedByType = {
  /** Variant props */
  state?: "Category" | "Date";
};

const getSortCategoriesContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Date":
      return {
        backgroundColor: Color.mainRed,
      };
  }
};
const getSortCategoriesContainer1Style = (styleKey: string) => {
  switch (styleKey) {
    case "Date":
      return {
        backgroundColor: Color.colorRosybrown,
      };
  }
};
const SortedBy = ({ state = "Category" }: SortedByType) => {
  const variantKey = `${state}`;

  return (
    <View style={styles.root}>
      <View
        style={[
          styles.sortCategories,
          getSortCategoriesContainerStyle(variantKey),
          styles.sortLayout,
        ]}
      >
        <Text style={[styles.date, styles.dateTypo]}>Date</Text>
      </View>
      <View
        style={[
          styles.sortCategories2,
          getSortCategoriesContainer1Style(variantKey),
          styles.sortLayout,
        ]}
      >
        <Text style={[styles.category, styles.dateTypo]}>Category</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortLayout: {
    height: Height.height_62,
    width: Width.width_90,
    overflow: "hidden",
  },
  dateTypo: {
    textAlign: "center",
    color: Color.backgroundColorLightMode,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: LineHeight.lh_38,
    fontSize: FontSize.fs_14,
    top: 12,
    position: "absolute",
  },
  root: {
    width: Width.width_180,
    height: Height.height_30,
    boxShadow: BoxShadow.shadow_drop1,
    elevation: 20,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.mainRed,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
    marginTop: -8,
    overflow: "hidden",
  },
  sortCategories: {
    borderTopLeftRadius: Border.br_12,
    borderBottomLeftRadius: Border.br_12,
    backgroundColor: Color.colorRosybrown,
    width: Width.width_90,
  },
  date: {
    left: 12,
    width: 66,
  },
  sortCategories2: {
    borderTopRightRadius: Border.br_12,
    borderBottomRightRadius: Border.br_12,
    backgroundColor: Color.mainRed,
    width: Width.width_90,
  },
  category: {
    left: 0,
    width: Width.width_90,
  },
});

export default SortedBy;
