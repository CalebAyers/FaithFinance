import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Color, FontFamily } from "../GlobalStyles";

interface StatCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  category: string;
  value: string;
  type: 'spending' | 'income';
}

const StatCard = ({ icon, label, category, value, type }: StatCardProps) => {
  const isIncome = type === 'income';
  const color = isIncome ? Color.successColor : Color.mainRed;

  return (
    <View style={[styles.statCard, isIncome ? styles.incomeCard : styles.spendingCard]}>
      <View style={styles.statHeader}>
        <Ionicons name={icon} size={20} color={color} />
        <Text style={[styles.statLabel, isIncome && styles.incomeLabel]}>{label}</Text>
      </View>
      <Text style={[styles.statCategory, isIncome && styles.incomeText]}>{category}</Text>
      <Text style={[styles.statValue, isIncome && styles.incomeValue]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statCard: {
    flex: 1,
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  spendingCard: {
    borderColor: Color.mainRed,
  },
  incomeCard: {
    borderColor: Color.successColor,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  incomeLabel: {
    color: Color.successColor,
  },
  statCategory: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 4,
  },
  incomeText: {
    color: Color.colorBlack,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  incomeValue: {
    color: Color.successColor,
  },
});

export default StatCard;
