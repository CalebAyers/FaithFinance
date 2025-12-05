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

// Reflection page - shows giving progress, bible verses, and faith goal management
const ReflectionPage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  // Faith goal state
  type FaithGoal = { amount: number; description?: string; createdAt?: string } | null;
  const FAITH_GOAL_KEY = '@ff:faithGoal';
  const [faithGoal, setFaithGoal] = useState<FaithGoal>(null);

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
  // Verse state for the Bible verse shown in this page
  const ALL_VERSES = [
    { verseText: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.", verseReference: "Proverbs 3:9-10" },
    { verseText: "Whoever can be trusted with very little can also be trusted with much.", verseReference: "Luke 16:10" },
    { verseText: "The wise store up choice food and olive oil, but fools gulp theirs down.", verseReference: "Proverbs 21:20" },
    { verseText: "Lazy hands make for poverty, but diligent hands bring wealth.", verseReference: "Proverbs 10:4" },
    { verseText: "All hard work brings a profit, but mere talk leads only to poverty.", verseReference: "Proverbs 14:23" },
    { verseText: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", verseReference: "Colossians 3:23" },
    { verseText: "The rich rule over the poor, and the borrower is slave to the lender.", verseReference: "Proverbs 22:7" },
    { verseText: "The wicked borrow and do not repay, but the righteous give generously.", verseReference: "Psalm 37:21" },
    { verseText: "Remember this: Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously. Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.", verseReference: "2 Corinthians 9:6-7" },
    { verseText: "One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.", verseReference: "Proverbs 11:24-25" },
    { verseText: "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.", verseReference: "Luke 6:38" },
    { verseText: "Dishonest money dwindles away, but whoever gathers money little by little makes it grow.", verseReference: "Proverbs 13:11" },
    { verseText: "Go to the ant, you sluggard; consider its ways and be wise! It has no commander, no overseer or ruler, yet it stores its provisions in summer and gathers its food at harvest.", verseReference: "Proverbs 6:6-8" },
    { verseText: "Put your outdoor work in order and get your fields ready; after that, build your house.", verseReference: "Proverbs 24:27" },
    { verseText: "For the love of money is a root of all kinds of evil.", verseReference: "1 Timothy 6:10" },
    { verseText: "No one can serve two masters. You cannot serve both God and money.", verseReference: "Matthew 6:24" },
    { verseText: "What good is it for someone to gain the whole world, yet forfeit their soul?", verseReference: "Mark 8:36" },
    { verseText: "I know what it is to be in need, and I know what it is to have plenty. I can do all this through him who gives me strength.", verseReference: "Philippians 4:12-13" },
    { verseText: "Keep your lives free from the love of money and be content with what you have.", verseReference: "Hebrews 13:5" },
    { verseText: "Honest scales and balances belong to the Lord; all the weights in the bag are of his making.", verseReference: "Proverbs 16:11" },
  ];

  const [currentVerse, setCurrentVerse] = useState(() => {
    // pick an initial random verse
    const idx = Math.floor(Math.random() * ALL_VERSES.length);
    return ALL_VERSES[idx];
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
            const zeroGoal = { amount: 0, description: '', createdAt: new Date().toISOString() };
            await AsyncStorage.setItem(FAITH_GOAL_KEY, JSON.stringify(zeroGoal));
            setFaithGoal(zeroGoal);
          } catch (e) {
            console.warn('Failed to clear faith goal', e);
            Alert.alert('Error', 'Failed to clear faith goal.');
          }
        } }
      ]
    );
  };

  const handleAddToFavorite = () => {
    (async () => {
      try {
        const FAVORITES_KEY = '@ff:favorites';
        const raw = await AsyncStorage.getItem(FAVORITES_KEY);
        const existing = raw ? JSON.parse(raw) as { verseText: string; verseReference: string }[] : [];
        const already = existing.some(v => v.verseReference === currentVerse.verseReference && v.verseText === currentVerse.verseText);
        if (already) {
          console.log('Verse already in favorites');
          return;
        }
        const next = [currentVerse, ...existing];
        await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
        console.log('Added to favorites', currentVerse);
      } catch (e) {
        console.warn('Failed to add favorite', e);
      }
    })();
  };

  const handleRefreshVerse = () => {
    // pick a different random verse (if possible)
    if (ALL_VERSES.length === 0) return;
    let idx = Math.floor(Math.random() * ALL_VERSES.length);
    // avoid picking the same verse twice in a row when possible
    if (ALL_VERSES.length > 1) {
      const currentIdx = ALL_VERSES.findIndex(v => v.verseReference === currentVerse.verseReference && v.verseText === currentVerse.verseText);
      while (idx === currentIdx) {
        idx = Math.floor(Math.random() * ALL_VERSES.length);
      }
    }
    setCurrentVerse(ALL_VERSES[idx]);
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
          givenAmount="$200.00"
          goalAmount={faithGoal ? `$${faithGoal.amount.toFixed(2)}` : "$2,245.00"}
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
            onPress={handleAddToFavorite}
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
