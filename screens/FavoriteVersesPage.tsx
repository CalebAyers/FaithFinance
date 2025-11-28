import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Default4 from "../components/Default4";
import SmallEditButton from "../components/SmallEditButton";
import BibleVerses from "../components/BibleVerses";
import FrameComponent from "../components/FrameComponent";
import IPhoneBezel from "../components/IPhoneBezel";
import {
  Padding,
  Height,
  Color,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const FavoriteVersesPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={styles.favoriteVersesPage}
      contentContainerStyle={styles.favoriteVersesPageContent}
    >
      <View style={styles.favoriteBibleVersesParent}>
        <Text style={styles.favoriteBibleVerses}>Favorite Bible Verses</Text>
        <Default4
          state="Default"
          state1="default"
          profileHeight="100%"
          profileTop="0%"
          profileRight="0%"
          profileBottom="0%"
          profileLeft="0%"
          profilePosition="absolute"
          profileColor="#c99700"
        />
        <View style={styles.smallEditButtonWrapper}>
          <SmallEditButton
            state="Default"
            state1="Default"
            addTransaction="Edit"
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
            addTransactionFontSize={14}
            addTransactionColor="#e1ad01"
          />
        </View>
        <View style={styles.frameViewLayout}>
          <BibleVerses
            onBibleVersesPress={() => navigation.navigate("BibleVerses")}
          />
        </View>
        <View style={styles.frameViewLayout}>
          <BibleVerses />
        </View>
        <View style={styles.frameViewLayout}>
          <BibleVerses />
        </View>
        <FrameComponent />
        <IPhoneBezel
          type="iPhone 16"
          iPhone16={require("../assets/iPhone-16.png")}
        />
      </View>
      <View style={[styles.frameView, styles.frameViewLayout]}>
        <BibleVerses />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favoriteVersesPageContent: {
    flexDirection: "column",
    paddingBottom: 214,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 1152,
    flex: 1,
  },
  frameViewLayout: {
    paddingRight: Padding.padding_16,
    height: Height.height_150,
    width: 376,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  favoriteVersesPage: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  favoriteBibleVersesParent: {
    width: 393,
    height: 852,
    zIndex: 2,
    alignItems: "flex-end",
    paddingTop: 0,
    gap: Gap.gap_10,
  },
  favoriteBibleVerses: {
    width: 343,
    position: "absolute",
    top: 98,
    right: 23,
    fontSize: FontSize.fs_18,
    lineHeight: LineHeight.lh_38,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    height: Height.height_40,
  },
  smallEditButtonWrapper: {
    width: 135,
    paddingRight: 25,
    justifyContent: "flex-end",
    flexDirection: "row",
    height: Height.height_40,
  },
  frameView: {
    marginTop: -64,
  },
});

export default FavoriteVersesPage;
