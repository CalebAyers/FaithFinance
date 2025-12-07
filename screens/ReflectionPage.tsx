import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import SectionContainer from "../components/SectionContainer";
import GivingSummaryCards from "../components/GivingSummaryCards";
import BibleVerses from "../components/BibleVerses";
import PrimaryButton from "../components/PrimaryButton";
import ActionButton from "../components/ActionButton";
import SetFaithGoalModal from "../components/SetFaithGoalModal";
import { Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useData } from "../context/DataContext";
import { formatCurrency } from "../utils/transactionUtils";
import { BIBLE_VERSES, type Verse } from "../data/bibleVerses";

// Reflection page - shows giving progress, bible verses, and faith goal management
const ReflectionPage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { transactions } = useData();
  
  // Faith goal state
  type FaithGoal = { amount: number; description?: string; createdAt?: string } | null;
  const FAITH_GOAL_KEY = '@ff:faithGoal';
  const [faithGoal, setFaithGoal] = useState<FaithGoal>(null);

  // Calculate total giving from transactions
  const totalGiving = transactions
    .filter(t => t.type === 'giving')
    .reduce((sum, t) => sum + t.amount, 0);

  // load persisted faith goal on mount
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(FAITH_GOAL_KEY);
        if (raw) setFaithGoal(JSON.parse(raw));
      } catch (e) {
        console.warn('Failed to load faith goal', e);
      }
    })();
  }, []);
  
  // Verse state - using shared verses
  const [currentVerse, setCurrentVerse] = useState<Verse>(() => {
    // pick an initial random verse
    const idx = Math.floor(Math.random() * BIBLE_VERSES.length);
    return BIBLE_VERSES[idx];
  });

  const handleSetFaithGoal = () => {
    setModalVisible(true);
  };

  const handleSaveGoal = (goal: any) => {
    // validate
    if (!goal || typeof goal.amount !== 'number' || goal.amount <= 0) {
      Alert.alert('Invalid goal', 'Please enter a valid amount greater than 0.');
      return;
    }

    // cumulative: if a faith goal already exists, add the new amount to it
    const existingAmount = faithGoal?.amount ?? 0;
    const toSave = {
      amount: existingAmount + goal.amount,
      description: goal.description || '',
      createdAt: new Date().toISOString(),
    };

    (async () => {
      try {
        await AsyncStorage.setItem(FAITH_GOAL_KEY, JSON.stringify(toSave));
        setFaithGoal(toSave);
      } catch (e) {
        console.warn('Failed to save faith goal', e);
        Alert.alert('Error', 'Failed to save faith goal.');
      }
    })();
  };

  const handleClearGoal = () => {
    Alert.alert(
      'Clear faith goal',
      'Are you sure you want to remove your faith goal?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Clear', style: 'destructive', onPress: async () => {
            try {
            await AsyncStorage.removeItem(FAITH_GOAL_KEY);
            setFaithGoal(null);
          } catch (e) {
            console.warn('Failed to clear faith goal', e);
            Alert.alert('Error', 'Failed to clear faith goal.');
          }
        } }
      ]
    );
  };

  const handleAddToFavorites = () => {
    (async () => {
      try {
        const FAVORITES_KEY = '@ff:favorites';
        const raw = await AsyncStorage.getItem(FAVORITES_KEY);
        const existing = raw ? JSON.parse(raw) : [];
        const already = existing.some((v: Verse) => v.verseReference === currentVerse.verseReference && v.verseText === currentVerse.verseText);
        if (already) {
          Alert.alert('Already saved', 'This verse is already in your favorites.');
          return;
        }
        const next = [currentVerse, ...existing];
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
        Alert.alert('Added to Favorites', `${currentVerse.verseReference} has been saved to your favorite verses.`);
        
        // Show a new random verse after adding to favorites
        handleRefreshVerse();
      } catch (e) {
        console.warn('Failed to add favorite', e);
        Alert.alert('Error', 'Failed to add verse to favorites. Please try again.');
      }
    })();
  };

  const handleRefreshVerse = () => {
    // pick a different random verse (if possible)
    if (BIBLE_VERSES.length === 0) return;
    let idx = Math.floor(Math.random() * BIBLE_VERSES.length);
    // avoid picking the same verse twice in a row when possible
    if (BIBLE_VERSES.length > 1) {
      const currentIdx = BIBLE_VERSES.findIndex(v => v.verseReference === currentVerse.verseReference && v.verseText === currentVerse.verseText);
      while (idx === currentIdx) {
        idx = Math.floor(Math.random() * BIBLE_VERSES.length);
      }
    }
    setCurrentVerse(BIBLE_VERSES[idx]);
  };

  return (
    <AppLayout 
      title="Reflection" 
      navigation={navigation}
      currentScreen="ReflectionPage"
    >
      {/* Giving Summary Cards */}
      <SectionContainer>
        <GivingSummaryCards 
          givenAmount={formatCurrency(totalGiving)}
          goalAmount={faithGoal ? formatCurrency(faithGoal.amount) : "$0.00"}
        />
      </SectionContainer>

      {/* Setting Faith Goal Button */}
      <SectionContainer>
        <PrimaryButton 
          onPress={handleSetFaithGoal}
          label="Setting Faith Goal"
          iconName="book"
        />
        {faithGoal && (
          <View style={{ marginTop: 8 }}>
            <ActionButton onPress={handleClearGoal} label="Clear Goal" />
          </View>
        )}
      </SectionContainer>

      {/* Bible Verse Section */}
      <SectionContainer>
        <BibleVerses verseText={currentVerse.verseText} verseReference={currentVerse.verseReference} />
      </SectionContainer>

      {/* Action Buttons */}
      <SectionContainer>
        <View style={styles.actionButtonsRow}>
          <ActionButton 
            onPress={handleAddToFavorites}
            label="Add to Favorite"
          />
          <ActionButton 
            onPress={handleRefreshVerse}
            label="Refresh"
          />
        </View>
      </SectionContainer>

      {/* Set Faith Goal Modal */}
      <SetFaithGoalModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveGoal}
      />
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});

export default ReflectionPage;
