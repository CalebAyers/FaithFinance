import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import { formatCurrency } from "../utils/transactionUtils";

interface CategoryItem {
  name: string;
  value: number;
  color: 'gold' | 'green' | 'red';
  percentage: number;
}

interface CategoryBreakdownCardProps {
  categories: CategoryItem[];
}

const CategoryBreakdownCard = ({ categories }: CategoryBreakdownCardProps) => {
  return (
    <View style={styles.categoryCard}>
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryLabel}>{category.name}</Text>
            <Text style={styles.categoryValue}>{formatCurrency(category.value)}</Text>
          </View>
          <View style={styles.progressBarContainer}>
            <View 
              style={[
                styles.progressBar, 
                category.color === 'gold' && styles.progressBarGold,
                category.color === 'green' && styles.progressBarGreen,
                category.color === 'red' && styles.progressBarRed,
                { width: `${category.percentage}%` }
              ]} 
            />
          </View>
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,    
    borderWidth: 1,
    borderColor: Color.gOLD3,
    padding: 20,
    marginBottom: 16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  categoryValue: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  progressBarGold: {
    backgroundColor: Color.gOLD3,
  },
  progressBarGreen: {
    backgroundColor: Color.successColor,
  },
  progressBarRed: {
    backgroundColor: Color.mainRed,
  },
});

export default CategoryBreakdownCard;
