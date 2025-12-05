import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import IconBible1 from "../assets/Icon-Bible1.svg";
import { scale, verticalScale } from "../utils/responsive";
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
      {/* Title with icon - "Bible Verse" text with book icon to the right */}
      <View style={styles.titleRow}>
        <Text style={styles.titleText}>Bible Verse</Text>
        <IconBible1
          style={styles.iconBible}
          width={Width.width_32}
          height={Height.height_32}
        />
      </View>
      
      {/* Verse text container - centered in the box */}
      <View style={styles.verseTextContainer}>
        <Text style={styles.verseText}>
          "{verseText}"
        </Text>
      </View>
      
      {/* Verse reference - positioned at bottom right */}
      <View style={styles.referenceContainer}>
        <Text style={styles.john112}>
          {verseReference}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main container - cream card with gold border and shadow
  // Fully responsive - uses percentages and flex instead of fixed width
  bibleVerses: {
    width: '100%', // Responsive width instead of fixed Width.width_360
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
    paddingTop: Padding.padding_16,
    paddingRight: Padding.padding_16,
    paddingBottom: Padding.padding_12,
  },
  
  // Title row - "Bible Verse" text with icon to the right
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_4,
    marginBottom: Gap.gap_10,
  },
  
  // Title text styling
  titleText: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    color: Color.gOLD3,
  },
  
  // Book icon
  iconBible: {
    height: verticalScale(18),
    width: scale(18),
  },
  
  // Verse text container - centered in the box
  verseTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.padding_16,
  },
  
  // Verse text styling - italic, centered, black
  verseText: {
    fontSize: FontSize.fs_14,
    lineHeight: LineHeight.lh_25,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    color: Color.colorBlack,
    textAlign: "center",
  },
  
  // Reference container - positions at bottom right with small margins
  referenceContainer: {
    alignSelf: 'flex-end',
    marginTop: Gap.gap_4,
    marginRight: Gap.gap_4,
  },
  
  // Reference text styling - gold, right-aligned
  john112: {
    fontSize: FontSize.fs_14,
    lineHeight: LineHeight.lh_38,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontStyle: "italic",
    color: Color.gOLD3,
    textAlign: "right",
  },
});

export default BibleVerses;
