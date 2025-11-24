import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import IconBible1 from "../assets/Icon-Bible1.svg";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import {
  FontFamily,
  Width,
  Height,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
  FontSize,
  LineHeight,
  Margin,
} from "../GlobalStyles";

export type BibleVersesType = {
  /** Action props */
  onBibleVersesPress?: () => void;
};

const BibleVerses = ({ onBibleVersesPress }: BibleVersesType) => {
  return (
    <View style={styles.bibleVerses} onPress={onBibleVersesPress}>
      <View style={styles.iconBibleWrapper}>
        <IconBible1
          style={styles.iconBible}
          width={Width.width_32}
          height={Height.height_32}
        />
      </View>
      <View style={styles.yetToAllWhoDidReceiveHimParent}>
        <Text style={[styles.yetToAll, styles.john112Typo]}>
          “Yet to all who did receive him, to those who believed in his name, he
          gave the right to become children of God”
        </Text>
        <Text style={[styles.john112, styles.john112Typo]}>
          <Text style={styles.john112TxtContainer}>
            <UnorderedList style={styles.john1122}>
              <ListItem>John 1:12</ListItem>
            </UnorderedList>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  john112Typo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    width: Width.width_290,
  },
  bibleVerses: {
    width: Width.width_360,
    height: Height.height_150,
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 20,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod100,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    paddingLeft: Padding.padding_22,
    paddingTop: Padding.padding_28,
    paddingRight: Padding.padding_5,
    paddingBottom: Padding.padding_5,
    gap: Gap.gap_11,
  },
  iconBibleWrapper: {
    height: Height.height_53,
    paddingTop: Padding.padding_21,
    zIndex: 2,
    width: Width.width_32,
  },
  iconBible: {
    height: Height.height_32,
    width: Width.width_32,
  },
  yetToAllWhoDidReceiveHimParent: {
    height: Height.height_117,
    gap: Gap.gap_4,
    zIndex: 1,
    width: Width.width_290,
  },
  yetToAll: {
    height: Height.height_75,
    fontSize: FontSize.fs_13,
    lineHeight: LineHeight.lh_25,
    color: Color.colorBlack,
    textAlign: "center",
    justifyContent: "center",
  },
  john112: {
    height: Height.height_38,
    fontSize: FontSize.fs_12,
    lineHeight: LineHeight.lh_38,
    color: Color.gOLD3,
    textAlign: "left",
  },
  john112TxtContainer: {
    width: "100%",
  },
  john1122: {
    margin: Margin.m_0,
    paddingLeft: Padding.padding_16,
  },
});

export default BibleVerses;
