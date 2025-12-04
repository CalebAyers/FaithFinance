import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import BibleVerses from "../components/BibleVerses";
import EditButton from "../components/EditButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

/**
 * FavoriteVersesPage - Saved Bible verses collection
 * Displays: User's curated list of favorite Bible verses for spiritual guidance
 * Features: Edit mode to add/remove verses, back navigation
 */
const FavoriteVersesPage = () => {
  const navigation = useNavigation();

  const [favorites, setFavorites] = React.useState<{ verseText: string; verseReference: string }[]>([]);
  const [editMode, setEditMode] = React.useState(false);

  const FAVORITES_KEY = '@ff:favorites';

  const loadFavorites = async () => {
    try {
      const raw = await AsyncStorage.getItem(FAVORITES_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      setFavorites(parsed);
    } catch (e) {
      console.warn('Failed to load favorites', e);
    }
  };

  const saveFavorites = async (next: { verseText: string; verseReference: string }[]) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      setFavorites(next);
    } catch (e) {
      console.warn('Failed to save favorites', e);
    }
  };

  const handleToggleEdit = () => {
    setEditMode(v => !v);
  };

  const handleRemove = (idx: number) => {
    const verse = favorites[idx];
    Alert.alert(
      'Remove favorite',
      `Remove "${verse.verseReference}" from favorites?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => {
          const next = favorites.filter((_, i) => i !== idx);
          saveFavorites(next);
        } }
      ]
    );
  };

  // Reload favorites when this screen gains focus
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [])
  );

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
      {/* Verses List - using persisted favorites if available */}
      {favorites.length === 0 ? (
        <View style={styles.verseContainer}>
          <Text style={{ color: '#666' }}>You have no favorite verses yet. Add one from the Reflection page.</Text>
        </View>
      ) : (
        favorites.map((v, idx) => (
          <View style={styles.verseContainer} key={`${v.verseReference}-${idx}`}>
            <BibleVerses verseText={v.verseText} verseReference={v.verseReference} />
            {editMode && (
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(idx)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        ))
      )}

      {/* Edit Button at the end */}
      <EditButton onPress={handleToggleEdit} label={editMode ? 'Done' : 'Edit'} />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  verseContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    right: 12,
    top: 8,
    backgroundColor: 'rgba(220,220,220,0.9)',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  removeText: {
    color: '#b00020',
    fontWeight: '600',
  },
});

export default FavoriteVersesPage;