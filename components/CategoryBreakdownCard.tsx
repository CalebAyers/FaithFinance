import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { scaleFont } from "../utils/responsive";
import { Color, FontFamily, Border, Padding, Gap, FontSize, Height } from "../GlobalStyles";
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
    borderRadius: Border.br_12,    
    borderWidth: 1,
    borderColor: Color.gOLD3,
    padding: Padding.padding_16,
    marginBottom: Gap.gap_16,
  },
  categoryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Gap.gap_4,
  },
  categoryLabel: {
    fontSize: FontSize.fs_16,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  categoryValue: {
    fontSize: FontSize.fs_16,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
  },
  progressBarContainer: {
    height: Height.height_8,
    backgroundColor: '#e0e0e0',
    borderRadius: Border.br_4,
    marginBottom: Gap.gap_10,
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
