import * as React from "react";
import { StyleSheet, View } from "react-native";
import BibleVerses from "./BibleVerses";
import AddToFavorite from "./AddToFavorite";
import RefreshButton from "./RefreshButton";
import { Width, Height } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.bibleVersesParent}>
      <BibleVerses />
      <View style={styles.addToFavoriteParent}>
        <AddToFavorite
          state="Active"
          state1="Default"
          addTransaction="Add to Favorite"
          addTransactionBackgroundColor="#e1ad01"
          addTransactionBorderStyle="solid"
          addTransactionBorderColor="#fff9e6"
          addTransactionBorderWidth={1}
          addTransactionPosition="unset"
          addTransactionHeight="40"
          addTransactionTop="unset"
          addTransactionRight="unset"
          addTransactionBottom="unset"
          addTransactionLeft="unset"
          addTransactionAlignSelf="stretch"
          addTransactionColor="#fff9e6"
          addTransactionWidth="unset"
          addTransactionFontSize={12}
        />
        <RefreshButton
          state="Active"
          state1="Default"
          addTransaction="Refresh"
          addTransactionBackgroundColor="#e1ad01"
          addTransactionBorderStyle="solid"
          addTransactionBorderColor="#fff9e6"
          addTransactionBorderWidth={1}
          addTransactionPosition="unset"
          addTransactionHeight="40"
          addTransactionTop="unset"
          addTransactionRight="unset"
          addTransactionBottom="unset"
          addTransactionLeft="unset"
          addTransactionAlignSelf="unset"
          addTransactionColor="#fff9e6"
          addTransactionWidth="unset"
          addTransactionFontSize={12}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bibleVersesParent: {
    width: Width.width_360,
    height: 203,
    gap: 13,
  },
  addToFavoriteParent: {
    width: Width.width_357,
    height: Height.height_40,
    zIndex: 1,
    flexDirection: "row",
    gap: 107,
  },
});

export default FrameComponent1;
