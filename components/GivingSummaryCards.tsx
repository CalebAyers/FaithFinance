import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import Vector4 from "../assets/Vector4.svg";
import {
  FontFamily,
  Width,
  Gap,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  FontSize,
  LineHeight,
} from "../GlobalStyles";

// Two summary cards for Reflection page - Given and Giving Goal
type GivingSummaryCardsProps = {
  givenAmount?: string;
  goalAmount?: string;
};

const GivingSummaryCards = ({
  givenAmount = "$200.00",
  goalAmount = "$2,245.00",
}: GivingSummaryCardsProps) => {
  return (
    <View style={styles.container}>
      {/* Given Card */}
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Vector4 width={35} height={35} />
        </View>
        <Text style={styles.label}>Given</Text>
        <Text style={styles.amount}>{givenAmount}</Text>
      </View>

      {/* Giving Goal Card */}
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Vector4 width={35} height={35} />
        </View>
        <Text style={[styles.label, styles.goalLabel]}>Giving Goal</Text>
        <Text style={[styles.amount, styles.goalAmount]}>{goalAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Width.width_360,
    flexDirection: "row",
    gap: Gap.gap_20,
    height: 120,
  },
  card: {
    flex: 1,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.gOLD3,
    borderWidth: 1,
    overflow: "hidden",
    paddingVertical: 10,
    paddingBottom: 10,
    paddingHorizontal: Padding.padding_8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    lineHeight: LineHeight.lh_28,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    textAlign: "center",
  },
  goalLabel: {
    color: Color.gOLD3,
  },
  amount: {
    fontSize: 18,
    lineHeight: LineHeight.lh_25,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "700",
    color: Color.colorDarkslategray,
    textAlign: "center",
  },
  goalAmount: {
    color: Color.gOLD3,
  },
});

export default GivingSummaryCards;
