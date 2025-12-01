import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppLayout from "../components/AppLayout";
import PeriodToggleThreeWay from "../components/PeriodToggleThreeWay";
import BibleVerses from "../components/BibleVerses";
import StatCard from "../components/StatCard";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import CategoryBreakdownCard from "../components/CategoryBreakdownCard";
import TotalGivingCard from "../components/TotalGivingCard";
import GraphTypeSelector from "../components/GraphTypeSelector";
import { Color, FontFamily } from "../GlobalStyles";

// Insight page - displays financial insights, charts, and trends
const InsightPage = () => {
  const navigation = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState<'Weekly' | 'Monthly' | 'Yearly'>('Monthly');
  const [graphType, setGraphType] = useState<'Pie Chart' | 'Line Chart' | 'Bar Chart'>('Pie Chart');

  // Mock data - replace with real data from your API/database
  const mockData = {
    totalIncome: 1000,
    incomeDate: "Nov 15, 2025", // Last income date
    totalGiving: 150,
    spendingCategories: [
      { name: "Transportation", value: 320 },
      { name: "Food", value: 240 },
      { name: "Entertainment", value: 100 },
    ],
  };
  
  // Calculate dynamic values from the data
  const totalSpending = mockData.spendingCategories.reduce((sum, cat) => sum + cat.value, 0);
  const totalRemaining = mockData.totalIncome - totalSpending - mockData.totalGiving;
  const grandTotal = mockData.totalIncome + totalSpending + mockData.totalGiving;
  
  // Find top spending category
  const topSpendingCategory = mockData.spendingCategories.reduce((max, cat) => 
    cat.value > max.value ? cat : max
  , mockData.spendingCategories[0]);
  
  // Calculate pie chart percentages
  const pieChartData = {
    spent: Math.round((totalSpending / grandTotal) * 100),
    giving: Math.round((mockData.totalGiving / grandTotal) * 100),
    income: Math.round((totalRemaining / grandTotal) * 100),
  };
  
  // Prepare categories for breakdown (spending categories, giving, and remaining money)
  const allCategories = [
    ...mockData.spendingCategories.map(cat => ({ ...cat, color: "red" as const })),
    { name: "Giving", value: mockData.totalGiving, color: "gold" as const },
    { name: "Remaining", value: totalRemaining, color: "green" as const },
  ];
  
  // Calculate percentages for category progress bars (based on total income as 100%)
  const categoryPercentages = allCategories.map(cat => ({
    ...cat,
    percentage: (cat.value / mockData.totalIncome) * 100
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
      {/* Top Stats - Spending and Income */}
      <View style={styles.statsRow}>
        <StatCard
          icon="trending-up"
          label="Top Spending"
          category={topSpendingCategory.name}
          value={`$${topSpendingCategory.value.toFixed(2)}`}
          type="spending"
        />
        <StatCard
          icon="trending-up"
          label="Total Income"
          category={mockData.incomeDate}
          value={`$${mockData.totalIncome.toFixed(2)}`}
          type="income"
        />
      </View>

      {/* Total Giving Card */}
      <TotalGivingCard amount={mockData.totalGiving} />

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
        
        {graphType === 'Line Chart' && <LineChart />}
        
        {graphType === 'Bar Chart' && (
          <BarChart
            incomeValue={mockData.totalIncome}
            spendsValue={totalSpending}
            givingValue={mockData.totalGiving}
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
