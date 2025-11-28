import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Default from "../components/Default";
import Profile2 from "../components/Profile2";
import FavoriteVerses from "../components/FavoriteVerses";
import IconBible5 from "../assets/Icon-Bible5.svg";
import Home from "../components/Home";
import Vector6 from "../assets/Vector6.svg";
import Dashboard from "../components/Dashboard";
import Vector7 from "../assets/Vector7.svg";
import Book from "../components/Book";
import Vector10 from "../assets/Vector10.svg";
import Profile1 from "../components/Profile1";
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

const ProfileProfilePage = () => {
  const [favoriteVersesItems] = useState([
    {
      state: "Default" as const,
      favoriteVersesFlexDirection: "",
      favoriteVersesAlignItems: "",
      iconBible: <IconBible5 width={7} height={52} />,
      showBibleIcon: true,
      bibleIconPosition: "absolute",
      bibleIconHeight: "52%",
      bibleIconWidth: "7.22%",
      bibleIconTop: "24%",
      bibleIconRight: "71.94%",
      bibleIconBottom: "24%",
      bibleIconLeft: "20.83%",
      bibleIconOverflow: "hidden",
      bibleIconMaxHeight: "100%",
      state1: "Default",
      addTransaction: "Favorite Verses",
      settingFaithGoalPosition: "",
      settingFaithGoalHeight: "",
      settingFaithGoalTop: "",
      settingFaithGoalRight: "",
      settingFaithGoalBottom: "",
      settingFaithGoalLeft: "",
      settingFaithGoalAlignSelf: "",
      settingFaithGoalBackground: "#fff9e6",
      settingFaithGoalBorderColor: "#2c2c2c",
      addTransactionHeight: "",
      addTransactionWidth: 122,
      addTransactionFontSize: "",
      addTransactionColor: "#2c2c2c",
    },
    {
      state: "Default" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible5 width={Width.width_26} height={Height.height_23_4} />
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
      settingFaithGoalBackground: "#fff9e6",
      settingFaithGoalBorderColor: "#2c2c2c",
      addTransactionHeight: "",
      addTransactionWidth: 126,
      addTransactionFontSize: "",
      addTransactionColor: "#2c2c2c",
    },
    {
      state: "Default" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible5 width={Width.width_26} height={Height.height_23_4} />
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
      settingFaithGoalBackground: "#fff9e6",
      settingFaithGoalBorderColor: "#2c2c2c",
      addTransactionHeight: "",
      addTransactionWidth: 134,
      addTransactionFontSize: "",
      addTransactionColor: "#2c2c2c",
    },
    {
      state: "Default" as const,
      favoriteVersesFlexDirection: "row",
      favoriteVersesAlignItems: "flex-start",
      iconBible: (
        <IconBible5 width={Width.width_26} height={Height.height_23_4} />
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
      settingFaithGoalBackground: "#fff9e6",
      settingFaithGoalBorderColor: "#2c2c2c",
      addTransactionHeight: "",
      addTransactionWidth: 64,
      addTransactionFontSize: "",
      addTransactionColor: "#2c2c2c",
    },
  ]);

  return (
    <ScrollView
      style={styles.profileProfilePage}
      contentContainerStyle={styles.profileProfilePageContent}
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
      <View style={styles.profileProfilePageInner}>
        <View style={styles.personalProfileParent}>
          <View style={styles.personalProfile}>
            <View style={styles.frameParent}>
              <View style={styles.iconProfile2Wrapper}>
                <Profile2 />
              </View>
              <Text style={styles.picture}>Edit Image</Text>
            </View>
            <View style={styles.personalProfileInner}>
              <View style={styles.currentMoneyParent}>
                <View style={[styles.currentMoney, styles.currentMoneyFlexBox]}>
                  <Text style={styles.firstAndLast}>First and Last Name</Text>
                </View>
                <View style={styles.incomeGivingGridWrapper}>
                  <View style={styles.incomeGivingGrid}>
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
          <View style={styles.actionButtons}>
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
      <View style={[styles.navigationBarDefault, styles.currentMoneyFlexBox]}>
        <Home
          state="default"
          activePosition="relative"
          activeHeight={32}
          activeTop="unset"
          activeRight="unset"
          activeBottom="unset"
          activeLeft="unset"
          vector={<Vector6 width={67} height={73} />}
          homeColor="#e5e5e5"
        />
        <Image
          style={styles.iconMoney3}
          contentFit="cover"
          source={require("../assets/Icon-money-31.png")}
        />
        <Dashboard
          state="default"
          activePosition="relative"
          activeHeight={32}
          activeTop="unset"
          activeRight="unset"
          activeBottom="unset"
          activeLeft="unset"
          vector={<Vector7 width={58} height={67} />}
          insightsColor="#e5e5e5"
        />
        <Book
          state="default"
          bookPosition="relative"
          bookHeight={32}
          bookTop="unset"
          bookRight="unset"
          bookBottom="unset"
          bookLeft="unset"
          vector={<Vector10 width={67} height={73} />}
          reflectionColor="#e5e5e5"
        />
        <Profile1
          state="active"
          profilePosition="relative"
          profileTop="unset"
          profileLeft="unset"
          profileHeight="100%"
          profileRight="0%"
          profileBottom="0%"
          profileColor="#c99700"
        />
      </View>
      <IPhoneBezel
        type="iPhone 16"
        iPhone16={require("../assets/iPhone-16.png")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileProfilePageContent: {
    flexDirection: "row",
    paddingBottom: 333,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: 852,
    flex: 1,
  },
  currentMoneyFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
  profileProfilePage: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  profileProfilePageInner: {
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
  frameParent: {
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
  personalProfileInner: {
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
    alignItems: "center",
    justifyContent: "center",
    width: Width.width_278,
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
  incomeGivingGridWrapper: {
    width: 251,
    paddingLeft: Padding.padding_19,
    height: Height.height_50,
    flexDirection: "row",
    zIndex: null,
  },
  incomeGivingGrid: {
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
    gap: Gap.gap_3,
    overflow: "hidden",
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
  actionButtons: {
    height: 228,
    gap: Gap.gap_16,
    width: Width.width_360,
  },
  navigationBarDefault: {
    height: Height.height_100,
    width: Width.width_394,
    position: "absolute",
    right: -1,
    bottom: 0,
    boxShadow: BoxShadow.shadow_drop3,
    elevation: 6,
    borderRadius: Border.br_6,
    backgroundColor: Color.mainRed,
    paddingTop: Padding.padding_12,
    paddingBottom: Padding.padding_13,
    gap: Gap.gap_45,
    zIndex: 3,
    overflow: "hidden",
  },
  iconMoney3: {
    height: Height.height_32_23,
    width: Width.width_32_23,
  },
});

export default ProfileProfilePage;
