import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Default2 from "../components/Default2";
import GivingGoal from "../components/GivingGoal";
import SettingFaithGoal from "../components/SettingFaithGoal";
import IconBible3 from "../assets/Icon-Bible3.svg";
import BibleVerses from "../components/BibleVerses";
import AddToFavorite from "../components/AddToFavorite";
import RefreshButton from "../components/RefreshButton";
import Default3 from "../components/Default3";
import IPhoneBezel from "../components/IPhoneBezel";
import { Width, Color, Padding, Gap, Height } from "../GlobalStyles";

const ReflectionPage = () => {
  return (
    <ScrollView
      style={styles.reflectionPage}
      contentContainerStyle={styles.reflectionPageContent}
    >
      <Default2
        state="default"
        profileHeight="32"
        profileTop="29"
        profileRight="unset"
        profileBottom="unset"
        profileLeft="349"
        profilePosition="absolute"
        profileColor="#e5e5e5"
      />
      <View style={styles.reflectionPageInner}>
        <View style={[styles.frameParent, styles.frameLayout]}>
          <View style={[styles.frameWrapper, styles.frameLayout]}>
            <View style={styles.givingGoalParent}>
              <GivingGoal
                givingGiven="Given"
                givingGoalGiven="Giving Goal"
                givingSeparator="$200.00"
                givingGoalSeparator="$2,245.00"
                givingGivenColor="#000"
                givingGoalGivenColor="#e1ad01"
                givingSeparatorColor="#333"
                givingGoalSeparatorColor="#e1ad01"
              />
              <SettingFaithGoal
                state="Default"
                iconBible={<IconBible3 width={7} height={52} />}
                state1="Default"
                addTransaction="Setting Faith Goal"
                settingFaithGoalPosition="absolute"
                settingFaithGoalHeight="100%"
                settingFaithGoalTop="0%"
                settingFaithGoalRight="0%"
                settingFaithGoalBottom="0%"
                settingFaithGoalLeft="0%"
                settingFaithGoalAlignSelf="unset"
                settingFaithGoalBackground="#fff9e6"
                settingFaithGoalBorderColor="#e1ad01"
                addTransactionHeight="38"
                addTransactionWidth="140"
                addTransactionFontSize={16}
                addTransactionColor="#e1ad01"
              />
            </View>
          </View>
          <View style={styles.bibleVersesParent}>
            <BibleVerses />
            <View style={styles.addToFavoriteParent}>
              <AddToFavorite
                state="Default"
                state1="Default"
                addTransaction="Add to Favorite"
                settingFaithGoalPosition="unset"
                settingFaithGoalHeight="40"
                settingFaithGoalTop="unset"
                settingFaithGoalRight="unset"
                settingFaithGoalBottom="unset"
                settingFaithGoalLeft="unset"
                settingFaithGoalAlignSelf="unset"
                settingFaithGoalBackground="#fff9e6"
                settingFaithGoalBorderColor="#e1ad01"
                addTransactionHeight="unset"
                addTransactionWidth="unset"
                addTransactionFontSize={12}
                addTransactionColor="#e1ad01"
              />
              <RefreshButton
                state="Default"
                state1="Default"
                addTransaction="Refresh"
                settingFaithGoalPosition="unset"
                settingFaithGoalHeight="40"
                settingFaithGoalTop="unset"
                settingFaithGoalRight="unset"
                settingFaithGoalBottom="unset"
                settingFaithGoalLeft="unset"
                settingFaithGoalAlignSelf="unset"
                settingFaithGoalBackground="#fff9e6"
                settingFaithGoalBorderColor="#e1ad01"
                addTransactionHeight="unset"
                addTransactionWidth="unset"
                addTransactionFontSize={12}
                addTransactionColor="#e1ad01"
              />
            </View>
          </View>
        </View>
      </View>
      <Default3
        state="default"
        activePosition="relative"
        activeHeight="32"
        activeTop="unset"
        activeRight="unset"
        activeBottom="unset"
        activeLeft="unset"
        homeColor="#e5e5e5"
        state1="default"
        activePosition1="relative"
        activeHeight1="32"
        activeTop1="unset"
        activeRight1="unset"
        activeBottom1="unset"
        activeLeft1="unset"
        insightsColor="#e5e5e5"
        state2="default"
        profileHeight="32"
        profileTop="unset"
        profileRight="unset"
        profileBottom="unset"
        profileLeft="unset"
        profilePosition="relative"
        profileColor="#e5e5e5"
      />
      <IPhoneBezel
        type="iPhone 16"
        iPhone16={require("../assets/iPhone-16.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  reflectionPageContent: {
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
  reflectionPage: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  reflectionPageInner: {
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

export default ReflectionPage;
