import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
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

// Bible verse card component
// Displays a Bible verse with icon, text, and reference
// Structure:
//   - Main container (bibleVerses): Cream background with gold border
//   - Content wrapper: Holds icon + verse text in a row
//     - Icon wrapper: Book icon vertically centered with text
//     - Text container: Verse message in italic
//   - Reference container: Verse reference (e.g., "John 3:16") at bottom right
// The layout is dynamic - box height adjusts based on text length
export type BibleVersesType = {
  /** Action props */
  onBibleVersesPress?: () => void;
  /** Verse text - the main Bible verse content */
  verseText?: string;
  /** Verse reference - e.g., "John 3:16" */
  verseReference?: string;
};

const BibleVerses = ({ 
  onBibleVersesPress, 
  verseText = "Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God",
  verseReference = "John 1:12"
}: BibleVersesType) => {
  return (
    <View style={styles.bibleVerses}>
      {/* Content wrapper - holds icon and verse text in a row */}
      <View style={styles.contentWrapper}>
        {/* Book icon - vertically centered with verse text */}
        <View style={styles.iconBibleWrapper}>
          <IconBible1
            style={styles.iconBible}
            width={Width.width_32}
            height={Height.height_32}
          />
        </View>
        {/* Verse text container - italic centered text */}
        <View style={styles.yetToAllWhoDidReceiveHimParent}>
          <Text style={[styles.yetToAll, styles.john112Typo]}>
            "{verseText}"
          </Text>
        </View>
      </View>
      {/* Verse reference - positioned at bottom right */}
      <View style={styles.referenceContainer}>
        <Text style={[styles.john112, styles.john112Typo]}>
          <Text style={styles.john112TxtContainer}>
            <UnorderedList style={styles.john1122}>
              <ListItem>{verseReference}</ListItem>
            </UnorderedList>
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Shared typography style for verse text and reference
  john112Typo: {
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    width: Width.width_290,
  },
  
  // Main container - cream card with gold border and shadow
  // Uses column layout to stack content (icon+text) and reference
  // minHeight allows box to grow with longer verses
  bibleVerses: {
    width: Width.width_360,
    minHeight: Height.height_150,
    boxShadow: BoxShadow.shadow_drop2,
    elevation: 20,
    borderRadius: Border.br_12,
    backgroundColor: Color.componentsBackgrounf,
    borderStyle: "solid",
    borderColor: Color.colorGoldenrod100,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "column",
    paddingLeft: Padding.padding_22,
    paddingTop: Padding.padding_28,
    paddingRight: Padding.padding_16,
    paddingBottom: Padding.padding_12,
  },
  
  // Content wrapper - holds icon and verse text in horizontal row
  // flex: 1 allows it to take available space
  contentWrapper: {
    flexDirection: "row",
    gap: 12, // Space between icon and text
    flex: 1,
  },
  
  // Book icon wrapper - centers icon vertically with verse text
  iconBibleWrapper: {
    zIndex: 2,
    width: Width.width_32,
    justifyContent: "center",
  },
  
  // Book icon itself
  iconBible: {
    height: Height.height_32,
    width: Width.width_32,
  },
  
  // Verse text container - centers text vertically
  yetToAllWhoDidReceiveHimParent: {
    zIndex: 1,
    width: Width.width_290,
    justifyContent: "center",
  },
  
  // Verse text styling - italic, centered, black
  yetToAll: {
    fontSize: 14,
    lineHeight: LineHeight.lh_25,
    color: Color.colorBlack,
    textAlign: "center",
    justifyContent: "center",
  },
  
  // Reference container - positions at bottom right with small margins
  referenceContainer: {
    alignSelf: 'flex-end',
    marginTop: 4, // Small space between text and reference
    marginRight: 8, // Space from right edge
  },
  
  // Reference text styling - gold, right-aligned
  john112: {
    fontSize: 16,
    lineHeight: LineHeight.lh_38,
    color: Color.gOLD3,
    textAlign: "right",
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
