import * as React from "react";
import { StyleSheet, View } from "react-native";
import GivingGoal from "./GivingGoal";
import SettingFaithGoal from "./SettingFaithGoal";
import { Padding, Width, Gap } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.frameWrapper}>
      <View style={styles.givingGoalParent}>
        <GivingGoal iconMoney2State="default" iconMoney2State1="default" />
        <SettingFaithGoal
          state="Active"
          state1="Default"
          addTransaction="Setting Faith Goal"
          addTransactionBackgroundColor="#e1ad01"
          addTransactionBorderStyle="solid"
          addTransactionBorderColor="#fff9e6"
          addTransactionBorderWidth={1}
          addTransactionPosition="absolute"
          addTransactionHeight="100%"
          addTransactionTop="0%"
          addTransactionRight="0%"
          addTransactionBottom="0%"
          addTransactionLeft="0%"
          addTransactionAlignSelf="unset"
          addTransactionColor="#fff9e6"
          addTransactionWidth="140"
          addTransactionFontSize={16}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameWrapper: {
    zIndex: null,
    width: 362,
    flexDirection: "row",
    paddingLeft: Padding.padding_2,
    height: 164,
  },
  givingGoalParent: {
    width: Width.width_360,
    gap: Gap.gap_14,
    height: 164,
  },
});

export default FrameComponent;
