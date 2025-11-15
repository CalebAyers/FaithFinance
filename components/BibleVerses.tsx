import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import IconBible from "../assets/Icon-Bible.svg";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import {
  FontFamily,
  Width,
  BoxShadow,
  Border,
  Color,
  Padding,
  Gap,
  Height,
  FontSize,
  LineHeight,
} from "../GlobalStyles";

const BibleVerses = () => {
  return (
    <View style={styles.bibleVerses}>
      <View style={styles.iconBibleWrapper}>
        <IconBible
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
            <UnorderedList style={styles.bibleVersesJohn112}>
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
    height: 150,
    boxShadow: BoxShadow.shadow_drop1,
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
    zIndex: 3,
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
    height: 117,
    gap: Gap.gap_4,
    zIndex: 1,
    width: Width.width_290,
  },
  yetToAll: {
    height: 75,
    fontSize: 13,
    lineHeight: 25,
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
  bibleVersesJohn112: {
    margin: 0,
    paddingLeft: Padding.padding_16,
  },
});

export default BibleVerses;
