import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Default from "../components/Default";
import Profile2 from "../components/Profile2";
import FavoriteVerses from "../components/FavoriteVerses";
import IconBible4 from "../assets/Icon-Bible4.svg";
import Default1 from "../components/Default1";
import IPhoneBezel from "../components/IPhoneBezel";
import {
  Width,
  Height,
  Color,
  FontFamily,
  FontSize,
  LineHeight,
  BoxShadow,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const ProfileProfilePageReset = () => {
  const [favoriteVersesItems] = useState([
    {
      state: "Active" as const,
      favoriteVersesFlexDirection: "",
      favoriteVersesAlignItems: "",
      iconBible: <IconBible4 width={7} height={52} />,
      showBibleIcon: true,
      bibleIconPosition: "",
      bibleIconHeight: "",
      bibleIconWidth: "",
      bibleIconTop: "",
      bibleIconRight: "",
      bibleIconBottom: "",
      bibleIconLeft: "",
      bibleIconOverflow: "",
      bibleIconMaxHeight: "",
      state1: "Default",
      addTransaction: "Favorite Verses",
      settingFaithGoalPosition: "",
      settingFaithGoalHeight: "",
      settingFaithGoalTop: "",
      settingFaithGoalRight: "",
      settingFaithGoalBottom: "",
      settingFaithGoalLeft: "",
      settingFaithGoalAlignSelf: "",
      settingFaithGoalBackground: "#2c2c2c",
      settingFaithGoalBorderColor: "",
      addTransactionHeight: "",
      addTransactionWidth: 122,
      addTransactionFontSize: "",
      addTransactionColor: "",
    },
    {
      state: "Active" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible4 width={Width.width_26} height={Height.height_23_4} />
      ),
      showBibleIcon: false,
      bibleIconPosition: "relative",
      bibleIconHeight: 23,
      bibleIconWidth: 26,
      bibleIconTop: "unset",
      bibleIconRight: "unset",
      bibleIconBottom: "unset",
      bibleIconLeft: "unset",
      bibleIconOverflow: "unset",
      bibleIconMaxHeight: "unset",
      state1: "Default",
      addTransaction: "Reset Password",
      settingFaithGoalPosition: "unset",
      settingFaithGoalHeight: 45,
      settingFaithGoalTop: "unset",
      settingFaithGoalRight: "unset",
      settingFaithGoalBottom: "unset",
      settingFaithGoalLeft: "unset",
      settingFaithGoalAlignSelf: "",
      settingFaithGoalBackground: "#2c2c2c",
      settingFaithGoalBorderColor: "",
      addTransactionHeight: "",
      addTransactionWidth: 126,
      addTransactionFontSize: "",
      addTransactionColor: "",
    },
    {
      state: "Active" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible4 width={Width.width_26} height={Height.height_23_4} />
      ),
      showBibleIcon: false,
      bibleIconPosition: "relative",
      bibleIconHeight: 23,
      bibleIconWidth: 26,
      bibleIconTop: "unset",
      bibleIconRight: "unset",
      bibleIconBottom: "unset",
      bibleIconLeft: "unset",
      bibleIconOverflow: "unset",
      bibleIconMaxHeight: "unset",
      state1: "Default",
      addTransaction: "Reset Moch Data",
      settingFaithGoalPosition: "unset",
      settingFaithGoalHeight: 45,
      settingFaithGoalTop: "unset",
      settingFaithGoalRight: "unset",
      settingFaithGoalBottom: "unset",
      settingFaithGoalLeft: "unset",
      settingFaithGoalAlignSelf: "",
      settingFaithGoalBackground: "#2c2c2c",
      settingFaithGoalBorderColor: "",
      addTransactionHeight: "",
      addTransactionWidth: 134,
      addTransactionFontSize: "",
      addTransactionColor: "",
    },
    {
      state: "Active" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible4 width={Width.width_26} height={Height.height_23_4} />
      ),
      showBibleIcon: false,
      bibleIconPosition: "relative",
      bibleIconHeight: 23,
      bibleIconWidth: 26,
      bibleIconTop: "unset",
      bibleIconRight: "unset",
      bibleIconBottom: "unset",
      bibleIconLeft: "unset",
      bibleIconOverflow: "unset",
      bibleIconMaxHeight: "unset",
      state1: "Default",
      addTransaction: "Log Out",
      settingFaithGoalPosition: "unset",
      settingFaithGoalHeight: 45,
      settingFaithGoalTop: "unset",
      settingFaithGoalRight: "unset",
      settingFaithGoalBottom: "unset",
      settingFaithGoalLeft: "unset",
      settingFaithGoalAlignSelf: "",
      settingFaithGoalBackground: "#2c2c2c",
      settingFaithGoalBorderColor: "",
      addTransactionHeight: "",
      addTransactionWidth: 64,
      addTransactionFontSize: "",
      addTransactionColor: "",
    },
  ]);

  return (
    <ScrollView
      style={styles.profileProfilePageReset}
      contentContainerStyle={styles.profileProfilePageResetContent}
    >
      <Default
        defaultMarginLeft={-3}
        state="default"
        profileHeight="100%"
        profileTop="0%"
        profileRight="0%"
        profileBottom="0%"
        profileLeft="0%"
        profilePosition="absolute"
        profileColor="#c99700"
      />
      <View style={styles.profileProfilePageResetInner}>
        <View style={styles.personalProfileParent}>
          <View style={styles.personalProfile}>
            <View style={styles.profileHeader}>
              <View style={styles.iconProfile2Wrapper}>
                <Profile2 />
              </View>
              <Text style={styles.picture}>Edit Image</Text>
            </View>
            <View style={styles.moneyInfo}>
              <View style={styles.currentMoneyParent}>
                <View style={styles.currentMoney}>
                  <Text style={styles.firstAndLast}>First and Last Name</Text>
                </View>
                <View style={styles.financeManagementWrapper}>
                  <View style={styles.financeManagement}>
                    <View style={styles.income}>
                      <Text style={[styles.income2, styles.income2FlexBox]}>
                        Income
                      </Text>
                      <Text style={[styles.separator, styles.textLayout]}>
                        $2,245.00
                      </Text>
                    </View>
                    <View style={styles.income}>
                      <Text style={[styles.giving2, styles.textFlexBox]}>
                        Giving
                      </Text>
                      <Text style={[styles.text, styles.textFlexBox]}>
                        $200.00
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.favoriteVersesParent}>
            {favoriteVersesItems.map((item, index) => (
              <FavoriteVerses
                key={index}
                state={item.state}
                favoriteVersesFlexDirection={item.favoriteVersesFlexDirection}
                favoriteVersesAlignItems={item.favoriteVersesAlignItems}
                iconBible={item.iconBible}
                showBibleIcon={item.showBibleIcon}
                bibleIconPosition={item.bibleIconPosition}
                bibleIconHeight={item.bibleIconHeight}
                bibleIconWidth={item.bibleIconWidth}
                bibleIconTop={item.bibleIconTop}
                bibleIconRight={item.bibleIconRight}
                bibleIconBottom={item.bibleIconBottom}
                bibleIconLeft={item.bibleIconLeft}
                bibleIconOverflow={item.bibleIconOverflow}
                bibleIconMaxHeight={item.bibleIconMaxHeight}
                state1={item.state1}
                addTransaction={item.addTransaction}
                settingFaithGoalPosition={item.settingFaithGoalPosition}
                settingFaithGoalHeight={item.settingFaithGoalHeight}
                settingFaithGoalTop={item.settingFaithGoalTop}
                settingFaithGoalRight={item.settingFaithGoalRight}
                settingFaithGoalBottom={item.settingFaithGoalBottom}
                settingFaithGoalLeft={item.settingFaithGoalLeft}
                settingFaithGoalAlignSelf={item.settingFaithGoalAlignSelf}
                settingFaithGoalBackground={item.settingFaithGoalBackground}
                settingFaithGoalBorderColor={item.settingFaithGoalBorderColor}
                addTransactionHeight={item.addTransactionHeight}
                addTransactionWidth={item.addTransactionWidth}
                addTransactionFontSize={item.addTransactionFontSize}
                addTransactionColor={item.addTransactionColor}
              />
            ))}
          </View>
        </View>
      </View>
      <Default1
        iconMoney3={require("../assets/active1.png")}
        state="default"
        activePosition="absolute"
        activeHeight="100%"
        activeTop="0%"
        activeRight="0%"
        activeBottom="0%"
        activeLeft="0%"
        homeColor="#c99700"
        state1="default"
        activePosition1="absolute"
        activeHeight1="100%"
        activeTop1="0%"
        activeRight1="0%"
        activeBottom1="0%"
        activeLeft1="0%"
        insightsColor="#c99700"
        state2="default"
        bookPosition="absolute"
        bookHeight="100%"
        bookTop="0%"
        bookRight="0%"
        bookBottom="0%"
        bookLeft="0%"
        reflectionColor="#c99700"
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
  profileProfilePageResetContent: {
    flexDirection: "row",
    paddingBottom: 333,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
    flex: 1,
  },
  income2FlexBox: {
    display: "flex",
    color: Color.successColor,
    width: Width.width_103,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  textLayout: {
    height: Height.height_19,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
  },
  textFlexBox: {
    color: Color.gOLD3,
    display: "flex",
    width: Width.width_103,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  profileProfilePageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  profileProfilePageResetInner: {
    height: 519,
    paddingTop: 141,
    marginLeft: -379,
    width: Width.width_360,
  },
  personalProfileParent: {
    height: 378,
    gap: 51,
    zIndex: null,
    width: Width.width_360,
  },
  personalProfile: {
    height: 99,
    boxShadow: BoxShadow.shadow_drop4,
    elevation: 12,
    borderStyle: "solid",
    borderColor: Color.backgroundColorLightMode1,
    borderWidth: 1,
    paddingTop: 9,
    paddingBottom: Padding.padding_1,
    flexDirection: "row",
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    width: Width.width_360,
  },
  profileHeader: {
    height: 89,
    alignItems: "flex-end",
    width: 71,
    zIndex: null,
  },
  iconProfile2Wrapper: {
    width: 65,
    height: 51,
    justifyContent: "flex-end",
    paddingRight: Padding.padding_5,
    flexDirection: "row",
  },
  picture: {
    fontSize: FontSize.fs_10,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
    width: 71,
  },
  moneyInfo: {
    height: 81,
    paddingTop: Padding.padding_5,
    width: Width.width_278,
    zIndex: null,
  },
  currentMoneyParent: {
    height: 76,
    gap: 9,
    width: Width.width_278,
  },
  currentMoney: {
    height: 17,
    paddingHorizontal: Padding.padding_5,
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    width: Width.width_278,
    flexDirection: "row",
    backgroundColor: Color.componentsBackgrounf,
  },
  firstAndLast: {
    width: 179,
    fontSize: FontSize.fs_16,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    lineHeight: LineHeight.lh_38,
    height: Height.height_38,
  },
  financeManagementWrapper: {
    width: 251,
    paddingLeft: Padding.padding_19,
    height: Height.height_50,
    flexDirection: "row",
    zIndex: null,
  },
  financeManagement: {
    width: 232,
    gap: Gap.gap_32,
    height: Height.height_50,
    flexDirection: "row",
    zIndex: null,
  },
  income: {
    width: Width.width_100,
    boxShadow: BoxShadow.shadow_drop,
    elevation: 8,
    backgroundColor: Color.colorOldlace,
    overflow: "hidden",
    gap: Gap.gap_3,
    height: Height.height_50,
    borderRadius: Border.br_12,
  },
  income2: {
    lineHeight: LineHeight.lh_28,
    fontSize: FontSize.fs_12,
    height: Height.height_28,
  },
  separator: {
    display: "flex",
    color: Color.successColor,
    width: Width.width_103,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  giving2: {
    lineHeight: LineHeight.lh_28,
    fontSize: FontSize.fs_12,
    height: Height.height_28,
  },
  text: {
    height: Height.height_19,
    fontSize: FontSize.fs_16,
    lineHeight: LineHeight.lh_38,
  },
  favoriteVersesParent: {
    height: 228,
    gap: Gap.gap_16,
    width: Width.width_360,
  },
});

export default ProfileProfilePageReset;
