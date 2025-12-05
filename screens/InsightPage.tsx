import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import PeriodToggleThreeWay from "../components/PeriodToggleThreeWay";
import BibleVerses from "../components/BibleVerses";
import StatCard from "../components/StatCard";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import CategoryBreakdownCard from "../components/CategoryBreakdownCard";
import TotalGivingCard from "../components/TotalGivingCard";
import GraphTypeSelector from "../components/GraphTypeSelector";
import { Color, FontFamily } from "../GlobalStyles";
import { useData } from "../context/DataContext";
import { groupTransactionsByCategory, formatDate, formatCurrency } from "../utils/transactionUtils";

/**
 * InsightPage - Financial analytics and visualization screen
 * Displays: Remaining balance, pie/bar charts, category breakdown, giving totals
 * Features: Weekly/Monthly/Yearly toggle, chart type selector, Bible verse
 */
const InsightPage = () => {
  const navigation = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState<'Weekly' | 'Monthly' | 'Yearly'>('Monthly');
  const [graphType, setGraphType] = useState<'Pie Chart' | 'Bar Chart'>('Pie Chart');
  
  const { transactions, getTotalByType, getTransactionsByType } = useData();
  
  // Calculate totals by type
  const totalIncome = getTotalByType('income');
  const totalSpending = getTotalByType('spending');
  const totalGiving = getTotalByType('giving');
  const totalRemaining = totalIncome - totalSpending - totalGiving;
  const grandTotal = totalIncome + totalSpending + totalGiving;
  
  // Get last income date
  const incomeTransactions = getTransactionsByType('income');
  const lastIncomeDate = incomeTransactions.length > 0 
    ? formatDate(new Date(incomeTransactions[0].date))
    : "No income yet";
  
  // Group spending by category
  const spendingTransactions = getTransactionsByType('spending');
  const spendingByCategory = groupTransactionsByCategory(spendingTransactions);
  const spendingCategories = Object.entries(spendingByCategory).map(([name, txns]) => ({
    name,
    value: txns.reduce((sum, t) => sum + t.amount, 0)
  }));
  
  // Find top spending category
  const topSpendingCategory = spendingCategories.length > 0
    ? spendingCategories.reduce((max, cat) => cat.value > max.value ? cat : max, spendingCategories[0])
    : { name: "None", value: 0 };
  
  // Calculate pie chart percentages
  const pieChartData = {
    spent: grandTotal > 0 ? Math.round((totalSpending / grandTotal) * 100) : 0,
    giving: grandTotal > 0 ? Math.round((totalGiving / grandTotal) * 100) : 0,
    income: grandTotal > 0 ? Math.round((totalRemaining / grandTotal) * 100) : 0,
  };
  
  // Prepare categories for breakdown (spending categories, giving, and remaining)
  const allCategories = [
    ...spendingCategories.map(cat => ({ ...cat, color: "red" as const })),
    { name: "Giving", value: totalGiving, color: "gold" as const },
    { name: "Remaining", value: totalRemaining, color: "green" as const },
  ];
  
  // Calculate total of all categories (spending + giving + remaining = income)
  const totalAllCategories = allCategories.reduce((sum, cat) => sum + cat.value, 0);
  
  // Calculate percentages for category progress bars (based on total of all categories)
  const categoryPercentages = allCategories.map(cat => ({
    ...cat,
    percentage: totalAllCategories > 0 ? (cat.value / totalAllCategories) * 100 : 0
  }));

  return (
    <AppLayout 
      title="Insights" 
      navigation={navigation}
      currentScreen="InsightPage"
      stickyHeader={
        <PeriodToggleThreeWay 
          activePeriod={selectedPeriod} 
          onPeriodChange={setSelectedPeriod} 
        />
      }
    >
      {/* Top Stats - Spending and Remaining Income */}
      <View style={styles.statsRow}>
        <StatCard
          icon="trending-up"
          label="Top Spending"
          category={topSpendingCategory.name}
          value={formatCurrency(topSpendingCategory.value)}
          type="spending"
        />
        <StatCard
          icon="trending-up"
          label="By Today"
          category="Remaining"
          value={formatCurrency(totalRemaining)}
          type="income"
        />
      </View>

      {/* Total Giving Card */}
      <TotalGivingCard amount={totalGiving} />

      {/* Graph Type Selector - Dropdown */}
      <GraphTypeSelector 
        selectedType={graphType} 
        onTypeChange={setGraphType} 
      />

      {/* Dynamic Chart based on selection */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>Spending by Category - {graphType}</Text>
        
        {graphType === 'Pie Chart' && (
          <PieChart
            spentPercentage={pieChartData.spent}
            givingPercentage={pieChartData.giving}
            incomePercentage={pieChartData.income}
          />
        )}
        
        {graphType === 'Bar Chart' && (
          <BarChart
            incomeValue={totalIncome}
            spendsValue={totalSpending}
            givingValue={totalGiving}
          />
        )}
      </View>

      {/* Category Breakdown */}
      <CategoryBreakdownCard categories={categoryPercentages} />

      {/* Bible Verse */}
      <View style={styles.bibleVerseContainer}>
        <BibleVerses 
          verseText="Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God"
          verseReference="John 1:12"
        />
      </View>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  // Stats Row
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },

  // Chart Card
  chartCard: {
    backgroundColor: Color.componentsBackgrounf,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Color.gOLD3,
    padding: 8,
    marginBottom: 16,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorBlack,
    marginBottom: 16,
    textAlign: 'center',
  },

  // Bible Verse
  bibleVerseContainer: {
    marginBottom: 20,
  },
});

export default InsightPage;
