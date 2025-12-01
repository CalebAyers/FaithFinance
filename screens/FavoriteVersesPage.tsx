import * as React from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import BibleVerses from "../components/BibleVerses";
import EditButton from "../components/EditButton";

// Favorite Verses page - displays saved bible verses
const FavoriteVersesPage = () => {
  const navigation = useNavigation();

  const handleEdit = () => {
    console.log("Edit verses");
    // TODO: implement edit mode
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <AppLayout 
      title="Favorite Bible Verses" 
      navigation={navigation}
      currentScreen="FavoriteVersesPage"
      showBackButton={true}
      onBackPress={handleBackPress}
    >
      {/* Verses List - using BibleVerses component */}
      <View style={styles.verseContainer}>
        <BibleVerses 
          verseText="For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life"
          verseReference="John 3:16"
        />
      </View>
      <View style={styles.verseContainer}>
        <BibleVerses 
          verseText="Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight"
          verseReference="Proverbs 3:5-6"
        />
      </View>
      <View style={styles.verseContainer}>
        <BibleVerses 
          verseText="I can do all this through him who gives me strength"
          verseReference="Philippians 4:13"
        />
      </View>
      <View style={styles.verseContainer}>
        <BibleVerses 
          verseText="The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul"
          verseReference="Psalm 23:1-3"
        />
      </View>

      {/* Edit Button at the end */}
      <EditButton onPress={handleEdit} />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  verseContainer: {
    marginBottom: 12,
  },
});

export default FavoriteVersesPage;