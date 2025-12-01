import * as React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import SectionContainer from "../components/SectionContainer";
import GivingSummaryCards from "../components/GivingSummaryCards";
import BibleVerses from "../components/BibleVerses";
import PrimaryButton from "../components/PrimaryButton";
import ActionButton from "../components/ActionButton";
import SetFaithGoalModal from "../components/SetFaithGoalModal";

// Reflection page - shows giving progress, bible verses, and faith goal management
const ReflectionPage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSetFaithGoal = () => {
    setModalVisible(true);
  };

  const handleSaveGoal = (goal: any) => {
    console.log("New faith goal:", goal);
    // TODO: Save goal to database/API
  };

  const handleAddToFavorite = () => {
    console.log("Add current verse to favorites");
    // TODO: implement add to favorites logic
  };

  const handleRefreshVerse = () => {
    console.log("Refresh bible verse");
    // TODO: implement verse refresh logic
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
          goalAmount="$2,245.00"
        />
      </SectionContainer>

      {/* Setting Faith Goal Button */}
      <SectionContainer>
        <PrimaryButton 
          onPress={handleSetFaithGoal}
          label="Setting Faith Goal"
          iconName="book"
        />
      </SectionContainer>

      {/* Bible Verse Section */}
      <SectionContainer>
        <BibleVerses />
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
