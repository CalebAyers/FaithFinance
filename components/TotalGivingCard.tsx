import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily, Border, Padding, Gap, FontSize } from "../GlobalStyles";
import { formatCurrency } from "../utils/transactionUtils";

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
        <Text style={styles.givingValue}>{formatCurrency(amount)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  givingCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: Border.br_12,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    marginBottom: Gap.gap_10,
  },
  givingContent: {
    padding: Padding.padding_14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  givingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Gap.gap_10,
  },
  givingLabel: {
    fontSize: FontSize.fs_18,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
  },
  givingValue: {
    fontSize: FontSize.fs_18,
    fontWeight: '700',
    fontFamily: FontFamily.interSemiBold,
    color: Color.gOLD3,
  },
});

export default TotalGivingCard;
