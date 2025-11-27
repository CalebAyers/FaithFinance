import * as React from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import Return from "../components/Return";
import Vector13 from "../assets/Vector13.svg";
import Profile from "../components/Profile";
import Vector11 from "../assets/Vector11.svg";
import SmallEditButton from "../components/SmallEditButton";
import IconBible2 from "../assets/Icon-Bible2.svg";
import BibleVerses from "../components/BibleVerses";
import FrameComponent from "../components/FrameComponent";
import IPhoneBezel from "../components/IPhoneBezel";
import {
  Height,
  Padding,
  Width,
  Color,
  Gap,
  FontSize,
  LineHeight,
  FontFamily,
} from "../GlobalStyles";

const FavoriteVersesPageReset = () => {
  return (
    <ScrollView
      style={styles.favoriteVersesPageReset}
      contentContainerStyle={styles.favoriteVersesPageResetContent}
    >
      <View style={styles.favoriteBibleVersesParent}>
        <Text style={styles.favoriteBibleVerses}>Favorite Bible Verses</Text>
        <View style={styles.headerBarDefault}>
          <Return
            state="Active"
            returnIcon={<Vector13 width={75} height={55} />}
          />
          <View style={styles.iconProfile}>
            <Profile
              state="default"
              profilePosition="absolute"
              profileTop="0%"
              profileLeft="0%"
              profileHeight="100%"
              profileRight="0%"
              profileBottom="0%"
              profileColor="#c99700"
              vector={<Vector11 width={83} height={83} />}
            />
          </View>
        </View>
        <View style={styles.smallEditButtonWrapper}>
          <SmallEditButton
            state="Active"
            smallEditButtonWidth={110}
            iconBible={<IconBible2 width={8} height={Height.height_20_8} />}
            bibleIconWidth={8}
            state1="Default"
            addTransaction="Edit"
            addTransactionColor="#fff9e6"
            addTransactionPosition="unset"
            addTransactionHeight="40"
            addTransactionTop="unset"
            addTransactionRight="unset"
            addTransactionBottom="unset"
            addTransactionLeft="unset"
            addTransactionBackgroundColor="#e1ad01"
            addTransactionBorderStyle="solid"
            addTransactionBorderColor="#fff9e6"
            addTransactionBorderWidth={1}
            addTransactionWidth="unset"
            addTransactionFontSize={14}
          />
        </View>
        <View style={styles.frameViewLayout}>
          <BibleVerses onBibleVersesPress={() => {}} />
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
          iPhoneBezelHeight={854}
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
  favoriteVersesPageResetContent: {
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
    width: Width.width_376,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  favoriteVersesPageReset: {
    width: "100%",
    backgroundColor: Color.backgroundColorLightMode,
    flex: 1,
    maxWidth: "100%",
  },
  favoriteBibleVersesParent: {
    width: Width.width_393,
    height: Height.height_852,
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
  headerBarDefault: {
    marginRight: -1,
    width: Width.width_394,
    height: Height.height_90,
    backgroundColor: Color.mainRed,
    overflow: "hidden",
    justifyContent: "space-between",
    paddingLeft: Padding.padding_16,
    paddingTop: Padding.padding_14,
    paddingRight: Padding.padding_24,
    paddingBottom: Padding.padding_18,
    gap: Gap.gap_20,
    zIndex: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  iconProfile: {
    height: Height.height_32,
    width: Width.width_32,
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

export default FavoriteVersesPageReset;
