import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Default from "../components/Default";
import GivingGoal from "../components/GivingGoal";
import SettingFaithGoal from "../components/SettingFaithGoal";
import IconBible from "../assets/Icon-Bible.svg";
import BibleVerses from "../components/BibleVerses";
import AddToFavorite from "../components/AddToFavorite";
import RefreshButton from "../components/RefreshButton";
import Default1 from "../components/Default1";
import IPhoneBezel from "../components/IPhoneBezel";
import { Width, Color, Padding, Gap, Height } from "../GlobalStyles";

const ReflectionPageReset = () => {
  return (
    <ScrollView
      style={styles.reflectionPageReset}
      contentContainerStyle={styles.reflectionPageResetContent}
    >
      <Default state="default" />
      <View style={styles.reflectionPageResetInner}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View style={styles.givingGoalParent}>
              <GivingGoal
                givingGiven="Given"
                givingGoalGiven="Giving Goal"
                givingSeparator="$200.00"
                givingGoalSeparator="$2,245.00"
                givingGoalGivenColor="#e1ad01"
                givingGoalSeparatorColor="#e1ad01"
              />
              <SettingFaithGoal
                state="Active"
                iconBible={<IconBible width={7} height={52} />}
                state1="Default"
                addTransaction="Setting Faith Goal"
              />
            </View>
          </View>
          <View style={styles.bibleVersesParent}>
            <BibleVerses />
            <View style={styles.addToFavoriteParent}>
              <AddToFavorite
                state="Active"
                addToFavoriteHeight="unset"
                bibleIconHeight="52%"
                bibleIconWidth="7.2%"
                bibleIconPosition="absolute"
                bibleIconTop="24%"
                bibleIconRight="72%"
                bibleIconBottom="24%"
                bibleIconLeft="20.8%"
                bibleIconOverflow="hidden"
                bibleIconMaxHeight="100%"
                state1="Default"
                addTransaction="Add to Favorite"
                settingFaithGoalPosition="unset"
                settingFaithGoalHeight="40"
                settingFaithGoalTop="unset"
                settingFaithGoalRight="unset"
                settingFaithGoalBottom="unset"
                settingFaithGoalLeft="unset"
                settingFaithGoalAlignSelf="stretch"
                settingFaithGoalBackground="#e1ad01"
                settingFaithGoalBorderColor="#fff9e6"
                addTransactionHeight="unset"
                addTransactionWidth="unset"
                addTransactionFontSize={12}
                addTransactionColor="#fff9e6"
              />
              <RefreshButton
                state="Active"
                state1="Default"
                addTransaction="Refresh"
                settingFaithGoalPosition="unset"
                settingFaithGoalHeight="40"
                settingFaithGoalTop="unset"
                settingFaithGoalRight="unset"
                settingFaithGoalBottom="unset"
                settingFaithGoalLeft="unset"
                settingFaithGoalAlignSelf="unset"
                settingFaithGoalBackground="#e1ad01"
                settingFaithGoalBorderColor="#fff9e6"
                addTransactionHeight="unset"
                addTransactionWidth="unset"
                addTransactionFontSize={12}
                addTransactionColor="#fff9e6"
              />
            </View>
          </View>
        </View>
      </View>
      <Default1
        iconMoney3={require("../assets/active.png")}
        state="default"
        state1="default"
        state2="default"
        state3="default"
        profileHeight="100%"
        profileTop="0%"
        profileRight="0%"
        profileBottom="0%"
        profileLeft="0%"
        profilePosition="absolute"
        profileColor="#c99700"
      />
      <IPhoneBezel
        type="iPhone 16"
        iPhone16={require("../assets/iPhone-16.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reflectionPageResetContent: {
    flexDirection: "row",
    paddingTop: 0,
    paddingBottom: 356,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
    flex: 1,
  },
  frameLayout: {
    zIndex: null,
    width: Width.width_362,
  },
  reflectionPageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  reflectionPageResetInner: {
    height: 498,
    paddingTop: 104,
    marginLeft: -379,
    width: Width.width_362,
  },
  frameParent: {
    height: 394,
    gap: 27,
  },
  frameWrapper: {
    paddingLeft: Padding.padding_2,
    flexDirection: "row",
    height: 164,
  },
  givingGoalParent: {
    gap: Gap.gap_14,
    width: Width.width_360,
    height: 164,
  },
  bibleVersesParent: {
    height: 203,
    gap: 13,
    width: Width.width_360,
  },
  addToFavoriteParent: {
    width: 357,
    height: Height.height_40,
    zIndex: 1,
    gap: 107,
    flexDirection: "row",
  },
});

export default ReflectionPageReset;
