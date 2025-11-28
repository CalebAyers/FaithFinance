import * as React from "react";
import { StyleSheet, View } from "react-native";
import Giving from "./Giving";
import { Width, Height, Gap } from "../GlobalStyles";

export type GivingGoalType = {
  givingGiven?: string;
  givingGoalGiven?: string;
  givingSeparator?: string;
  givingGoalSeparator?: string;
  givingGivenColor?: string;
  givingGoalGivenColor?: string;
  givingSeparatorColor?: string;
  givingGoalSeparatorColor?: string;
};

const GivingGoal = ({
  givingGiven,
  givingGoalGiven,
  givingSeparator,
  givingGoalSeparator,
  givingGivenColor,
  givingGoalGivenColor,
  givingSeparatorColor,
  givingGoalSeparatorColor,
}: GivingGoalType) => {
  return (
    <View style={styles.givingGoal}>
      <Giving
        given={givingGiven}
        givenColor={givingGivenColor}
        separator={givingSeparator}
        separatorColor={givingSeparatorColor}
        state="default"
      />
      <Giving
        given={givingGoalGiven}
        givenColor={givingGoalGivenColor}
        separator={givingGoalSeparator}
        separatorColor={givingGoalSeparatorColor}
        state="default"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  givingGoal: {
    width: Width.width_360,
    height: Height.height_100,
    flexDirection: "row",
    gap: Gap.gap_20,
  },
});

export default GivingGoal;
