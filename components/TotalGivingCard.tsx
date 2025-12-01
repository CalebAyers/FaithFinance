import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface TotalGivingCardProps {
  amount: number;
}

// Card displaying total giving amount with icon
const TotalGivingCard = ({ amount }: TotalGivingCardProps) => {
  return (
    <View style={styles.givingCard}>
      <View style={styles.givingContent}>
        <View style={styles.givingHeader}>
          <Ionicons name="trending-up" size={24} color={Color.gOLD3} />
          <Text style={styles.givingLabel}>Total Giving</Text>
        </View>
        <Text style={styles.givingValue}>${amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  givingCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    marginBottom: 12,
  },
  givingContent: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  givingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  givingLabel: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
  },
  givingValue: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
  },
});

export default TotalGivingCard;
